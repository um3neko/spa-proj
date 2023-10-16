<template>
  <div>
    <Topbar />
    <div class="row">
      <div class="col-md-2 px-0">
        <Sidebar />
      </div>
      <div class="col-md-10 px-0 bg-custom-gray">
        <main style="height: 100vh">
          <router-view class="m-lg-5"></router-view>
        </main>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>

<style scoped>
.bg-custom-gray {
  background-color: #f0f3f5;
}
</style>
