<script lang="ts" setup>
import { ref } from 'vue';
import { useMouse } from '@vueuse/core';

const { x, y } = useMouse();
console.log(x.value, y.value);

const isShow = ref(false);
</script>

<template>
  <div v-if="isShow" class="w-full h-header bg-gray-500">
    123
  </div>
</template>
