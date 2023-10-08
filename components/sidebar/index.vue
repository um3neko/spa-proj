<template>
  <div class="container-fluid">
    <div class="row">
      <nav class="col-md-3 col-lg-2 d-md-block bg-light">
        <div class="position-sticky">
          <ul class="nav flex-column">
            <li class="nav-item">
              <router-link to="/dashboard" class="nav-link"
                >Dashboard</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/profile" class="nav-link">Профиль</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
