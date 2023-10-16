<template>
  <div class="products-container">
    <div class="p-4">
      <h3>ASD</h3>
      <button class="btn btn-outline-success">
        <BootstrapIcon name="plus-circle"></BootstrapIcon>
        Добавить товар
      </button>
    </div>
    <div class="list-group">
      <ComingProductsItem v-for="index in 9" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style>
.products-container {
  background: white;
  margin: 16px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  transition: transform 0.2s;
}
</style>
