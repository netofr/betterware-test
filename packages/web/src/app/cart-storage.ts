import type { CartStorage } from 'shared';

export const cartStorage: CartStorage = {
  getItem: (key) => localStorage.getItem(key),
  setItem: (key, value) => localStorage.setItem(key, value),
};
