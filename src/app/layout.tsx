import { PropsWithChildren } from 'react';

import type { Metadata, NextPage } from 'next';
import { Geist } from 'next/font/google';

import '@/app/globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'AiQFome',
  description: 'Desafio front do AiQFome',
};

const RootLayout: NextPage<PropsWithChildren> = ({ children }) => (
  <html lang="pt-br">
    <body className={`${geistSans.variable} antialiased`}>{children}</body>
  </html>
);

export default RootLayout;
