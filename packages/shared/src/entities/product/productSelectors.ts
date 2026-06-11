import { createSelector } from '@reduxjs/toolkit';

import { productsAdapter } from './productSlice';
import type { ProductsState } from './productSlice';

type ProductsRootState = {
  products: ProductsState;
};

const selectProductsState = (state: ProductsRootState) => state.products;

export const {
  selectAll: selectAllProducts,
  selectById: selectProductById,
  selectIds: selectProductIds,
  selectTotal: selectProductsCount,
} = productsAdapter.getSelectors(selectProductsState);

export const selectProductsStatus = (state: ProductsRootState) =>
  state.products.status;

export const selectProductsError = (state: ProductsRootState) =>
  state.products.error;

export const selectSelectedProductId = (state: ProductsRootState) =>
  state.products.selectedProductId;

export const selectSelectedProduct = createSelector(
  [selectSelectedProductId, selectProductsState],
  (selectedProductId, productsState) =>
    selectedProductId
      ? productsState.entities[selectedProductId]
      : undefined,
);
