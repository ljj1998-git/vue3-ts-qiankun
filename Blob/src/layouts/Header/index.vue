<script lang="ts" setup>
import { ref, toRefs } from 'vue';
import { useScroll } from '@vueuse/core';

const el = ref<HTMLElement | null>(null);
const {
  x, y, isScrolling, arrivedState, directions,
} = useScroll(el);
const {
  left, right, top, bottom,
} = toRefs(arrivedState);
const {
  left: toLeft, right: toRight, top: toTop, bottom: toBottom,
} = toRefs(directions);

// // 获取页面可视区域的宽高
// const el = ref<HTMLElement | null>(null)

const isShow = ref(false);
</script>

<template>
  <div v-if="isShow" ref="el" class="w-full h-header bg-gray-500">
    123
  </div>
</template>
