<template>
  <div>
    <li class="d-flex justify-content-between align-items-center list-group-item-action p-3">
      <span>
        <i class="bi bi-circle-fill" :class="isOpen ? 'text-success' : 'text-danger'" style="margin-left: 25px; margin-right: 25px"></i>
        <img
          src="https://i.pinimg.com/564x/9d/df/00/9ddf0047343f6e8fa51d2f27309f36e0.jpg"
          alt="Image"
          class="img-thumbnail"
          style="max-height: 80px; max-width: 80px"
        />
        Your Item Name
      </span>
      <span v-if="isOpen" class="text-success">Open</span>
      <span v-else class="text-danger">Closed</span>
      <button class="btn btn-danger" @click="deleteItem">Delete</button>
    </li>
  </div>
</template>

<script setup lang="ts">
const isOpen = ref(true);
</script>

<style></style>
