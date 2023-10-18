<template>
  <div class="container-coming-item full-width-rectangle bg-white">
    <div class="row align-content-center" style="height: 100px; width: 100%; position: relative; margin: 0 !important">
      <div class="col-2">
        <p>{{ orderItem.title }}</p>
      </div>
      <div class="col-2">
        <button class="btn btn-primary rounded-circle">
          <BootstrapIcon name="xbox" />
        </button>
      </div>
      <div class="col-2">
        <p>PRODUCT ORDERS COUNT</p>
      </div>
      <div class="col-2">
        <p>{{ orderItem.description }}</p>
      </div>
      <div class="col-2">
        <p>PRICE COUNT</p>
      </div>
      <div class="col-1">
        <button class="btn rounded-circle">
          <BootstrapIcon name="trash" />
        </button>
      </div>
      <div
        v-if="isSelected"
        style="
          position: absolute;
          height: 100px;
          width: 55px;
          background-color: #36e4da;
          top: 0;
          right: 0;
          border-bottom-right-radius: 10px;
          border-top-right-radius: 10px;
        "
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Order } from '~/constants/type';
defineProps<{ orderItem: Order; isSelected: boolean }>();
</script>
<style>
.full-width-rectangle {
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  transition: transform 0.2s;
  background-color: #f5f5f5;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.full-width-rectangle:hover {
  transform: scale(0.97);
  cursor: pointer;
}
</style>
