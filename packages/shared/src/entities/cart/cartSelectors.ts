import { createSelector } from '@reduxjs/toolkit';

import { selectProductById } from '../product/productSelectors';
import type { ProductsState } from '../product/productSlice';
import { cartAdapter } from './cartSlice';
import type { CartState } from './cartSlice';
import type { Product } from '../product/types';

type CartRootState = {
  cart: CartState;
  products: ProductsState;
};

const selectCartState = (state: CartRootState) => state.cart;

export const {
  selectAll: selectAllCartItems,
  selectById: selectCartItemByProductId,
  selectIds: selectCartProductIds,
} = cartAdapter.getSelectors(selectCartState);

export const selectCartItemsCount = createSelector(
  [selectAllCartItems],
  (items) => items.reduce((total, item) => total + item.quantity, 0),
);

export const selectCartUniqueItemsCount = createSelector(
  [selectAllCartItems],
  (items) => items.length,
);

export const selectCartItemQuantity = (
  state: CartRootState,
  productId: string,
) => selectCartItemByProductId(state, productId)?.quantity ?? 0;

export type CartLineItem = {
  product: Product;
  quantity: number;
  lineTotal: number;
};

export const selectCartLineItems = createSelector(
  [selectAllCartItems, (state: CartRootState) => state],
  (items, state) =>
    items.reduce<CartLineItem[]>((lineItems, item) => {
      const product = selectProductById(state, item.productId);

      if (!product) {
        return lineItems;
      }

      lineItems.push({
        product,
        quantity: item.quantity,
        lineTotal: product.price * item.quantity,
      });

      return lineItems;
    }, []),
);

export const selectCartTotalAmount = createSelector(
  [selectCartLineItems],
  (lineItems) => lineItems.reduce((total, item) => total + item.lineTotal, 0),
);
