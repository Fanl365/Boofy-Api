<p align="center"><img src="./assets/boofy-banner.png" width="100%" alt="Boofy — Build · Connect · Grow" /></p>

# Boofy API

Boofy API is the backend data service for the Boofy DeFi project. It aggregates vault metadata, prices, APYs, TVL, chain configuration, and related protocol data for consumption by the Boofy application and other clients.

> **Development status:** active rebrand and engineering migration. Production endpoints, deployment addresses, token identifiers, and public domains are considered unverified until explicitly published by the Boofy team.

## Project goals

- Serve consistent multichain vault and market data.
- Maintain transparent chain and protocol configuration.
- Provide reusable endpoints for Boofy App and future integrations.
- Improve validation, observability, and deployment reliability.

## Requirements

- Node — version in [`.nvmrc`](.nvmrc)
- pnpm — version pinned in [`package.json`](package.json)

## Development

```bash
pnpm install
pnpm start
```

Common commands:

| Command | Purpose |
| --- | --- |
| `pnpm start` | Run the API from source |
| `pnpm build` | Build the production bundle |
| `pnpm start:prod` | Run the built bundle |
| `pnpm typecheck` | Type-check the project |
| `pnpm lint` | Run lint/format checks |

## Current work

The active engineering tracks are:

1. Boofy namespace and configuration cleanup.
2. Chain/address data validation before production use.
3. API reliability, caching, and error handling.
4. App/API integration and release readiness.

See [ROADMAP.md](ROADMAP.md) and repository Issues for current work.

## Repository history

Boofy API preserves the upstream development history used as its technical foundation. Historical commits retain their original authorship and timestamps. New Boofy work is tracked independently through current commits and issues.

## Team

- **Fan Long** — Co-Founder
- **David Woo** — Developer
- **Tyler Casselman** — Developer
- **Albert Jones** — Developer

See [BOOFY_TEAM.md](BOOFY_TEAM.md).

## Important dependency note

The published upstream package `@beefyfinance/blockchain-addressbook` may remain referenced where no verified Boofy-compatible replacement exists. It should not be renamed to a nonexistent package.

## Migration notice

Read [BOOFY_MIGRATION_NOTICE.md](BOOFY_MIGRATION_NOTICE.md) before production use. Historical chain addresses, token identifiers, endpoints, and social/domain values are not automatically valid Boofy production configuration.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

See [LICENSE](LICENSE).
