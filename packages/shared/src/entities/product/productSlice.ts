import {
  createEntityAdapter,
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit';

import type { Product, ProductsStatus } from './types';

export const productsAdapter = createEntityAdapter<Product>();

const initialState = productsAdapter.getInitialState({
  status: 'idle' as ProductsStatus,
  error: null as string | null,
  selectedProductId: null as string | null,
});

export type ProductsState = typeof initialState;

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      productsAdapter.setAll(state, action.payload);
      state.status = 'succeeded';
      state.error = null;
    },
    addProduct(state, action: PayloadAction<Product>) {
      productsAdapter.addOne(state, action.payload);
    },
    removeProduct(state, action: PayloadAction<string>) {
      productsAdapter.removeOne(state, action.payload);
      if (state.selectedProductId === action.payload) {
        state.selectedProductId = null;
      }
    },
    setSelectedProductId(state, action: PayloadAction<string | null>) {
      state.selectedProductId = action.payload;
    },
    setProductsStatus(state, action: PayloadAction<ProductsStatus>) {
      state.status = action.payload;
    },
    setProductsError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
      state.status = 'failed';
    },
  },
});

export const {
  setProducts,
  addProduct,
  removeProduct,
  setSelectedProductId,
  setProductsStatus,
  setProductsError,
} = productSlice.actions;

export const productReducer = productSlice.reducer;
