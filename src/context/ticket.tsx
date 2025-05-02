'use client';

import { createContext, FC, PropsWithChildren, useState } from 'react';

export interface TicketStoreItems {
  id: string;
  store: string;
  items: {
    timestamp: number;
    name: string;
    unitValue: number;
    quantity: number;
    extras?: {
      label: string;
      content: {
        text: string;
        value?: number;
      }[];
    }[];
    observation?: string;
  }[];
}

export interface TicketContextProps {
  items: TicketStoreItems[];
  addItem(store: TicketStoreItems): void;
  changeItemQuantity(storeId: TicketStoreItems['id'], quantity: number): void;
  removeItem(storeId: TicketStoreItems['id']): void;
  total: number;
}

export const TicketContext = createContext<TicketContextProps>({
  items: [],
  addItem() {},
  changeItemQuantity() {},
  removeItem() {},
  total: 0,
});

export type TicketProviderProps = PropsWithChildren;

export const TicketProvider: FC<TicketProviderProps> = ({ children }) => {
  const [items, setItems] = useState<TicketStoreItems[]>([]);

  const addItem: TicketContextProps['addItem'] = (item) => {
    setItems((prev) => {
      const itemsObject = prev.reduce(
        (prev, curr) => ({
          ...prev,
          [curr.id]: curr,
        }),
        {} as Record<string, TicketStoreItems>
      );

      if (itemsObject.hasOwnProperty(item.id)) {
        const aux = itemsObject[item.id];

        itemsObject[item.id] = { ...aux, items: [...aux.items, ...item.items] };
      } else {
        itemsObject[item.id] = item;
      }

      return Object.values(itemsObject);
    });
  };

  const removeItem: TicketContextProps['removeItem'] = (itemId) =>
    setItems((prev) => prev.filter((item) => item.id !== itemId));

  const changeItemQuantity: TicketContextProps['changeItemQuantity'] = (
    itemId,
    quantity
  ): void =>
    setItems((prev) =>
      prev.map((item) => ({
        ...item,
        items: item.items.map((i) => ({ ...i, quantity })),
      }))
    );

  const total = items.reduce(
    (prev, curr) =>
      prev +
      curr.items.reduce(
        (prev, curr) => prev + curr.unitValue * curr.quantity,
        0
      ),
    0
  );

  return (
    <TicketContext.Provider
      value={{ items, addItem, changeItemQuantity, removeItem, total }}
    >
      {children}
    </TicketContext.Provider>
  );
};
