# Betterware Mobile

The native iOS and Android app for the Betterware mini e-commerce experience. Built with React Native, React Navigation, styled-components, and Redux Toolkit, sharing domain logic with web through the `shared` workspace package.

## Tech Stack

| Category     | Libraries                                           |
| ------------ | --------------------------------------------------- |
| Framework    | React Native 0.86, React 19                         |
| Language     | TypeScript 5.8                                      |
| Styling      | styled-components                                   |
| Navigation   | React Navigation 7 (bottom tabs + native stack)     |
| State        | Redux Toolkit, react-redux                          |
| Persistence  | `@react-native-async-storage/async-storage`         |
| Shared logic | `shared` workspace (`products`, `cart`, API client) |

## Prerequisites

- Node.js ≥ 22.11.0
- iOS = 26.5
- Dependencies installed from the **monorepo root** (`npm install`)
- [React Native environment setup](https://reactnative.dev/docs/set-up-your-environment) for your target platform

### iOS

```sh
cd ios
bundle install          # first time only
bundle exec pod install # after native dependency changes
```

### Android

Android Studio with SDK, emulator or physical device configured.

## Environment Variables

Create a `.env` file from the example:

```sh
cp .env.example .env
```

| Variable           | Description                                                          |
| ------------------ | -------------------------------------------------------------------- |
| `PRODUCTS_API_URL` | Products API endpoint (default: `https://fakestoreapi.com/products`) |

The `prestart` script runs `scripts/sync-env.js`, which reads `.env` and generates `src/config/env.ts`. Do not edit `env.ts` manually — it is overwritten on every `npm start`.

## Scripts

Run from the monorepo root unless noted.

| Command                           | Description                           |
| --------------------------------- | ------------------------------------- |
| `npm run start:mobile`            | Start Metro bundler (syncs env first) |
| `npm run ios`                     | Build and run on iOS simulator        |
| `npm run android`                 | Build and run on Android emulator     |
| `npm run test --workspace=mobile` | Run Jest tests                        |
| `npm run lint --workspace=mobile` | Run ESLint                            |

## Project Structure (FSD)

```
src/
├── app/           # Store, navigation, hooks, cart storage
├── screens/       # Screen-level components (Home, Products, Cart, etc.)
├── widgets/       # Composite UI blocks (Header, Layout, Footer)
├── features/      # User actions (e.g. add-to-cart)
├── entities/      # Platform-specific entity UI (e.g. ProductCard)
└── shared/        # Theme, UI primitives, toast system
```

Layer dependency rule: `app` → `screens` → `widgets` → `features` → `entities` → `shared`.

> Platform-agnostic Redux slices and API logic live in `packages/shared`, not in this `shared/` folder.

## Navigation

`src/app/navigation/RootNavigator.tsx` defines the app shell:

- **Home** tab — landing screen
- **Products** tab — product list and detail stack
- **Cart** tab — cart and checkout stack

## Redux Store

Configured in `src/app/store.ts`:

- **`products`** — product catalog from `shared`
- **`cart`** — normalized cart state from `shared`, persisted via AsyncStorage

Cart hydration is async. `App.tsx` waits for `hydrateCartFromStorage()` before rendering the navigator.

Use typed hooks from `src/app/hooks.ts`:

```ts
import { useAppDispatch, useAppSelector } from '../app/hooks';
```

## Cart Persistence

Storage is implemented in `src/app/cart-storage.ts` using AsyncStorage. The `CartStorage` interface from `shared` allows the persistence middleware to work identically across platforms.

If cart persistence fails silently, rebuild the native app after linking AsyncStorage pods:

```sh
cd ios && bundle exec pod install && cd ..
npm run ios
```

## Theming

Design tokens live in `src/shared/theme/` (`colors`, `spacing`, `typography`, etc.). Styled components should reference theme values — see `.cursor/rules/styled-components.mdc` for team standards.

## Development Notes

- After changing `packages/shared`, rebuild: `npm run build:shared` from the repo root.
- Metro must be running before `ios` or `android` commands.
- **Reload**: press `R` twice (Android) or `R` (iOS Simulator). Dev menu: `Cmd+M` (iOS) / `Ctrl+M` (Android).
- Import from barrel files only — avoid deep imports into slice internals.

## Troubleshooting

- [React Native troubleshooting guide](https://reactnative.dev/docs/troubleshooting)
- Pod issues: delete `ios/Pods` and `Podfile.lock`, then run `bundle exec pod install` again.
- Metro cache: `npx react-native start --reset-cache`

## Related

- [Monorepo README](../../README.md)
- [Shared package README](../shared/README.md)
- [FSD architecture guide](../../docs/feature-sliced-design.md)
