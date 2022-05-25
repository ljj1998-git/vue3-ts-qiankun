<script lang="ts" setup>
import Header from './Header/index.vue';
</script>

<template>
  <Header />
  <div class="box">
    <router-view />
  </div>
</template>

<style>
.box {
  height: 100%;
}
</style>
