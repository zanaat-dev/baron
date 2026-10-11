# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Teams whose developers drive AI coding agents (Claude Code, Codex and similar) day to day, and whose work
tracking lives in a real tracker: Azure DevOps first, then Jira, Linear or GitHub. The visitor is a
developer or technical lead evaluating whether to let an agent write to that tracker: create and move
items, cut branches, open and land pull requests. Confirmed 2026-10-11.

## Product Purpose

Baron is an open-source work-orchestration layer for AI coding agents. It turns issues, branches, pull
requests, CI runs and deployments into one normalized contract, so an agent never learns a vendor's API,
states or column names, and the same flow keeps working when a team changes trackers. Success for the
landing page: the visitor installs it (Claude Code plugin or `npx`). Reading the docs is the second path.

## Positioning

Most tools let an agent read a tracker; Baron is about writing to it, where a wrong guess about a
vendor's state machine does damage. The agent speaks abstract roles (`backlog → ready → in_progress →
in_review → done`, with blocking as an orthogonal flag); each team confirms the mapping from its
tracker's native states once, at `baron init`, and commits it with the repo, so the model never
re-guesses it. Each port (issues, scm, ci, deploy, notify) binds to a provider independently: Azure
issues + GitHub pull requests + Slack notifications is an ordinary setup. Capability gaps are never
silent: each is an explicit `error`, `emulate:<strategy>` or `degrade` decision.

## Operating Context

Used from a terminal and from an agent session: the `baron` CLI (`baron init`, `baron doctor`,
`baron run --recipe …`), an MCP server (`@zanaat/baron-mcp-server`) and a Claude Code plugin
(`/plugin marketplace add zanaat-dev/baron`). Daily loop through recipes: `task-new`, `task-start`,
`task-finish` (draft PR linked to the item, warns if the link did not land), `task-land` (refuses red
or pending checks, merges). Every recipe run is journaled and resumable. Configuration is a committed
`.baron/policy.json`; credentials stay in env or a gitignored `.baron/credentials`.

## Capabilities and Constraints

- Providers: Azure DevOps (issues, scm, ci, deploy), GitHub (issues, scm, ci, deploy), Jira Cloud
  (issues), Linear (issues), Slack (notify). The `docs` port is declared but not implemented.
- MCP tools: `baron_issue_read/write/move`, `baron_scm_read/write`, `baron_ci_read/run`,
  `baron_deploy_read`, `baron_notify_send`, `baron_recipe_list/run`, `baron_memory_append/query`,
  `baron_native_request` (last-resort escape hatch).
- Apache-2.0, open source. Packages `@zanaat/baron-*` on npm; MCP Registry name
  `io.github.zanaat-dev/baron`; repository `github.com/zanaat-dev/baron`.
- The site is static (Astro + Starlight on GitHub Pages at baron.zanaat.dev), English, and loads no
  third-party resources at runtime.

## Brand Commitments

- Name: Baron, written "baron" in the wordmark. A zanaat project (zanaat.dev); Lonca is a sibling
  product with its own brand, which Baron does not reuse.
- Voice: plain, specific, developer to developer. No hype words.
- Visual standing (chosen 2026-10-11, over three bolder directions): the category standard for developer
  tools, played straight at full craft. The site sits alongside Linear, Vercel, Resend and Raycast, and
  their craft level is the bar. Ruled out regardless: the hacker/terminal cliché, generic SaaS
  (purple gradients, three-icon card rows, logo clouds), corporate coldness, and anything cute.

## Evidence on Hand

- Live validation against a real Azure DevOps team project (states New / Active / Test / Closed). It
  must be presented anonymously ("an Azure DevOps team"), never by the team's or company's name.
- Demo recording: `docs/demo/baron-demo.gif` and `docs/demo/baron-demo.cast` (asciinema).
- Published on npm and listed in the official MCP Registry; open source on GitHub.
- No customer names, testimonials, logos, usage numbers or benchmarks exist. Do not fabricate any.

## Product Principles

1. Writing is the point: show the agent changing real work state, not reading it.
2. One vocabulary, many trackers: the role layer is the idea every surface returns to.
3. Nothing silent: gaps, failed links and pending checks are said out loud.
4. Configuration over guessing: the mapping is confirmed by a human and committed.
5. Open and local: no lock-in, no hosted dependency, credentials never leave the developer's machine.
