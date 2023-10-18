<template>
  <div
    class="row product-item justify-content-between align-items-center p-2"
    @mouseover="isHovered = true"
    @mouseleave="isHovered = false"
    :class="{ hovered: isHovered }"
  >
    <div class="col-1">
      <i class="bi bi-circle-fill" :class="product.isNew === 1 ? 'text-success' : 'text-danger'" style="margin-left: 25px; margin-right: 25px"></i>
    </div>
    <div class="col-2">
      <img :src="product.photo" alt="Image" class="img-thumbnail" style="max-height: 80px; max-width: 80px" />
    </div>
    <div class="col-5">
      <p>{{ product.title }}</p>
      <p>{{ product.serialNumber }}</p>
    </div>
    <div class="col-3">
      <p>{{ product.isNew }}</p>
    </div>
    <div class="col-1">
      <button class="btn rounded-circle">
        <BootstrapIcon name="trash" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Product } from '~/constants/type';
defineProps<{ product: Product; isFullWith: boolean }>();
const isHovered = ref(false);
</script>

<style>
.product-item {
  transition: background-color 0.3s;
}

.product-item.hovered {
  background-color: #f0f0f0;
  cursor: pointer;
}
</style>
