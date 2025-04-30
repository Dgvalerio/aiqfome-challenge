import { NextPage } from 'next';
import Image from 'next/image';

import { Skeleton } from '@/components/skeleton/skeleton';

const HomePageLoading: NextPage = async () => (
  <>
    <div className="bg-primary p-4 pt-0">
      <Skeleton className="h-11 rounded-xl" />
    </div>
    <Image
      priority
      width={390}
      height={130}
      src="/banner.png"
      alt="Rango barato no dia das crianças! Peça com até 50% OFF"
    />
    <div className="flex flex-col gap-4 px-4 pt-6 pb-3">
      <h1 className="text-primary text-xl font-extrabold">abertos</h1>
      {[...new Array(6)].map((_, index) => (
        <Skeleton key={index} className="h-[72px] rounded-xl" />
      ))}
    </div>
    <div className="flex flex-col gap-4 px-4 pt-6 pb-3">
      <h1 className="text-primary text-xl font-extrabold">fechados</h1>
      {[...new Array(4)].map((_, index) => (
        <Skeleton key={index} className="h-[72px] rounded-xl" />
      ))}
    </div>
  </>
);

export default HomePageLoading;
