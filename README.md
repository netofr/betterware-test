# Betterware Mini E-commerce

A monorepo for the Betterware mini e-commerce experience, with **web** and **mobile** clients sharing business logic through a common **shared** package.

## Packages

| Package | Description | Tech stack |
| --- | --- | --- |
| [`packages/web`](packages/web) | Browser storefront | React 19, Vite, Tailwind CSS 4, React Router |
| [`packages/mobile`](packages/mobile) | Native iOS/Android app | React Native 0.86, React Navigation, styled-components |
| [`packages/shared`](packages/shared) | Cross-platform domain logic | TypeScript, Redux Toolkit slices, Axios API client |

## Architecture

Both clients follow **Feature-Sliced Design (FSD)** with a strict layer hierarchy:

```
app ↑ pages/screens ↑ widgets ↑ features ↑ entities ↑ shared
```

- **Unidirectional dependencies** — each layer imports only from layers below it.
- **Public API barrels** — every slice exposes its surface through `index.ts`.
- **No cross-slice imports** — slices on the same layer do not import each other.

Shared Redux state (products, cart) and API configuration live in `packages/shared` and are consumed by both apps.

See [docs/feature-sliced-design.md](docs/feature-sliced-design.md) for the full architectural guide.

## Prerequisites

- **Node.js** ≥ 22.11.0 (required by the mobile package)
- **npm** 11.x (workspaces + Lerna)
- **Web**: no extra tooling beyond Node
- **Mobile iOS**: Xcode, CocoaPods (`bundle install` then `bundle exec pod install` in `packages/mobile/ios`)
- **Mobile Android**: Android Studio, SDK, and an emulator or device

## Getting Started

### 1. Install dependencies

From the repository root:

```sh
npm install
```

The `postinstall` script automatically builds `packages/shared` so web and mobile can import it immediately.

### 2. Configure environment variables

Copy the example env files and adjust the products API URL if needed:

```sh
cp packages/web/.env.example packages/web/.env
cp packages/mobile/.env.example packages/mobile/.env
```

Default API: `https://fakestoreapi.com/products`

### 3. Run the apps

**Web** (from root):

```sh
npm run web
```

**Mobile** — start Metro in one terminal, then run a platform in another:

```sh
npm run start:mobile   # Metro bundler
npm run ios            # iOS simulator
npm run android        # Android emulator
```

## Root Scripts

| Script | Description |
| --- | --- |
| `npm run build` | Build all packages that define a `build` script (`shared`, `web`) |
| `npm run build:shared` | Compile `shared` TypeScript to `dist/` |
| `npm run web` | Start the Vite dev server for web |
| `npm run start:mobile` | Start the React Native Metro bundler |
| `npm run ios` | Build and run the iOS app |
| `npm run android` | Build and run the Android app |
| `npm run lint` | Run ESLint across web and mobile |
| `npm run test` | Run tests (mobile Jest suite) |

## Project Structure

```
betterware/
├── packages/
│   ├── web/          # React web application
│   ├── mobile/       # React Native application
│   └── shared/       # Shared entities, API, and utilities
├── docs/             # Architecture and design documentation
├── lerna.json        # Lerna monorepo configuration
└── package.json      # Root workspace scripts
```

## Shared State & Persistence

Redux slices for **products** and **cart** are defined in `packages/shared`. Each app wires them in its own `src/app/store.ts` and provides platform-specific cart storage:

- **Web** — `localStorage` via `packages/web/src/app/cart-storage.ts`
- **Mobile** — AsyncStorage via `packages/mobile/src/app/cart-storage.ts`

After changing shared source code, rebuild with `npm run build:shared` (or run a full `npm run build`).

## Documentation

- [Feature-Sliced Design guide](docs/feature-sliced-design.md)
- [Web package README](packages/web/README.md)
- [Mobile package README](packages/mobile/README.md)
- [Shared package README](packages/shared/README.md)
