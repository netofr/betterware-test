import type { FooterLink, NavRoute } from '../../widgets';

import type { RootStackParamList } from './types';

export const screenToNavRoute: Partial<
  Record<keyof RootStackParamList, NavRoute>
> = {
  Home: 'home',
  Products: 'products',
  Cart: 'cart',
};

export const navRouteToScreen: Record<NavRoute, keyof RootStackParamList> = {
  home: 'Home',
  products: 'Products',
  cart: 'Cart',
};

export const footerLinkToScreen: Record<
  FooterLink,
  keyof RootStackParamList
> = {
  shop: 'Products',
  checkout: 'Checkout',
};
