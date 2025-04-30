export interface ResponseAPI<T> {
  success: boolean;
  data: T;
  messages: string[];
}
