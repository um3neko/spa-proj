<template>
  <div>
    <h1>ORDERS</h1>
    <div style="display: flex; justify-content: space-between">
      <div class="scrollable-container custom-scrollbar" :style="containerStyle">
        <div v-for="item in orders" :key="item.id">
          <ComingItem :is-selected="activeOrder === item.id" :order-item="item" class="my-3" @click="activeOrderHandler(item.id)"></ComingItem>
        </div>
      </div>
      <div v-if="activeOrder" class="scrollable-container custom-scrollbar" :style="productsContainerStyle">
        <ComingProducts :order-id="activeOrder" @close-products="hideOrdersHandler" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '~/store';

const store = useStore();
const orders = computed(() => store.orderRef);

const activeOrder = ref<number | null>(null);
const containerStyle = computed(() => ({ width: activeOrder.value ? '40%' : '100%' }));
const productsContainerStyle = computed(() => ({ width: activeOrder.value ? '60%' : '0%' }));

const activeOrderHandler = (orderId: number) => {
  activeOrder.value = orderId;
};

const hideOrdersHandler = () => {
  activeOrder.value = null;
};

watch(activeOrder, (newValue) => {
  if (newValue) {
    containerStyle.value.width = '40%';
    productsContainerStyle.value.width = '60%';
  } else {
    containerStyle.value.width = '100%';
    productsContainerStyle.value.width = '0%';
  }
});
</script>

<style>
.scrollable-container {
  overflow: auto;
  max-height: 930px;
  transition: width 0.2s;
}
.custom-scrollbar::-webkit-scrollbar {
  width: 12px;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #007bff;
  border-radius: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #0056b3;
}
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: #007bff #f1f1f1;
}
</style>
