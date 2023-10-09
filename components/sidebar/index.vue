<template>
  <div class="container-fluid">
    <div class="row">
      <!-- Сайдбар (слева) -->
      <nav class="col-md-3 col-lg-2 d-md-block bg-light sidebar">
        <!-- Ваше содержимое сайдбара -->
        <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle" style="width: 125px" alt="Avatar" />
        <div class="position-sticky">
          <ul class="nav flex-column">
            <li class="nav-item">
              <router-link to="/profile" class="nav-link">Приход</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/profile" class="nav-link">Группы</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/profile" class="nav-link">Продукты</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/profile" class="nav-link">Продукты</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/profile" class="nav-link">Настройки</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
