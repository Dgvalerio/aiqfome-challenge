export const routes = {
  store: {
    list: (): string => '/',
    get: (storeId: number | string): string => `/store/${storeId}`,
    item: (storeId: number | string, itemId: number | string): string =>
      `/store/${storeId}/item/${itemId}`,
  },
  ticket: (): string => '/ticket',
};
