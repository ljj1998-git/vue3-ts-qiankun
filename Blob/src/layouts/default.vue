<script lang="ts" setup>
import Header from './Header/index.vue';
</script>

<template>
  <Header />
  <div class=" bg-header w-full h-96">
    <div class="w-1/2 text-center relative left-1/2 top-1/2 transform -translate-x-2/4 -translate-y-2/4 text-white font-header  text-5xl">
      今天也是充满希望的一天！
    </div>
  </div>
  <div class="container">
    <router-view />
  </div>
</template>
