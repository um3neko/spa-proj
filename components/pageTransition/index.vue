<template>
  <transition name="fade" mode="out-in">
    <slot></slot>
  </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active в версии 2.1.8+ */ {
  opacity: 0;
}
</style>
