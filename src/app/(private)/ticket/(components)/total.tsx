'use client';
import { FC, useContext } from 'react';

import { Button } from '@/components/button/button';
import { TicketContext } from '@/context/ticket';
import { formatCurrency } from '@/utils/functions/format-currency';

export const TicketTotal: FC = () => {
  const ticket = useContext(TicketContext);

  return (
    <div className="mt-auto flex items-center justify-between gap-4 rounded-t-[12px] px-8 py-4 [box-shadow:0px_0px_15px_0px_#00000026]">
      <div className="flex flex-col gap-0.5">
        <span className="text-sm font-bold">subtotal</span>
        <span className="text-primary text-xl font-extrabold">
          {formatCurrency.format(ticket.total)}
        </span>
      </div>
      <Button size="lg">ir para pagamento</Button>
    </div>
  );
};
