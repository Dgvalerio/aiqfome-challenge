import { Category } from '@/types/category';

export interface Item {
  id: string;
  image: string;
  name: string;
  description: string;
  value: number;
  originalValue?: number;
  isInitial?: boolean;
  isSpicy?: boolean;
  isVegan?: boolean;
  categories: Category[];
}
