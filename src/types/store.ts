import { Section } from '@/types/section';

export interface Store {
  id: string;
  openTime: string;
  closeTime: string;
  image: string;
  name: string;
  shipping: number;
  rating: number;
  sections: Section[];
}
