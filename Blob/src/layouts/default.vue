<script lang="ts" setup>
import Header from './Header/index.vue';
</script>

<template>
  <Header />
  <div class="box">
    <suspense>
      <template #default>
        <router-view />
      </template>
      <template #fallback>
        <div>加载中...</div>
      </template>
    </suspense>
  </div>
</template>

<style>
.box {
  height: 100%;
}
</style>
