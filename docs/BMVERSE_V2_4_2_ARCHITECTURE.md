# BMverse Platform — blueprint v2.4.2 implementation
## Scope
The platform covers public site, Explore, metaverse/gaming, education, marketplace, DEX, community, member dashboard, creator studio, admin, analytics and operational infrastructure. ANTverse is a collection/experience within BMverse, not the platform's central product.
## Source of requirements
BMverse Platform Architecture & Development Blueprint (37 pages), uploaded by the project owner, version 2.4.2. This repository implementation is an early scaffold; the blueprint version does not mean the app is released.
## Repository layout
- `platform/`: Next.js static-export frontend suitable for GitHub Pages
- `server/`: separate Node.js read-only API foundation, not hosted by Pages
- `contracts/`: unreviewed ERC-721 example; no live deployment
- `infra/`: local Postgres/Redis only
- `docs/`: project decisions, security and phase gates
- Legacy React Create React App remains in `src/`, unchanged until migration is agreed.
## Target technical system
Next.js/React/TypeScript UI; NestJS-like modular Node.js domain APIs; PostgreSQL; Redis queues; object storage/IPFS; indexing pipeline handling reorgs; audited marketplace settlement; DEX aggregator integration; configurable Ethereum Layer-2 chain adapters; game SDK; OpenTelemetry; protected admin app. These target services are NOT fully implemented in this scaffold.
## Security gates
- Never collect seed phrases/private keys.
- Block real swaps/listings/minting until supported networks, verified contracts, back-end transaction preparation, fee disclosures and end-to-end testnet proof exist.
- Independent contract review, admin RBAC/MFA, idempotent indexer, security tests and release approval are prerequisites to mainnet.
- Marketplace catalog names are snapshots, not verified images or live offers. No speculative prices or ownership.
## Hosting
GitHub Pages only serves built static frontend. Run `server/`, database, queue/indexer and any backend services on independent managed infrastructure behind TLS. Do not expose privileged services through Pages.
## Open decisions
Primary L2 and RPC; supported wallets; contract ownership and addresses; OpenSea metadata/image backfill; royalty and marketplace fee policy; approved DEX provider; treasury governance; release domain; operational owners and privacy/legal review.
