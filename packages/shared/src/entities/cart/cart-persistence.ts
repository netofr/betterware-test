import type { Middleware } from '@reduxjs/toolkit';
import type { Store } from '@reduxjs/toolkit';

import { hydrateCart, type CartState } from './cartSlice';

export const CART_STORAGE_KEY = 'betterware_cart';

export interface CartStorage {
  getItem(key: string): string | null | Promise<string | null>;
  setItem(key: string, value: string): void | Promise<void>;
}

export function isCartState(value: unknown): value is CartState {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const state = value as CartState;

  return Array.isArray(state.ids) && typeof state.entities === 'object';
}

export function parseCartState(serialized: string): CartState | null {
  try {
    const parsed: unknown = JSON.parse(serialized);

    if (!isCartState(parsed)) {
      return null;
    }

    return parsed;
  } catch {
    return null;
  }
}

export function serializeCartState(state: CartState): string {
  return JSON.stringify(state);
}

export function loadCartStateSync(
  storage: Pick<CartStorage, 'getItem'>,
): CartState | null {
  const raw = storage.getItem(CART_STORAGE_KEY);

  if (raw instanceof Promise || raw === null) {
    return null;
  }

  return parseCartState(raw);
}

export async function loadCartState(
  storage: CartStorage,
): Promise<CartState | null> {
  const raw = await storage.getItem(CART_STORAGE_KEY);

  if (!raw) {
    return null;
  }

  return parseCartState(raw);
}

function isCartAction(action: unknown): action is { type: string } {
  return (
    typeof action === 'object' &&
    action !== null &&
    'type' in action &&
    typeof action.type === 'string'
  );
}

export function createCartPersistenceMiddleware(
  storage: CartStorage,
): Middleware {
  return (storeApi) => (next) => (action) => {
    const result = next(action);

    if (
      isCartAction(action) &&
      action.type.startsWith('cart/') &&
      action.type !== 'cart/hydrateCart'
    ) {
      const cartState = storeApi.getState().cart as CartState;

      void Promise.resolve(
        storage.setItem(CART_STORAGE_KEY, serializeCartState(cartState)),
      ).catch(() => undefined);
    }

    return result;
  };
}

export async function hydrateCartFromStorage(
  store: Store,
  storage: CartStorage,
): Promise<void> {
  const cartState = await loadCartState(storage);

  if (cartState) {
    store.dispatch(hydrateCart(cartState));
  }
}
