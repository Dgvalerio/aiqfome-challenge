import { PropsWithChildren } from 'react';

import { NextPage } from 'next';

import { Footer } from '@/components/footer/footer';
import { Header } from '@/components/header/header';
import { TicketProvider } from '@/context/ticket';

const PrivateLayout: NextPage<PropsWithChildren> = ({ children }) => (
  <TicketProvider>
    <Header />
    <main className="flex flex-1 flex-col">{children}</main>
    <Footer />
  </TicketProvider>
);

export default PrivateLayout;
