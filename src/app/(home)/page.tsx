import { NextPage } from 'next';
import Image from 'next/image';

import { ClosedStores } from '@/app/(home)/(components)/closed';
import { OpenedStores } from '@/app/(home)/(components)/opened';
import { SearchInput } from '@/app/(home)/(components)/search-input';
import { StoreProps } from '@/app/(home)/(components)/store';
import { Header } from '@/components/header/header';

const stores: StoreProps[] = [
  {
    image: 'https://picsum.photos/272?random=1',
    name: 'Matsuri Concept',
    shipping: 0,
    rating: 4.7,
  },
  {
    image: 'https://picsum.photos/272?random=2',
    name: 'Subway - Avenida center',
    shipping: 6,
    rating: 4.7,
  },
  {
    image: 'https://picsum.photos/272?random=3',
    name: 'Burger King - Colombo',
    shipping: 6,
    rating: 4.7,
  },
  {
    image: 'https://picsum.photos/272?random=4',
    name: 'Burger King - Colombo',
    shipping: 6,
    rating: 4.7,
  },
  {
    image: 'https://picsum.photos/272?random=5',
    name: 'McDonald’s - Novo Centro',
    shipping: 0,
    rating: 4.7,
  },
  {
    image: 'https://picsum.photos/272?random=6',
    name: 'Subway - Avenida center',
    shipping: 6,
    rating: 4.7,
  },
  {
    image: 'https://picsum.photos/272?random=7',
    name: 'McDonald’s - Novo Centro',
    shipping: 0,
    rating: 4.7,
  },
  {
    image: 'https://picsum.photos/272?random=8',
    name: 'Matsuri Concept',
    shipping: 0,
    rating: 4.7,
  },
  {
    image: 'https://picsum.photos/272?random=9',
    name: 'Burger King - Colombo',
    shipping: 6,
    rating: 4.7,
  },
  {
    image: 'https://picsum.photos/272?random=10',
    name: 'Burger King - Colombo',
    shipping: 6,
    rating: 4.7,
  },
  {
    image: 'https://picsum.photos/272?random=11',
    name: 'McDonald’s - Novo Centro',
    shipping: 0,
    rating: 4.7,
  },
  {
    image: 'https://picsum.photos/272?random=12',
    name: 'Subway - Avenida center',
    shipping: 6,
    rating: 4.7,
  },
  {
    image: 'https://picsum.photos/272?random=13',
    name: 'McDonald’s - Novo Centro',
    shipping: 0,
    rating: 4.7,
  },
  {
    image: 'https://picsum.photos/272?random=14',
    name: 'Matsuri Concept',
    shipping: 0,
    rating: 4.7,
  },
  {
    image: 'https://picsum.photos/272?random=15',
    name: 'Burger King - Colombo',
    shipping: 6,
    rating: 4.7,
  },
  {
    image: 'https://picsum.photos/272?random=16',
    name: 'Matsuri Concept',
    shipping: 0,
    rating: 4.7,
  },
  {
    image: 'https://picsum.photos/272?random=17',
    name: 'Subway - Avenida center',
    shipping: 6,
    rating: 4.7,
  },
  {
    image: 'https://picsum.photos/272?random=18',
    name: 'McDonald’s - Novo Centro',
    shipping: 0,
    rating: 4.7,
  },
];

const HomePage: NextPage = () => (
  <div className="flex flex-col">
    <div className="flex flex-col bg-primary">
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
    <OpenedStores stores={stores} />
    <ClosedStores stores={stores} />
  </div>
);

export default HomePage;
