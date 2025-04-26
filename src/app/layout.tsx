import { PropsWithChildren } from 'react';

import type { Metadata, NextPage } from 'next';
import { Nunito } from 'next/font/google';

import '@/styles/globals.css';

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
      className={`${fontSans.className} bg-background text-foreground antialiased`}
    >
      {children}
    </body>
  </html>
);

export default RootLayout;
