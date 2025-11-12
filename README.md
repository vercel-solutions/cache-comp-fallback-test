# CC Fallback Test Monorepo

This is a Turborepo monorepo containing two Next.js applications for testing cache component fallback behaviors.

## Structure

- `apps/app1` - First Next.js application
- `apps/app2` - Second Next.js application

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
pnpm dev --filter app1
pnpm dev --filter app2
```

### Build

Build all apps:

```bash
pnpm build
```

Build a specific app:

```bash
pnpm build --filter app1
pnpm build --filter app2
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
