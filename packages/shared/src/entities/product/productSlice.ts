import {
  createEntityAdapter,
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit';

import { fetchProducts } from './productThunks';
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        productsAdapter.setAll(state, action.payload);
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload ?? 'Failed to fetch products';
      });
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
