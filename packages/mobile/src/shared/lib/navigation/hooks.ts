import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import type {
  CompositeNavigationProp,
  RouteProp,
} from '@react-navigation/native';
import { useNavigation, useRoute } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import type {
  CartStackParamList,
  ProductsStackParamList,
  RootStackParamList,
  RootTabParamList,
} from './types';

export type AppNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<ProductsStackParamList>,
  CompositeNavigationProp<
    NativeStackNavigationProp<CartStackParamList>,
    BottomTabNavigationProp<RootTabParamList>
  >
>;

export function useAppNavigation() {
  return useNavigation<AppNavigationProp>();
}

export function useAppRoute<
  T extends keyof RootStackParamList,
>() {
  return useRoute<
    RouteProp<
      ProductsStackParamList & CartStackParamList & { Home: undefined },
      Extract<T, keyof ProductsStackParamList | keyof CartStackParamList>
    >
  >();
}
