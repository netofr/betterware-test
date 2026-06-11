import type { NavigatorScreenParams } from '@react-navigation/native';

export type ProductsStackParamList = {
  Products: undefined;
  ProductDetail: { productId: string };
};

export type CartStackParamList = {
  Cart: undefined;
  Checkout: undefined;
};

export type RootTabParamList = {
  Home: undefined;
  Products: NavigatorScreenParams<ProductsStackParamList> | undefined;
  Cart: NavigatorScreenParams<CartStackParamList> | undefined;
};

export type RootStackParamList = {
  Home: undefined;
} & ProductsStackParamList &
  CartStackParamList;
