import type { ReactNode } from "react";

import { Footer } from "./Footer";
import { Header } from "./Header";

type LayoutProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export function Layout({ title, description, children }: LayoutProps) {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <Header />
      <main className="flex-1 px-6 py-8 text-left">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-sm text-gray-500 mb-4">{description}</p>
        {children}
      </main>
      <Footer />
    </div>
  );
}
