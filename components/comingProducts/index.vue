<template>
  <div class="products-container">
    <div class="p-4">
      <div class="close-button-container">
        <button class="close-button" @click="closeButtonHandler">X</button>
      </div>
      <h3>{{ orderId }}</h3>
      <button class="btn btn-outline-success">
        <BootstrapIcon name="plus-circle"></BootstrapIcon>
        Добавить товар
      </button>
    </div>
    <div class="spinner-border" v-if="store.isLoading" style="width: 3rem; height: 3rem" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <div class="list-group" v-else>
      <div v-for="item in products" :key="item.id">
        <ComingProductsItem :product="item" :is-full-with="false" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '~/store';
import { Product } from '~/constants/type';

const store = useStore();
const props = defineProps<{ orderId: number }>();
const emit = defineEmits<{ (eventName: 'close-products'): void }>();
const products = ref<Product[]>(await store.getOrderProducts(props.orderId));

watch(
  () => props.orderId,
  async (newOrderId) => {
    products.value = await store.getOrderProducts(newOrderId);
  }
);
const closeButtonHandler = () => {
  emit('close-products');
};
</script>

<style>
.close-button-container {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}
.close-button {
  position: absolute;
  top: -10px;
  right: -10px;
}
.products-container {
  position: relative;
  background: white;
  margin: 16px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  transition: transform 0.2s;
}
</style>
