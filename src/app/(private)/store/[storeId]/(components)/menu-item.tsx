import { FC } from 'react';

import Link from 'next/link';

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/accordion/accordion';
import { CurrencyIcon } from '@/components/icon/currency';
import { SpicyIcon } from '@/components/icon/spicy';
import { VeganIcon } from '@/components/icon/vegan';
import { cn } from '@/lib/tailwind/utils';
import { Store } from '@/types/store';
import { routes } from '@/utils/constants/routes';
import { formatCurrency } from '@/utils/functions/format-currency';

export const StoreMenuItem: FC<
  { storeId: Store['id'] } & Store['sections'][number]
> = ({ storeId, id, title, details, items }) => (
  <AccordionItem value={id}>
    <AccordionTrigger>
      <div className="flex flex-col gap-1">
        <div className="flex gap-1">
          {title}{' '}
          {items.some((item) => !!item.originalValue) && <CurrencyIcon />}
        </div>
        {details && (
          <div className="text-neutrals-500 text-xs font-semibold">
            {details}
          </div>
        )}
      </div>
    </AccordionTrigger>
    <AccordionContent>
      <div className="flex flex-col gap-6 px-4 pt-2 pb-4">
        {items.map((item, index) => (
          <Link
            href={routes.store.item(storeId, id)}
            key={index}
            className="flex gap-4"
          >
            <div className="flex-1">
              <div className="text-neutrals-900 flex items-center gap-1 text-sm font-semibold">
                {item.name} {item.isSpicy && <SpicyIcon />}
                {item.isVegan && <VeganIcon />}
              </div>
              <div
                className="text-neutrals-500 line-clamp-2 text-xs"
                title={item.description}
              >
                {item.description}
              </div>
            </div>
            <div className="text-right">
              {item.originalValue && (
                <div className="text-neutrals-500 text-xs font-bold line-through">
                  {formatCurrency.format(item.originalValue)}
                </div>
              )}
              {item.isInitial && (
                <div className="text-neutrals-500 text-xs font-bold">
                  a partir de
                </div>
              )}
              <div
                className={cn(
                  'flex items-center gap-0.5 text-sm font-bold',
                  item.originalValue ? 'text-green-500' : 'text-purple-500'
                )}
              >
                {item.originalValue && <CurrencyIcon height="16" width="16" />}
                {formatCurrency.format(item.value)}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </AccordionContent>
  </AccordionItem>
);
