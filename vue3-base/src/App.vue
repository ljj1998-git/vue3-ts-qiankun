<template>
  <router-view />
  123
</template>

<script lang="ts" setup>

</script>

<!-- <script lang="ts" setup>
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
      // router.onReady(() => {
      //   console.log(66);
      // });
      setTimeout(() => {
        router.push({
          path: "/vue3_system",
        });
        // actions.setGlobalState({ token: "ljj2" });
      }, 3000);
    }
  });
});

const handleClick = () => {
  actions.setGlobalState({ token: "ljj3" });
};
</script> -->
