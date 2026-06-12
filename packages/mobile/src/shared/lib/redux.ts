import { useDispatch, useSelector } from 'react-redux';
import type { UnknownAction } from 'redux';
import type { ThunkDispatch } from '@reduxjs/toolkit';
import type { CartState, ProductsState } from 'shared';

export type MobileRootState = {
  products: ProductsState;
  cart: CartState;
};

export type MobileAppDispatch = ThunkDispatch<
  MobileRootState,
  unknown,
  UnknownAction
>;

export const useAppDispatch = useDispatch.withTypes<MobileAppDispatch>();
export const useAppSelector = useSelector.withTypes<MobileRootState>();
