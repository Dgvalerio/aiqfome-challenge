import { FC } from 'react';

import { Button } from '@/components/button/button';
import { formatCurrency } from '@/utils/functions/format-currency';

export const TicketTotal: FC = () => (
  <div className="flex items-center justify-between gap-4 rounded-t-[12px] px-8 py-4 [box-shadow:0px_0px_15px_0px_#00000026]">
    <div className="flex flex-col gap-0.5">
      <span className="text-sm font-bold">subtotal</span>
      <span className="text-primary text-xl font-extrabold">
        {formatCurrency.format(112)}
      </span>
    </div>
    <Button size="lg">ir para pagamento</Button>
  </div>
);
