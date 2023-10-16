<template>
  <div>
    <h1>ORDERS</h1>
    <div style="display: flex; justify-content: space-between">
      <div class="scrollable-container custom-scrollbar" :style="{ width: isOpen ? '40%' : '100%' }">
        <ComingItem v-for="index in 6" class="my-3" @click="handler"></ComingItem>
      </div>
      <div v-if="isOpen" class="scrollable-container custom-scrollbar" style="width: 60%">
        <ComingProducts />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const isOpen = ref(false);
const handler = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style>
.scrollable-container {
  overflow: auto;
  max-height: 930px;
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
