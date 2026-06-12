import { configureStore } from '@reduxjs/toolkit';
import {
  cartReducer,
  createCartPersistenceMiddleware,
  loadCartStateSync,
  productReducer,
} from 'shared';

import { cartStorage } from './cart-storage';

const persistedCart = loadCartStateSync(cartStorage);

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
  preloadedState: persistedCart ? { cart: persistedCart } : undefined,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      createCartPersistenceMiddleware(cartStorage),
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
