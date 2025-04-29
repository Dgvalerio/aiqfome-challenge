import { PropsWithChildren } from 'react';

import { NextPage } from 'next';

import { Footer } from '@/components/footer/footer';
import { Header } from '@/components/header/header';

const PrivateLayout: NextPage<PropsWithChildren> = ({ children }) => (
  <>
    <Header />
    <main className="flex flex-1 flex-col">{children}</main>
    <Footer />
  </>
);

export default PrivateLayout;
