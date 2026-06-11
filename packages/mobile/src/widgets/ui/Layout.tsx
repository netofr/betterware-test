import type { ReactNode } from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

import { darkTheme, lightTheme } from '../../shared/theme';

import { Header } from './Header';
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
};

export function Layout({ title, description, children }: LayoutProps) {
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
          <Header />
          <Main>
            <Title accessibilityRole="header">{title}</Title>
            <Description>{description}</Description>
            <Content>{children}</Content>
          </Main>
        </Container>
      </SafeArea>
    </ThemeProvider>
  );
}
