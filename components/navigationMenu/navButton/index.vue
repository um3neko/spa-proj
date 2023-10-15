<template>
  <button class="animated-button">
    <NuxtLink :to="navPath" class="nav-link">{{ buttonTitle }}</NuxtLink>
  </button>
</template>
<script setup lang="ts">
defineProps<{ buttonTitle: string; navPath: string }>();
</script>

<style>
.animated-button {
  position: relative;
  background-color: transparent;
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  overflow: hidden;
}

.animated-button::before {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  background-color: #5c8e29;
  transition: width 0.3s ease;
  bottom: 0;
  left: 0;
}

.animated-button::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  background-color: #5c8e29;
  transition: width 0.3s ease;
  bottom: 0;
  right: 0;
}

.animated-button:hover::before,
.animated-button:hover::after {
  width: 50%;
}
</style>
