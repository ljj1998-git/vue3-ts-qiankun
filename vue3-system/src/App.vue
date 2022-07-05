<script setup lang="ts">
import actions from "./utils/actions.js";
import { onMounted } from "vue";

onMounted(() => {
  actions.onGlobalStateChange((state, prev) => {
    console.log("子应用监听到了");
  });
});
</script>

<template>
  <router-view />
</template>

<style></style>
