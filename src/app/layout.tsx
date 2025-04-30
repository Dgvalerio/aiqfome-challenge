import { PropsWithChildren } from 'react';

import type { Metadata, NextPage } from 'next';
import { Nunito } from 'next/font/google';

import '@/styles/globals.css';
import { Toaster } from '@/components/sonner/sonner';

const fontSans = Nunito({
  variable: '--font-nunito-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'aiqfome',
  description: 'Desafio front do aiqfome',
};

const RootLayout: NextPage<PropsWithChildren> = ({ children }) => (
  <html lang="pt-br">
    <body
      className={`${fontSans.className} bg-background text-foreground flex min-h-screen flex-col antialiased`}
    >
      {children}
      <Toaster />
    </body>
  </html>
);

export default RootLayout;
