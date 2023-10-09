<template>
  <div>
    <header>
      <Topbar />
    </header>
    <div class="container-fluid">
      <div class="row">
        <nav class="col-md-2 bg-light">
          <Sidebar />
        </nav>
        <main class="col-md-10">
          <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
