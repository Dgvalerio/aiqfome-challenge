'use client';

import { NextPage } from 'next';

import { TicketItems } from '@/app/(private)/ticket/(components)/items';
import { TicketTotal } from '@/app/(private)/ticket/(components)/total';

const TicketPage: NextPage = () => (
  <div className="flex flex-1 flex-col gap-5">
    <TicketItems />
    <TicketTotal />
  </div>
);

export default TicketPage;
