import { FC, useContext } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/button/button';
import { PencilIcon } from '@/components/icon/pencil';
import { QuantityInput } from '@/components/quantity-input/quantity-input';
import { TicketContext } from '@/context/ticket';
import { routes } from '@/utils/constants/routes';
import { formatCurrency } from '@/utils/functions/format-currency';

export const TicketItems: FC = () => {
  const { items, changeItemQuantity } = useContext(TicketContext);

  return (
    <div>
      {items.map(({ id, store, items }, index) => (
        <section key={id + store}>
          <div className="flex items-center gap-2 px-4 pt-6">
            <Image
              src={`https://picsum.photos/36?random=${index + 1}`}
              width={36}
              height={36}
              alt={store}
              priority
              className="rounded"
            />
            <div className="flex flex-col gap-1 font-bold">
              <span className="text-neutrals-500 text-sm">seus itens em</span>
              <h1 className="text-xl">{store}</h1>
            </div>
          </div>
          {items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-1.5 border-b-4 border-neutral-100 p-4 last:border-b-0"
            >
              <div className="flex justify-between gap-4 text-sm font-bold">
                {item.name}
                <div className="text-purple-500">
                  {formatCurrency.format(item.unitValue * item.quantity)}
                </div>
              </div>
              <div className="flex items-center justify-end gap-6">
                <Button
                  variant="ghost"
                  className="gap-1 !px-0.5 font-bold text-teal-400"
                  asChild
                >
                  <Link href={routes.store.item(7, 7)}>
                    <PencilIcon /> editar
                  </Link>
                </Button>
                <QuantityInput
                  value={item.quantity}
                  onChange={(quantity) =>
                    changeItemQuantity(id, item.id, quantity)
                  }
                />
              </div>
              {item.extras && (
                <ul className="text-neutrals-500 flex list-inside list-disc flex-col gap-1.5 text-xs">
                  {item.extras.map((extra, index) => (
                    <li
                      key={extra.label + '-' + index}
                      className="marker:w-4 marker:[content:'•']"
                    >
                      <span className="ml-1 font-bold">{extra.label}</span>
                      <br />
                      {extra.content.map((line) => (
                        <div
                          className="ml-[11px] flex justify-between gap-3"
                          key={`${index}-${line.text.replace(' ', '-')}`}
                        >
                          <span className="font-semibold">{line.text}</span>
                          {line.value && (
                            <span className="font-bold text-teal-400">
                              +{formatCurrency.format(line.value)}
                            </span>
                          )}
                        </div>
                      ))}
                    </li>
                  ))}
                </ul>
              )}
              {item.observation && (
                <div className="bg-neutrals-50 text-neutrals-700 flex gap-1 rounded p-1.5 text-xs">
                  <span className="font-bold">observação:</span>
                  <span className="font-semibold">{item.observation}</span>
                </div>
              )}
            </div>
          ))}
        </section>
      ))}
    </div>
  );
};
