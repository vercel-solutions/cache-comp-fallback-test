# CC Fallback Test Monorepo

This is a Turborepo monorepo containing two Next.js applications for testing cache component fallback behaviors.

## Structure

- `apps/ppr-with-fallbacks` - Next.js application with fallbacks
- `apps/ppr-no-fallbacks` - Next.js application without fallbacks

Both apps use Turbopack for development and share common tooling configurations.

## Getting Started

Install dependencies:

```bash
pnpm install
```

### Development

Run all apps in development mode:

```bash
pnpm dev
```

Run a specific app:

```bash
pnpm dev --filter ppr-with-fallbacks
pnpm dev --filter ppr-no-fallbacks
```

### Build

Build all apps:

```bash
pnpm build
```

Build a specific app:

```bash
pnpm build --filter ppr-with-fallbacks
pnpm build --filter ppr-no-fallbacks
```

### Linting & Formatting

Lint all apps:

```bash
pnpm lint
```

Format all apps:

```bash
pnpm format
```

## Learn More

To learn more about the tools used in this monorepo:

- [Turborepo Documentation](https://turbo.build/repo/docs) - learn about Turborepo
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Turbopack Documentation](https://nextjs.org/docs/app/api-reference/next-cli#turbopack) - learn about Turbopack
