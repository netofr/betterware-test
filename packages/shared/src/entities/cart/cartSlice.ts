import {
  createEntityAdapter,
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit';

import type { CartItem } from './types';

export const cartAdapter = createEntityAdapter<CartItem>();

const initialState = cartAdapter.getInitialState();

export type CartState = typeof initialState;

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<string>) {
      const productId = action.payload;
      const existingItem = state.entities[productId];

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cartAdapter.addOne(state, { id: productId, productId, quantity: 1 });
      }
    },
    incrementCartItem(state, action: PayloadAction<string>) {
      const item = state.entities[action.payload];
      if (item) {
        item.quantity += 1;
      }
    },
    decrementCartItem(state, action: PayloadAction<string>) {
      const productId = action.payload;
      const item = state.entities[productId];

      if (!item) {
        return;
      }

      if (item.quantity <= 1) {
        cartAdapter.removeOne(state, productId);
      } else {
        item.quantity -= 1;
      }
    },
    removeFromCart(state, action: PayloadAction<string>) {
      cartAdapter.removeOne(state, action.payload);
    },
    clearCart(state) {
      cartAdapter.removeAll(state);
    },
  },
});

export const {
  addToCart,
  incrementCartItem,
  decrementCartItem,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
