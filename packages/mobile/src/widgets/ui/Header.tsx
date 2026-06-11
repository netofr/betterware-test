import { selectCartItemsCount } from 'shared';

import { useAppSelector } from '../../app/hooks';

import {
  BrandText,
  CartBadge,
  CartBadgeText,
  Container,
  Nav,
  NavItem,
  NavItemContent,
  NavItemText,
  Row,
} from './Header.styles';

export type NavRoute = 'home' | 'products' | 'cart';

const navLinks = [
  { route: 'home' as const, label: 'Home' },
  { route: 'products' as const, label: 'Products' },
  { route: 'cart' as const, label: 'Cart' },
];

type HeaderProps = {
  activeRoute?: NavRoute;
  onNavigate?: (route: NavRoute) => void;
};

export function Header({ activeRoute = 'home', onNavigate }: HeaderProps) {
  const cartItemsCount = useAppSelector(selectCartItemsCount);

  return (
    <Container accessibilityRole="header">
      <Row>
        <BrandText accessibilityRole="text">Betterware</BrandText>

        <Nav accessibilityRole="tablist">
          {navLinks.map(({ route, label }) => {
            const isActive = activeRoute === route;
            const showCartBadge = route === 'cart' && cartItemsCount > 0;

            return (
              <NavItem
                key={route}
                $isActive={isActive}
                accessibilityRole="tab"
                accessibilityState={{ selected: isActive }}
                onPress={() => onNavigate?.(route)}
              >
                {showCartBadge ? (
                  <NavItemContent>
                    <NavItemText $isActive={isActive}>{label}</NavItemText>
                    <CartBadge accessibilityLabel={`${cartItemsCount} items in cart`}>
                      <CartBadgeText>{cartItemsCount}</CartBadgeText>
                    </CartBadge>
                  </NavItemContent>
                ) : (
                  <NavItemText $isActive={isActive}>{label}</NavItemText>
                )}
              </NavItem>
            );
          })}
        </Nav>
      </Row>
    </Container>
  );
}
