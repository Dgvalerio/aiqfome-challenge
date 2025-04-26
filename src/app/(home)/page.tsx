import { NextPage } from 'next';

import { SearchInput } from '@/app/(home)/(components)/search-input';
import { Header } from '@/components/header/header';

const HomePage: NextPage = () => (
  <div className="flex flex-col gap-2">
    <div className="flex flex-col bg-primary">
      <Header className="pb-0" />
      <SearchInput />
    </div>
    <h1>Hello</h1>
  </div>
);

export default HomePage;
