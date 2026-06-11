import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useColorScheme } from 'react-native';
import { selectCartItemsCount } from 'shared';
import { ThemeProvider } from 'styled-components/native';

import { useAppSelector } from '../hooks';
import { darkTheme, lightTheme } from '../../shared/theme';

import {
  CartBadge,
  CartBadgeText,
  Container,
  TabItem,
  TabItemContent,
  TabLabel,
} from './TabBar.styles';

export function TabBar({
  state,
  descriptors,
  navigation,
  insets,
}: BottomTabBarProps) {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;
  const cartItemsCount = useAppSelector(selectCartItemsCount);

  return (
    <ThemeProvider theme={theme}>
      <Container
        style={{ paddingBottom: Math.max(insets.bottom, theme.spacing.sm) }}
        accessibilityRole="tablist"
      >
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label = options.title ?? route.name;
          const isFocused = state.index === index;
          const showCartBadge = route.name === 'Cart' && cartItemsCount > 0;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          return (
            <TabItem
              key={route.key}
              accessibilityRole="tab"
              accessibilityState={{ selected: isFocused }}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              onPress={onPress}
            >
              <TabItemContent $isActive={isFocused}>
                <TabLabel $isActive={isFocused}>{label}</TabLabel>
                {showCartBadge ? (
                  <CartBadge
                    accessibilityLabel={`${cartItemsCount} items in cart`}
                  >
                    <CartBadgeText>{cartItemsCount}</CartBadgeText>
                  </CartBadge>
                ) : null}
              </TabItemContent>
            </TabItem>
          );
        })}
      </Container>
    </ThemeProvider>
  );
}
