'use client';

import {
  createContext,
  FC,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react';

interface TicketItem {
  id: string;
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
}

export interface TicketStore {
  id: string;
  store: string;
  items: TicketItem[];
}

export interface TicketContextProps {
  items: TicketStore[];
  addItem(store: TicketStore): void;
  changeItemQuantity(
    storeId: TicketStore['id'],
    itemId: TicketStore['items'][number]['id'],
    quantity: number
  ): void;
  total: number;
}

export const TicketContext = createContext<TicketContextProps>({
  items: [],
  addItem() {},
  changeItemQuantity() {},
  total: 0,
});

export type TicketProviderProps = PropsWithChildren;

export const TicketProvider: FC<TicketProviderProps> = ({ children }) => {
  const [items, setItems] = useState<TicketStore[]>([]);

  const addItem: TicketContextProps['addItem'] = (item) => {
    setItems((prev) => {
      const itemsObject = prev.reduce(
        (prev, curr) => ({
          ...prev,
          [curr.id]: curr,
        }),
        {} as Record<string, TicketStore>
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

  const changeItemQuantity: TicketContextProps['changeItemQuantity'] = (
    storeId,
    itemId,
    quantity
  ): void =>
    setItems((prev) => {
      const storesObject = prev.reduce(
        (prev, curr) => ({
          ...prev,
          [curr.id]: curr,
        }),
        {} as Record<string, TicketStore>
      );

      const itemsObject = storesObject[storeId].items.reduce(
        (prev, curr) => ({
          ...prev,
          [curr.id]: curr,
        }),
        {} as Record<string, TicketItem>
      );

      if (quantity === itemsObject[itemId]?.quantity) {
        return prev;
      }

      if (quantity === 0) {
        delete itemsObject[itemId];
      } else {
        itemsObject[itemId].quantity = quantity;
      }

      if (Object.values(itemsObject).length === 0) {
        delete storesObject[storeId];
      } else {
        storesObject[storeId].items = Object.values(itemsObject);
      }

      return Object.values(storesObject);
    });

  const total = items.reduce(
    (prev, curr) =>
      prev +
      curr.items.reduce(
        (prev, curr) => prev + curr.unitValue * curr.quantity,
        0
      ),
    0
  );

  useEffect(() => {
    const ticketContext = localStorage.getItem('ticket-context');

    if (ticketContext) setItems(JSON.parse(ticketContext));
  }, []);

  useEffect(() => {
    if (items.length > 0) {
      localStorage.setItem('ticket-context', JSON.stringify(items));
    } else {
      localStorage.removeItem('ticket-context');
    }
  }, [items]);

  return (
    <TicketContext.Provider
      value={{ items, addItem, changeItemQuantity, total }}
    >
      {children}
    </TicketContext.Provider>
  );
};
