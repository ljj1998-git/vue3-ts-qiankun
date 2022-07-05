<template>
  <div id="nav">
    主应用
    <button @click="handleClick">主传子</button>
    <!-- 子应用容器 -->
    <div id="vue3_system" style="width: 100%; border: 1px solid #ccc" />
    <!-- 子应用登录 -->
    <div id="vue3_login" style="width: 100%; border: 1px solid #ccc" />
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import actions from "./utils/actions.js";

const router = useRouter();

onMounted(() => {
  actions.onGlobalStateChange((state, prev) => {
    const { token, res } = state;
    // 监听公共状态的变化
    console.log("主应用: 变更前");
    console.log(prev);
    console.log("主应用: 变更后");
    console.log(state);
    if (token === "ljj") {
      router.push({
        path: "/vue3_system",
      });
      // router.onReady(() => {
      //   console.log(66);
      // });
      // setTimeout(() => {
      //   actions.setGlobalState({ token: "ljj2" });
      // }, 3000);
    }
  });
});

const handleClick = () => {
  actions.setGlobalState({ token: "ljj3" });
};
</script>
