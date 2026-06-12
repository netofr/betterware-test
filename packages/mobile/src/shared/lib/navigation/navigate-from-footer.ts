import { CommonActions } from '@react-navigation/native';

import type { AppNavigationProp } from './hooks';
import type { FooterLink } from './types';

export function navigateFromFooter(
  link: FooterLink,
  navigation: AppNavigationProp,
) {
  if (link === 'shop') {
    navigation.navigate('Products');
    return;
  }

  navigation.dispatch(
    CommonActions.navigate({
      name: 'Cart',
      params: { screen: 'Checkout' },
    }),
  );
}
