import { orders, products } from '~/constants/mockedData';
import { Order, Product } from '~/constants/type';

export const useStore = defineStore('store', () => {
  const orderRef = ref<Order[]>(orders);
  const productRef = ref<Product[]>(products);

  const isLoading = ref<boolean>(false);
  const queryWithLoader = async <T>(query: () => Promise<T>): Promise<T> => {
    isLoading.value = true;
    try {
      const delay = 700;
      await new Promise((resolve) => setTimeout(resolve, delay));
      const result = await query();
      return result;
    } catch (error) {
      console.error(error);
    } finally {
      isLoading.value = false;
    }
  };

  const getOrderProducts = async (orderId: number): Promise<Product[]> => {
    return queryWithLoader<Product[]>(async () => {
      return productRef.value.filter((product) => product.order === orderId);
    });
  };

  return {
    isLoading,
    orderRef,
    productRef,
    getOrderProducts
  };
});
