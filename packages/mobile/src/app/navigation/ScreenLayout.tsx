import type { ReactNode } from 'react';

import { Layout } from '../../widgets';

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
  return (
    <Layout title={title} description={description}>
      {children}
    </Layout>
  );
}
