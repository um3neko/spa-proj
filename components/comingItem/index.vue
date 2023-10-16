<template>
  <div class="container full-width-rectangle bg-white">
    <div class="row align-content-center" style="height: 100px">
      <div class="col-2">
        <p>Компонент</p>
      </div>
      <div class="col-2">
        <button class="btn btn-primary rounded-circle">
          <BootstrapIcon name="xbox" />
        </button>
      </div>
      <div class="col-2">
        <p>23 Продукта</p>
      </div>
      <div class="col-3">
        <p>Дата 24 01 2001</p>
      </div>
      <div class="col-2">
        <p>Цена в долларах</p>
      </div>
      <div class="col-1">
        <button class="btn rounded-circle">
          <BootstrapIcon name="trash" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
<style>
.full-width-rectangle {
  height: 100px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  transition: transform 0.2s;
}
.full-width-rectangle:hover {
  transform: scale(0.98);
}
</style>
