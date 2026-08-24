# Talocode — Open-Source Infrastructure for AI-Native Work

Build locally with open-source tools. Scale with hosted APIs through `TALOCODE_API_KEY`.

Talocode helps developers and builders make work readable to agents and controllable by humans. Every product ships as an open-source tool you can run yourself, with a hosted API layer when you need scale.

---

## Ecosystem

| Category | Product | Description | Status |
|----------|---------|-------------|--------|
| **Backend Cloud** | [Stacklane](https://github.com/talocode/stacklane) | Backend cloud platform with Postgres, auth, storage, functions, and local-first billing | Experimental |
| **Coworker Platform** | [WorkLane](https://github.com/talocode/worklane) | Open-source AI coworker platform for teams | Experimental |
| **Assistant OS** | [Builder OS](https://github.com/talocode/builder-os) | Open source assistant operating system for developers and AI builders | Experimental |
| **AI Coding** | [Codra](https://github.com/talocode/codra) | Local-first AI coding agent built for real software work | Experimental |
| **Agent Browser** | [Agent Browser](https://github.com/talocode/agent-browser) | A from-scratch Rust browser for software agents | Experimental |
| **Learning** | [Tera](https://github.com/talocode/tera) | The AI Learning Companion | Experimental |
| **Documents** | [DocuLane](https://github.com/talocode/doculane) | Office document CLI for agents — read, write, and edit Word, Excel, PowerPoint without Office installed | Live |
| **Data Analysis** | [DataLane](https://github.com/talocode/datalane) | AI data analysis canvas — connect CSV/JSON/live URLs, describe charts in plain English | Experimental |
| **Web Data** | [WebDataLane](https://github.com/talocode/webdatalane) | Turn webpages into clean markdown, metadata, links, and structured data through one API | Experimental |
| **Invoices** | [InvoiceLane](https://github.com/talocode/invoicelane) | Turn receipts, invoices, and business documents into clean structured data through one API | Planned |
| **Email** | [MailLane](https://github.com/talocode/maillane) | Gmail OAuth email API — send transactional emails from any hosting, no SMTP ports needed | Experimental |
| **Search** | [SearchLane](https://github.com/talocode/searchlane) | Agent web search and research API with citations | Live |
| **X Search** | [XSearchLane](https://github.com/talocode/xsearchlane) | Realtime X search for agents — MCP server, CLI, SDK, hosted API | Live |
| **X Growth** | [SignalLane](https://github.com/talocode/signallane) | Growth intelligence for builders — find conversations, write sharper replies, grow on X | Experimental |
| **X Replies** | [ReplyLane](https://github.com/talocode/replylane) | X reply opportunity and algorithm risk intelligence | Experimental |
| **X Agent** | [X Agent](https://github.com/talocode/x-agent) | Open-source X/Twitter growth agent — CLI, SDK, MCP, REST API, and skill packs | Experimental |
| **X Pro** | [XProLane](https://github.com/talocode/xprolane) | Open-source X Pro setup assistant for builders, founders, and creators | Experimental |
| **Video** | [VideoLane](https://github.com/talocode/videolane) | Agentic video production engine for product demos, tutorials, and launch videos | Experimental |
| **Video Infra** | [ClipLoop](https://github.com/talocode/cliplane) | Open-source video infrastructure for creators and agents | Experimental |
| **Audio** | [AudioLane](https://github.com/talocode/audiolane) | Audio transcription CLI, SDK, MCP server, and hosted API for agents | Experimental |
| **Launch Assets** | [LaunchPix](https://github.com/talocode/launchpix) | Turns raw product screenshots into polished, high-converting marketing assets | Experimental |
| **Screen** | [ScreenLane](https://github.com/talocode/screenlane) | Screen-aware voice command layer for AI agents | Experimental |
| **Messaging** | [MessageLane](https://github.com/talocode/messagelane) | Consent-aware SMS campaigns, provider routing, and delivery operations | Live |
| **Telegram Bots** | [BotLane](https://github.com/talocode/botlane) | Telegram bridge for AI-powered bots — 1:1 and group chat, session memory, allowlist | Experimental |
| **Memory** | [MemoryLane](https://github.com/talocode/memorylane) | Agent-native memory layer — persistent context, semantic recall, session history | Experimental |
| **Context** | [ContextLane](https://github.com/talocode/contextlane) | Context ingestion pipeline — files, folders, URLs, repos, and notes for persistent agents | Experimental |
| **Vector Memory** | [VectorLane](https://github.com/talocode/vectorlane) | Local vector memory engine — ingest, chunk, embed, and search documents | Experimental |
| **Wiki** | [Wiki](https://github.com/talocode/wiki) | Agent knowledge base — structured wiki of plain Markdown files | Experimental |
| **Skills** | [Talocode Skills](https://github.com/talocode/skills) | Reusable AI-agent skill files for Codex, Claude Code, Cursor, and Hermes | Experimental |
| **Skill Runtime** | [SkillLane](https://github.com/talocode/skilllane) | Skill runtime and registry — create, validate, install, run, and share agent skills | Experimental |
| **Codex Plugin** | [Talocode in Codex](https://github.com/talocode/talocode-in-codex) | Tera, Codra, Skills, ClipLoop, and Tradia inside Codex, OpenCode, and Claude | Experimental |
| **Tool Gateway** | [GateLane](https://github.com/talocode/gatelane) | MCP gateway and agent tool control plane — policy, access, and execution gates | Experimental |
| **Policy Gates** | [PolicyLane](https://github.com/talocode/policylane) | Agent policy gate — allow/deny tool actions and secret redaction | Experimental |
| **Retries** | [RetryLane](https://github.com/talocode/retrylane) | Tool-call reliability — retries, backoff, circuit breakers | Experimental |
| **Handoffs** | [HandoffLane](https://github.com/talocode/handofflane) | Schema and semantic handoff validation between agent steps | Experimental |
| **Tracing** | [TraceLane](https://github.com/talocode/tracelane) | Agent run tracing — spans, tool calls, cost, and failure receipts | Experimental |
| **Evals** | [EvalLane](https://github.com/talocode/evallane) | Lightweight eval harness for agent outputs — assertions and suites | Experimental |
| **Reliability** | [ReliabilityLane](https://github.com/talocode/reliabilitylane) | Reliability patterns for AI agents — failures, retries, verification, incidents | Experimental |
| **Verification** | [VerifyLane](https://github.com/talocode/verifylane) | Deterministic verification for AI-generated code — secrets, security, diff review | Experimental |
| **Experiments** | [ExperimentLane](https://github.com/talocode/experimentlane) | Evidence-driven experimentation engine for AI agents | Experimental |
| **Lean Building** | [LeanLane](https://github.com/talocode/leanlane) | Stop AI agents from over-building — decision ladder, diff scoreboard, prune review | Experimental |
| **Audits** | [AuditLane](https://github.com/talocode/auditlane) | Local-first evidence-based security audit workflows for codebases and AI agents | Experimental |
| **Status Pages** | [StatusLane](https://github.com/talocode/statuslane) | Uptime monitoring, incident tracking, and status pages | Experimental |
| **GEO** | [GeoLane](https://github.com/talocode/geolane) | AI Search Visibility Intelligence — GEO audit, crawler access, citation readiness | Experimental |
| **Crawlers** | [CrawlerLane](https://github.com/talocode/crawlerlane) | AI crawler intelligence — track what bots and AI assistants do on your website | Experimental |
| **Open Source Intel** | [OpenSourceLane](https://github.com/talocode/opensourcelane) | Open-source software intelligence — SaaS alternatives, repo risk, migration planning | Experimental |
| **Trading** | [Tradia](https://github.com/talocode/tradia) | Agentic trading intelligence — proposals, risk checks, journals, performance reports | Experimental |
| **CAD** | [ForgeCAD](https://github.com/talocode/forgecad) | Local-first CAD workflow engine for parametric OpenSCAD scripts, BOMs, and reports | Experimental |
| **Calculator** | [CalcLane](https://github.com/talocode/calclane) | Open-source Standard and Scientific calculator — self-hostable, local-first history | Experimental |
| **Live Coding** | [CodeLane](https://github.com/talocode/codelane) | Twitch for coding — stream your code live, watch a 3D git graph | Experimental |
| **Dev Toolbox** | [DevTool](https://github.com/talocode/devtool) | Unified CLI toolbox — base64, JWT, timestamps, UUID, JSON, hash, URL, colors | Experimental |
| **UGC Workflow** | [UGCLane](https://github.com/talocode/ugclane) | Programmable UGC workflow API for original hooks, scripts, calendars, and experiments | Experimental |
| **Hosted API** | [Talocode Cloud](./CLOUD.md) | Hosted API layer with wallet credits and product namespaces | Experimental |

---

## Talocode Cloud

Talocode Cloud is the hosted API layer for the entire ecosystem. One `TALOCODE_API_KEY` gives you access to every product API with prepaid wallet billing.

```bash
# All product APIs are available under /v1/{product}/ namespaces
curl https://api.talocode.site/v1/router/chat/completions \
  -H "Authorization: Bearer $TALOCODE_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "talocode/auto",
    "messages": [
      { "role": "user", "content": "Hello" }
    ]
  }'
```

## MCP

Talocode MCP exposes all Talocode Cloud product APIs through the [Model Context Protocol](https://modelcontextprotocol.io).

**Direct HTTP** — For clients that support custom headers:
```
Endpoint: POST https://api.talocode.site/mcp
Auth:     Authorization: Bearer $TALOCODE_API_KEY
```

**Local Bridge** — For clients that cannot send custom headers:
```
npx @talocode/mcp
```
The bridge reads `TALOCODE_API_KEY` from the environment and proxies to the remote endpoint.

[Learn more about Talocode MCP →](./docs/mcp.md)

## SDK

Official SDK: `@talocode/sdk` (published as `@talocode/sdk-client`).

```ts
import { Talocode } from "@talocode/sdk";

const talocode = new Talocode({ apiKey: process.env.TALOCODE_API_KEY });
const result = await talocode.tera.writing.rewrite({ text: "Hello", style: "clear" });
const video = await talocode.cliploop.brief({ prompt: "Weekly promo", channel: "twitter" });
const sites = await talocode.agentBrowser.check({ url: "https://example.com", screenshot: true });
const codraSummary = await talocode.codra.repoSummary({ files: [{ path: "src/main.ts", content: "..." }] });
const skill = await talocode.skills.generate.githubProfile({ username: "octocat", target: "cursor" });
```

- **One API key** — use `TALOCODE_API_KEY` for every product
- **One SDK** — `@talocode/sdk` for all hosted APIs
- **Prepaid wallet** — 1 credit = $0.01 USD, 100 free credits on signup
- **Pay-per-use** — every API call deducts credits from your wallet
- **OpenAI-compatible router** — automatic provider fallback (OpenAI, OpenRouter, Gemini)
- **Top-up via Stripe** — minimum $5, instant credit

[Learn more about Talocode Cloud →](./CLOUD.md)

---

## Links

| Resource | URL |
|----------|-----|
| Website | [talocode.site](https://talocode.site) — GitHub Pages landing page (legacy: [talocode.xyz](https://talocode.xyz)) |
| Source | [github.com/talocode/talocode](https://github.com/talocode/talocode) |
| Cloud Dashboard | [dashboard.talocode.site](https://dashboard.talocode.site) |
| API Endpoint | [api.talocode.site](https://api.talocode.site) |
| Documentation | [docs.talocode.site](https://docs.talocode.site) |
| GitHub | [github.com/talocode](https://github.com/talocode) |

---

## Status

| Status | Meaning |
|--------|---------|
| **Live** | Running in production, stable APIs |
| **Experimental** | Working but evolving — APIs may change |
| **Planned** | Not yet built, design phase |

## Support

Open-source Talocode products are built and maintained by Abdulmuiz Adeyemo.

Sponsor the work: https://github.com/sponsors/Abdulmuiz44

## Talocode ecosystem

Part of **[Talocode](https://github.com/talocode)** — open-source workflow layers for builders. Explore sibling projects:

| Project | What it is |
|---------|------------|
| **[ScreenLane](https://github.com/talocode/screenlane)** | Screen-aware voice command layer |
| **[Tera](https://github.com/talocode/tera)** | AI chat & assistant |
| **[Codra](https://github.com/talocode/codra)** | Local coding agent |
| **[GateLane](https://github.com/talocode/gatelane)** | MCP gateway & agent tool control plane |
| **[ContextLane](https://github.com/talocode/contextlane)** | Context ingestion for persistent agents |
| **[MemoryLane](https://github.com/talocode/memorylane)** | Persistent agent memory |
| **[SignalLane](https://github.com/talocode/signallane)** | X growth intelligence |
| **[ReplyLane](https://github.com/talocode/replylane)** | X reply opportunity intelligence |
| **[CrawlerLane](https://github.com/talocode/crawlerlane)** | Crawler / SEO intelligence |
| **[WebDataLane](https://github.com/talocode/webdatalane)** | Web extraction to structured data |
| **[SearchLane](https://github.com/talocode/searchlane)** | Search layer for agents |
| **[InvoiceLane](https://github.com/talocode/invoicelane)** | Invoicing tools |
| **[GeoLane](https://github.com/talocode/geolane)** | Geo intelligence |
| **[UgcLane](https://github.com/talocode/ugclane)** | UGC workflows |
| **[OpenSourceLane](https://github.com/talocode/opensourcelane)** | Open-source distribution tools |
| **[StackLane](https://github.com/talocode/stacklane)** | Builder stack platform |
| **[Tradia](https://github.com/talocode/tradia)** | Trading intelligence |
| **[Agent Browser](https://github.com/talocode/agent-browser)** | Browser automation for agents |
| **[Talocode](https://github.com/talocode/talocode)** | Org home & control plane **(this repo)** |
| **[Skills](https://github.com/talocode/skills)** | Shared agent skills |
| **[X Agent](https://github.com/talocode/x-agent)** | X automation agent |
| **[LaunchPix](https://github.com/talocode/launchpix)** | Launch tooling |
| **[ForgeCAD](https://github.com/talocode/forgecad)** | CAD workflows |
| **[WorkLane](https://github.com/talocode/worklane)** | Work automation |
| **[ClipLoop](https://github.com/talocode/cliploop)** | Clip / video loops |
| **[MessageLane](https://github.com/talocode/messagelane)** | Consent-aware SMS campaigns |
| **[XSearchLane](https://github.com/talocode/xsearchlane)** | Realtime X research |

MCP-compatible agents integrate via each product's MCP server where available ([Model Context Protocol](https://modelcontextprotocol.io/)).

More: [github.com/talocode](https://github.com/talocode) · [talocode.site](https://talocode.site) · [docs.talocode.site](https://docs.talocode.site)
