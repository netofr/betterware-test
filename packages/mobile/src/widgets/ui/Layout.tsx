import type { ReactNode } from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

import { darkTheme, lightTheme } from '../../shared/theme';

import { Footer, type FooterLink } from './Footer';
import { Header, type NavRoute } from './Header';
import {
  Container,
  Content,
  Description,
  Main,
  SafeArea,
  Title,
} from './Layout.styles';

type LayoutProps = {
  title: string;
  description: string;
  children: ReactNode;
  activeRoute?: NavRoute;
  onNavigate?: (route: NavRoute) => void;
  onFooterNavigate?: (link: FooterLink) => void;
};

export function Layout({
  title,
  description,
  children,
  activeRoute,
  onNavigate,
  onFooterNavigate,
}: LayoutProps) {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <SafeArea edges={['top']}>
        <StatusBar
          barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
          backgroundColor={theme.colors.background}
        />
        <Container>
          <Header activeRoute={activeRoute} onNavigate={onNavigate} />
          <Main>
            <Title accessibilityRole="header">{title}</Title>
            <Description>{description}</Description>
            <Content>{children}</Content>
          </Main>
          <Footer onNavigate={onFooterNavigate} />
        </Container>
      </SafeArea>
    </ThemeProvider>
  );
}
