import { Item } from '@/types/item';

export interface Section {
  id: string;
  title: string;
  details?: string;
  showCurrency?: boolean;
  items: Item[];
}
