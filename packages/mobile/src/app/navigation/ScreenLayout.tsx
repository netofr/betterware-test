import type { ReactNode } from 'react';

import { Layout } from '../../widgets';

import { useAppNavigation, useAppRoute } from './hooks';
import {
  footerLinkToScreen,
  navRouteToScreen,
  screenToNavRoute,
} from './routes';
import type { RootStackParamList } from './types';

type ScreenLayoutProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export function ScreenLayout({
  title,
  description,
  children,
}: ScreenLayoutProps) {
  const navigation = useAppNavigation();
  const route = useAppRoute<keyof RootStackParamList>();
  const activeRoute = screenToNavRoute[route.name];

  return (
    <Layout
      title={title}
      description={description}
      activeRoute={activeRoute}
      onNavigate={navRoute =>
        navigation.navigate(navRouteToScreen[navRoute])
      }
      onFooterNavigate={link =>
        navigation.navigate(footerLinkToScreen[link])
      }
    >
      {children}
    </Layout>
  );
}
