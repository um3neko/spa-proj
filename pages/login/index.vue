<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">Логин</div>
          <div class="card-body">
            <form @submit.prevent="login">
              <div class="mb-3">
                <label for="email" class="form-label">Email адрес</label>
                <input type="email" id="email" v-model="formData.email" @input="validateEmail" class="form-control" required />
                <div v-if="emailError" class="text-danger">
                  {{ emailError }}
                </div>
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Пароль</label>
                <input type="password" id="password" v-model="formData.password" class="form-control" required />
              </div>
              <button type="submit" class="btn btn-primary" @click="login">Войти</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { definePageMeta } from '#imports';

const nav = useRoute();
const formData = ref({
  email: '',
  password: ''
});

const emailError = ref('');

const validateEmail = () => {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
  if (!emailRegex.test(formData.email)) {
    emailError.value = 'Неправильный формат email';
  } else {
    emailError.value = '';
  }
};

const login = () => {
  // validateEmail();
  console.log(formData.value);
  nav.go('/profile');
};

definePageMeta({
  layout: 'login'
});
</script>
