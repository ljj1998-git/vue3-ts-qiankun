<template>
  登录子应用
  <button @click="handleLogin">登录</button>
</template>

<script lang="ts" setup>
import actions from "../../utils/actions.js"; //导入实例
const handleLogin = () => {
  // setTimeout(()=>{

  // })
  actions.setGlobalState({
    token: "ljj",
    res: [
      {
        type: 0,
        name: "潘集项目",
        rotues: [
          {
            path: "/vue3_system/demo2",
            name: "首页1",
          },
        ],
      },
      {
        type: 1,
        name: "二供项目",
        rotues: [
          {
            path: "/demo2",
            name: "首页2",
          },
        ],
      },
    ],
  }); //改变全局状态
};
</script>
