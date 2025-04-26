import { NextPage } from 'next';
import Image from 'next/image';

import { SearchInput } from '@/app/(home)/(components)/search-input';
import { Header } from '@/components/header/header';

const HomePage: NextPage = () => (
  <div className="flex flex-col">
    <div className="flex flex-col bg-primary mb-[1px]">
      <Header className="pb-0" />
      <SearchInput />
    </div>
    <Image
      priority
      width={390}
      height={130}
      src="/banner.png"
      alt="Rango barato no dia das crianças! Peça com até 50% OFF"
    />
  </div>
);

export default HomePage;
