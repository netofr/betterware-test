import { useDispatch, useSelector } from 'react-redux';
import type { UnknownAction } from 'redux';
import type { ThunkDispatch } from '@reduxjs/toolkit';
import type { CartState, ProductsState } from 'shared';

export type WebRootState = {
  products: ProductsState;
  cart: CartState;
};

export type WebAppDispatch = ThunkDispatch<WebRootState, unknown, UnknownAction>;

export const useAppDispatch = useDispatch.withTypes<WebAppDispatch>();
export const useAppSelector = useSelector.withTypes<WebRootState>();
