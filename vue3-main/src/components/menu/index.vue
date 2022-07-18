<template>
 <a-menu
      :style="{ width: '200px', height: '100%' }"
      :default-open-keys="['0']"
      :default-selected-keys="['0_2']"
      breakpoint="xl"
      @menu-item-click="handleClick"
    >
      <a-sub-menu key="0">
        <template #icon><icon-apps></icon-apps></template>
        <template #title>Navigation 1</template>
        <a-menu-item key="/vue3_system/demo1">菜单1</a-menu-item>
        <a-menu-item key="/vue3_system/demo2">菜单2</a-menu-item>
      </a-sub-menu>
 </a-menu>
</template>

<script lang="ts" setup>
import {IconApps} from "@arco-design/web-vue/es/icon";
import { useRouter } from 'vue-router'
const router = useRouter()
const handleClick = (key:string) =>{
  router.push({ path: key });
}
</script>

<style lang="less" scoped>
:deep(.arco-menu-inner) {
  .arco-menu-inline-header {
    display: flex;
    align-items: center;
  }

  .arco-icon {
    &:not(.arco-icon-down) {
      font-size: 18px;
    }
  }
}
</style>
