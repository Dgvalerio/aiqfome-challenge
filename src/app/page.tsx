import { NextPage } from 'next';

import { Header } from '@/components/header/header';

const HomePage: NextPage = () => (
  <div className="flex flex-col gap-2">
    <Header />
    <h1>Hello</h1>
  </div>
);

export default HomePage;
