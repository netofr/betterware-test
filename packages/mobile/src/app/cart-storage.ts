import { createAsyncStorage } from '@react-native-async-storage/async-storage';
import type { CartStorage } from 'shared';

const asyncStorage = createAsyncStorage('betterware');

async function safeGetItem(key: string): Promise<string | null> {
  try {
    return await asyncStorage.getItem(key);
  } catch {
    return null;
  }
}

async function safeSetItem(key: string, value: string): Promise<void> {
  try {
    await asyncStorage.setItem(key, value);
  } catch {
    // Native module is unavailable until the app is rebuilt with pods linked.
  }
}

export const cartStorage: CartStorage = {
  getItem: safeGetItem,
  setItem: safeSetItem,
};
