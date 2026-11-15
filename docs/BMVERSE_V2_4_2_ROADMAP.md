# BMverse v2.4.2 implementation roadmap
This is the blueprint's planning sequence, not a delivery guarantee.
|Phase|Objective|Acceptance gate|
|---|---|---|
|0|Discovery, decisions, user journeys and threat model|Scope/architecture approved|
|1|Monorepo, design system, account/session, wallet, database, CI and staging|Tests/observability in staging|
|2|Public site, Explore, profiles, member dashboard, admin shell|Player/admin journeys pass|
|3|Creator Studio, game/course catalogs, publishing, content storage|Reviewed creator publishing works|
|4|ERC-721/1155 marketplace, indexing, listings and purchase flows|End-to-end testnet marketplace|
|5|DEX token registry, aggregator quote, wallet swap, transaction history|Testnet swaps and integration review|
|6|Game launch gateway, SDK, events, achievements, Unity/WebGL|Pilot experience integrated|
|7|Security review, penetration/load tests, beta feedback|No open critical/high release blockers|
|8|Multisig, backup/restore, formal readiness approval|Go/no-go decision|
|9|Additional worlds, creators, chains and analytics|Scale justified by usage|
## Status as of scaffold v0.4
Static public UI: implemented in basic form. NFT names: 32 imported as historical catalog only. Wallet: optional injected provider connection preview. API: read-only Node skeleton. All account, trading, minting, purchases, moderation, indexing, chain settlements and production security: **not implemented**.
