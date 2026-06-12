import type { FooterLink } from '@/shared';

import {
  Container,
  Content,
  CopyrightText,
  Nav,
  NavLink,
  NavLinkText,
} from './Footer.styles';

const footerLinks = [
  { link: 'shop' as const, label: 'Shop' },
  { link: 'checkout' as const, label: 'Checkout' },
];

type FooterProps = {
  onNavigate?: (link: FooterLink) => void;
};

export function Footer({ onNavigate }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <Container>
      <Content>
        <CopyrightText>
          © {year} Betterware. All rights reserved.
        </CopyrightText>

        <Nav accessibilityRole="menubar">
          {footerLinks.map(({ link, label }) => (
            <NavLink
              key={link}
              accessibilityRole="menuitem"
              onPress={() => onNavigate?.(link)}
            >
              <NavLinkText>{label}</NavLinkText>
            </NavLink>
          ))}
        </Nav>
      </Content>
    </Container>
  );
}
