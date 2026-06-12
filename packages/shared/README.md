# Betterware Shared

Cross-platform business logic consumed by both the **web** and **mobile** applications. This package compiles TypeScript to `dist/` and is imported as the `shared` workspace dependency.

## Purpose

Centralize code that must behave identically across platforms:

- Redux slices and selectors (products, cart)
- API client and configuration
- Cart persistence utilities (storage-agnostic middleware)
- Shared types and utilities

Platform-specific concerns — UI components, routing, and storage backends — stay in `packages/web` and `packages/mobile`.

## Tech Stack

| Category | Libraries |
| --- | --- |
| Language | TypeScript 5.9 |
| State | Redux Toolkit (`@reduxjs/toolkit` peer dependency) |
| HTTP | Axios |

## Build

```sh
# From monorepo root
npm run build:shared

# Or from this package
npm run build    # tsc → dist/
npm run clean    # remove dist/
```

`postinstall` at the repo root runs `build:shared` automatically. Rebuild after any change to `src/` before testing in web or mobile.

## Consumption

Both apps declare `"shared": "*"` in `package.json` and import from the package root:

```ts
import {
  fetchProducts,
  productReducer,
  cartReducer,
  addToCart,
  selectCartItemsCount,
  configureApi,
  createCartPersistenceMiddleware,
} from 'shared';
```

Compiled output is resolved via `package.json` `exports`:

```json
{
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts"
}
```

## Package Structure

```
src/
├── api/
│   ├── client.ts       # Axios instance
│   ├── config.ts       # configureApi() / getApiConfig()
│   └── index.ts
├── entities/
│   ├── cart/
│   │   ├── cartSlice.ts
│   │   ├── cartSelectors.ts
│   │   ├── cart-persistence.ts
│   │   ├── types.ts
│   │   └── index.ts
│   └── product/
│       ├── productSlice.ts
│       ├── productSelectors.ts
│       ├── productThunks.ts
│       ├── api/get-products.ts
│       ├── types.ts
│       └── index.ts
├── utils/
│   └── formatGreeting.ts
└── index.ts            # Public API barrel
```

## API Configuration

Apps must call `configureApi()` before any API request:

```ts
import { configureApi } from 'shared';

configureApi({
  productsEndpoint: 'https://fakestoreapi.com/products',
});
```

- **Web** reads `import.meta.env.VITE_PRODUCTS_API_URL` in `src/main.tsx`
- **Mobile** reads `PRODUCTS_API_URL` from generated `src/config/env.ts`

## Entities

### Product

Normalized Redux state for the product catalog.

| Export | Description |
| --- | --- |
| `productReducer` | Slice reducer for the store |
| `fetchProducts` | Async thunk to load products from the API |
| `getProducts` | Direct API fetch function |
| `selectAllProducts`, `selectProductById`, … | Memoized selectors |
| `Product`, `ProductsState`, `ProductsStatus` | Types |

### Cart

Normalized cart state using `createEntityAdapter`.

| Export | Description |
| --- | --- |
| `cartReducer` | Slice reducer for the store |
| `addToCart`, `removeFromCart`, `incrementCartItem`, … | Actions |
| `selectCartLineItems`, `selectCartTotalAmount`, … | Selectors |
| `createCartPersistenceMiddleware` | Saves cart after every cart action |
| `loadCartStateSync` / `loadCartState` | Hydrate cart from storage |
| `hydrateCartFromStorage` | Async hydration helper (used by mobile) |
| `CartStorage` | Interface apps implement for platform storage |

#### Cart persistence flow

1. Each app provides a `CartStorage` implementation (`localStorage` on web, AsyncStorage on mobile).
2. `createCartPersistenceMiddleware(storage)` serializes cart state on every cart mutation.
3. On startup, web uses `loadCartStateSync`; mobile uses `hydrateCartFromStorage`.

## Peer Dependencies

`@reduxjs/toolkit` is a peer dependency — the consuming app must install it. Both web and mobile already include it in their dependencies.

## Adding New Shared Code

1. Add source under `src/` following existing entity patterns.
2. Export public symbols from the entity's `index.ts`.
3. Re-export from `src/index.ts`.
4. Run `npm run build:shared`.
5. Import from `'shared'` in web or mobile — never deep-import into `packages/shared/src`.

## Related

- [Monorepo README](../../README.md)
- [Web package README](../web/README.md)
- [Mobile package README](../mobile/README.md)
- [FSD architecture guide](../../docs/feature-sliced-design.md)
