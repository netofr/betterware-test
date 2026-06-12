import { configureStore } from '@reduxjs/toolkit';
import {
  cartReducer,
  createCartPersistenceMiddleware,
  productReducer,
} from 'shared';

import { cartStorage } from './cart-storage';

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      createCartPersistenceMiddleware(cartStorage),
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
