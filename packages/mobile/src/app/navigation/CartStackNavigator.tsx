import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CartScreen, CheckoutScreen } from '../../screens';

import type { CartStackParamList } from './types';

const Stack = createNativeStackNavigator<CartStackParamList>();

export function CartStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
    </Stack.Navigator>
  );
}
