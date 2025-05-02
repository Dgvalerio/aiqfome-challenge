'use client';

import { FC, useContext } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { useRouter } from 'next/navigation';

import { ItemCategory } from '@/app/(private)/store/[storeId]/item/[itemId]/(components)/category';
import { ItemInfo } from '@/app/(private)/store/[storeId]/item/[itemId]/(components)/info';
import { Button } from '@/components/button/button';
import { Textarea } from '@/components/textarea/textarea';
import { TicketContext } from '@/context/ticket';
import { Item } from '@/types/item';
import { Store } from '@/types/store';
import { routes } from '@/utils/constants/routes';

export interface FormItem {
  value: number;
  quantity: number;
  extras?: {
    id: string;
    label: string;
    radio: string;
    content: {
      text: string;
      value?: number;
      checked?: boolean;
      quantity?: number;
    }[];
  }[];
  observation?: string;
}

export const ItemForm: FC<{ store: Store; item: Item }> = ({ store, item }) => {
  const router = useRouter();
  const form = useForm<FormItem>({
    defaultValues: {
      value: item.value,
      quantity: 0,
      extras: item.categories.map((category) => ({
        id: category.id,
        label: category.title,
        content: category.options.map((option) => ({
          text: option.title,
          value: option.value,
        })),
      })),
    },
  });
  const ticket = useContext(TicketContext);

  const extras = form.watch('extras');
  const quantity = form.watch('quantity');

  const total: number =
    item.categories.length === 0
      ? item.value
      : extras
          ?.map((value) => {
            if (value.radio) {
              const item = value.content.find(
                (content) => content.text === value.radio
              );

              return item ? item.value || 0 : 0;
            } else {
              return value.content.reduce((prev, curr) => {
                if (curr.checked) return prev + (curr.value || 0);
                else if (curr.quantity && curr.quantity > 0)
                  return prev + (curr.value || 0) * curr.quantity;

                return prev;
              }, 0);
            }
          })
          .reduce((prev, curr) => prev + curr, 0) || 0;

  const addItemToTicket = (data: FormItem): void => {
    ticket.addItem({
      id: store.id,
      store: store.name,
      items: [
        {
          timestamp: new Date().getTime(),
          name: item.name,
          unitValue: total,
          extras: data.extras
            ?.map((extra) => ({
              ...extra,
              content: extra.content.filter((content): boolean =>
                extra.radio
                  ? content.text === extra.radio
                  : !!content.checked ||
                    (content.quantity ? content.quantity > 0 : false)
              ),
            }))
            .filter((extra) => extra.content.length > 0),
          quantity: data.quantity,
          observation: data.observation,
        },
      ],
    });

    router.push(routes.ticket());
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(addItemToTicket)}>
        <ItemInfo {...item} value={total * quantity} />
        {item.categories.map((category, index) => (
          <ItemCategory key={category.title} index={index} {...category} />
        ))}
        <div className="mb-11 flex flex-col gap-4 p-4">
          <Textarea
            name="observation"
            placeholder={`alguma observação do item? • opcional\nex: tirar algum ingrediente, ponto do prato`}
          />
          {form.getValues('quantity') > 0 && (
            <div className="fixed right-0 bottom-0 left-0 px-6 py-4">
              <Button className="w-full" size="lg" type="submit">
                ver ticket
              </Button>
            </div>
          )}
        </div>
      </form>
    </FormProvider>
  );
};
