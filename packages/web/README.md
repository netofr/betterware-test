# Betterware Web

The browser storefront for the Betterware mini e-commerce experience. Built with React, Vite, Tailwind CSS, and Redux Toolkit, consuming shared business logic from the `shared` workspace package.

## Tech Stack

| Category | Libraries |
| --- | --- |
| Framework | React 19, Vite 8 |
| Language | TypeScript 6 |
| Styling | Tailwind CSS 4 |
| Routing | React Router 7 |
| State | Redux Toolkit, react-redux |
| Shared logic | `shared` workspace (`products`, `cart`, API client) |

## Prerequisites

- Node.js ≥ 22.11.0
- Dependencies installed from the **monorepo root** (`npm install`)

## Environment Variables

Create a `.env` file from the example:

```sh
cp .env.example .env
```

| Variable | Description |
| --- | --- |
| `VITE_PRODUCTS_API_URL` | Products API endpoint (default: `https://fakestoreapi.com/products`) |

The API is configured at startup in `src/main.tsx` via `configureApi()` from `shared`.

## Scripts

Run from the monorepo root unless noted.

| Command | Description |
| --- | --- |
| `npm run web` | Start Vite dev server with HMR |
| `npm run dev --workspace=web` | Same as above |
| `npm run build --workspace=web` | Type-check and production build |
| `npm run preview --workspace=web` | Preview the production build |
| `npm run lint --workspace=web` | Run ESLint |

## Project Structure (FSD)

```
src/
├── app/           # Store, hooks, providers, cart storage
├── pages/         # Route-level page components
├── widgets/       # Composite UI blocks (Header, Layout, Footer)
├── entities/      # Platform-specific entity UI (e.g. ProductCard)
└── shared/        # Local UI primitives (Skeleton, ProductCardSkeleton)
```

Layer dependency rule: `app` → `pages` → `widgets` → `features` → `entities` → `shared`.

> Platform-agnostic Redux slices and API logic live in `packages/shared`, not in this `shared/` folder.

## Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/products` | Product list |
| `/products/:id` | Product detail |
| `/cart` | Shopping cart |
| `/checkout` | Checkout |

## Redux Store

Configured in `src/app/store.ts`:

- **`products`** — product catalog from `shared` (`fetchProducts` thunk)
- **`cart`** — normalized cart state from `shared`, persisted to `localStorage`

Use typed hooks from `src/app/hooks.ts`:

```ts
import { useAppDispatch, useAppSelector } from '@/app/hooks';
```

## Cart Persistence

Cart state is hydrated synchronously on load and saved after every cart action via `createCartPersistenceMiddleware` from `shared`. Storage is implemented in `src/app/cart-storage.ts` using `localStorage`.

## Development Notes

- After changing `packages/shared`, rebuild: `npm run build:shared` from the repo root.
- Styling follows Tailwind utility-first conventions; see `.cursor/rules/tailwindcss.mdc` for team standards.
- Import from barrel files only — avoid deep imports into slice internals.

## Related

- [Monorepo README](../../README.md)
- [Shared package README](../shared/README.md)
- [FSD architecture guide](../../docs/feature-sliced-design.md)
