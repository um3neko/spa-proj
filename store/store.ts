import { orders, products } from '~/constants/mockedData';

export const state = () => ({
  orders,
  products
});

export const getters = {
  getOrderById: (state) => (orderId) => state.orders.find((order) => order.id === orderId)
};

export const mutations = {};

export const actions = {};
