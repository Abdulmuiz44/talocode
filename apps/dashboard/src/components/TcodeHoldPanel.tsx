import { useCallback, useEffect, useState } from 'react'
import { api, ApiError, type TcodeHoldings } from '../lib/api'
import { encodeBase58 } from '../lib/base58'
import { useToast } from './Toast'

type SolanaProvider = {
  connect: () => Promise<{ publicKey?: { toBase58?: () => string } | string } | void>
  publicKey?: { toBase58?: () => string } | string
  signMessage: (
    message: Uint8Array,
    encoding?: string,
  ) => Promise<Uint8Array | { signature: Uint8Array }>
}

function getSolanaProvider(): SolanaProvider | null {
  if (typeof window === 'undefined') return null
  const injected = window as Window & {
    solana?: SolanaProvider
    phantom?: { solana?: SolanaProvider }
  }
  if (injected.solana && typeof injected.solana.connect === 'function') return injected.solana
  if (injected.phantom?.solana && typeof injected.phantom.solana.connect === 'function') {
    return injected.phantom.solana
  }
  return null
}

function publicKeyToAddress(value: { toBase58?: () => string } | string | undefined): string {
  if (!value) return ''
  if (typeof value === 'string') return value
  if (typeof value.toBase58 === 'function') return value.toBase58()
  return String(value)
}

function shortAddress(address: string) {
  if (address.length < 10) return address
  return `${address.slice(0, 4)}…${address.slice(-4)}`
}

function periodLabel(period: string) {
  const [year, month] = period.split('-').map(Number)
  if (!year || !month) return period
  return new Date(Date.UTC(year, month - 1, 1)).toLocaleString('en-US', {
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
}

export default function TcodeHoldPanel({
  projectId,
  onClaimed,
}: {
  projectId: string
  onClaimed: () => void
}) {
  const { toast } = useToast()
  const [holdings, setHoldings] = useState<TcodeHoldings | null>(null)
  const [status, setStatus] = useState<'idle' | 'loading' | 'linking' | 'claiming'>('idle')

  const refresh = useCallback(async () => {
    if (!projectId) {
      setHoldings(null)
      return
    }
    setStatus('loading')
    try {
      const next = await api.getTcodeHoldings(projectId)
      setHoldings(next)
    } catch (err) {
      const notLinked =
        err instanceof ApiError &&
        (err.status === 404 || /no linked wallet/i.test(err.message))
      if (notLinked) {
        setHoldings(null)
      } else {
        toast(err instanceof Error ? err.message : 'Could not load holdings', 'error')
      }
    } finally {
      setStatus('idle')
    }
  }, [projectId, toast])

  useEffect(() => {
    void refresh()
  }, [refresh])

  async function linkWallet() {
    if (!projectId) return
    const provider = getSolanaProvider()
    if (!provider) {
      toast('Install a Solana browser wallet, then try again.', 'error')
      return
    }
    setStatus('linking')
    try {
      const connected = await provider.connect()
      const address =
        publicKeyToAddress(provider.publicKey) || publicKeyToAddress(connected?.publicKey)
      if (!address) throw new Error('Wallet did not return an address')
      const challenge = await api.createTcodeChallenge(projectId)
      const signed = await provider.signMessage(new TextEncoder().encode(challenge.message), 'utf8')
      const signatureBytes = signed instanceof Uint8Array ? signed : signed.signature
      await api.linkTcodeWallet({
        projectId,
        walletAddress: address,
        signature: encodeBase58(signatureBytes),
        nonce: challenge.nonce,
      })
      toast(`Linked ${shortAddress(address)}`, 'success')
      await refresh()
    } catch (err) {
      toast(err instanceof Error ? err.message : 'Could not link wallet', 'error')
      setStatus('idle')
    }
  }

  async function claim() {
    if (!projectId) return
    setStatus('claiming')
    try {
      const result = await api.claimTcodeCredits(projectId)
      if (result.granted > 0) {
        toast(
          `Claimed ${result.granted.toLocaleString()} credits for ${periodLabel(result.period)}.`,
          'success',
        )
        onClaimed()
      } else if (result.alreadyClaimed) {
        toast(`Already claimed ${periodLabel(result.period)}.`, 'info')
      } else {
        toast('Hold at least 1 $TCODE to claim this month.', 'info')
      }
      await refresh()
    } catch (err) {
      toast(err instanceof Error ? err.message : 'Could not claim credits', 'error')
      setStatus('idle')
    }
  }

  const canClaim = Boolean(holdings?.tier) && !holdings?.claimedThisPeriod && status === 'idle'
  const busy = status === 'linking' || status === 'claiming'

  return (
    <div className="mb-6">
      <div className="rounded-xl border border-border bg-panel p-5">
        <h2 className="mb-1 text-sm font-medium text-foreground">$TCODE hold-to-earn</h2>
        <p className="mb-4 text-xs text-muted">
          Hold $TCODE in a Solana wallet you control, sign to link it to this project, then claim
          this UTC month&apos;s API credits. Credits are usage credits, not cash.
        </p>

        {holdings ? (
          <dl className="mb-4 grid gap-3 sm:grid-cols-2">
            <div>
              <dt className="text-xs text-secondary">Linked wallet</dt>
              <dd className="mt-0.5 font-mono text-sm text-foreground">{shortAddress(holdings.walletAddress)}</dd>
            </div>
            <div>
              <dt className="text-xs text-secondary">Holdings</dt>
              <dd className="mt-0.5 text-sm font-medium text-foreground tabular-nums">
                {holdings.tcodeTokens.toLocaleString()} $TCODE
              </dd>
            </div>
            <div>
              <dt className="text-xs text-secondary">Tier</dt>
              <dd className="mt-0.5 text-sm font-medium text-foreground">
                {holdings.tier
                  ? `${holdings.tier.key} · ${holdings.tier.monthlyCredits.toLocaleString()} credits / month`
                  : 'Below 1 $TCODE'}
              </dd>
            </div>
            <div>
              <dt className="text-xs text-secondary">{periodLabel(holdings.period)}</dt>
              <dd className="mt-0.5 text-sm font-medium text-foreground">
                {holdings.claimedThisPeriod ? 'Already claimed' : 'Not claimed yet'}
              </dd>
            </div>
          </dl>
        ) : (
          <p className="mb-4 text-sm text-secondary">
            {status === 'loading'
              ? 'Checking linked wallet…'
              : projectId
                ? 'No Solana wallet linked to this project yet.'
                : 'Create a project first, then link a wallet.'}
          </p>
        )}

        <div className="flex flex-col gap-2 sm:flex-row">
          <button
            type="button"
            disabled={!projectId || busy}
            onClick={() => void linkWallet()}
            className="w-full sm:w-auto rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-secondary hover:bg-hover hover:text-foreground disabled:opacity-40"
          >
            {status === 'linking' ? 'Waiting for signature…' : holdings ? 'Relink wallet' : 'Connect Solana wallet'}
          </button>
          <button
            type="button"
            disabled={!canClaim}
            onClick={() => void claim()}
            className="w-full sm:w-auto rounded-lg bg-foreground px-4 py-2.5 text-sm font-medium text-surface hover:opacity-90 disabled:opacity-40"
          >
            {status === 'claiming'
              ? 'Claiming…'
              : holdings
                ? `Claim ${periodLabel(holdings.period)} credits`
                : 'Claim monthly credits'}
          </button>
        </div>
      </div>
    </div>
  )
}
