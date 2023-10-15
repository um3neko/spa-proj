<template>
  <div>
    <h1>ORDERS</h1>
    <div>
      <div class="d-flex flex-column">
        <div class="scrollable-container custom-scrollbar">
          <coming-item v-for="index in 12" class="my-3"></coming-item>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style>
.scrollable-container {
  overflow: auto;
  max-height: 600px;
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
