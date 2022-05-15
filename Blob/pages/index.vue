<script lang="ts" setup>
import { ref } from "vue";
const url = "http://112.124.37.144:4600/";
const res = await useAsyncData("getList", () => $fetch(url));
const list = ref(res.data)
console.log(res);

</script>

<template>
  <p class="text-red-600 sm:text-yellow-300 lg:text-green-600 xl:text-blue-300">
    Tailwind CSS text-color测试
    <div>{{list}}</div>
  </p>
</template>
