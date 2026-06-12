import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { useEffect } from 'react';
import { fetchProducts } from 'shared';

import { useAppDispatch } from '@/shared';
import { HomeScreen } from '@/screens';

import { CartStackNavigator } from './CartStackNavigator';
import { ProductsStackNavigator } from './ProductsStackNavigator';
import { TabBar } from './TabBar';
import type { RootTabParamList } from './types';

const Tab = createBottomTabNavigator<RootTabParamList>();

function renderTabBar(props: BottomTabBarProps) {
  return <TabBar {...props} />;
}

function NavigationRoot() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Tab.Navigator tabBar={renderTabBar} screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Home' }}
      />
      <Tab.Screen
        name="Products"
        component={ProductsStackNavigator}
        options={{ title: 'Products' }}
      />
      <Tab.Screen
        name="Cart"
        component={CartStackNavigator}
        options={{ title: 'Cart' }}
      />
    </Tab.Navigator>
  );
}

export function RootNavigator() {
  return (
    <NavigationContainer>
      <NavigationRoot />
    </NavigationContainer>
  );
}
