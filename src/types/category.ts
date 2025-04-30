export interface Category {
  id: string;
  title: string;
  isRequired?: boolean;
  min?: number;
  max?: number;
  options: { title: string; value?: number; originalValue?: number }[];
}
