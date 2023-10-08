<template>
  <div>
    <Topbar />
    <Sidebar />
    <div class="container-fluid">
      <div class="row">
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <slot />
        </main>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
