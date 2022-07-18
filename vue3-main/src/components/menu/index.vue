<template>
 <a-menu
      :style="{ width: '200px', height: '100%' }"
      :default-open-keys="['0']"
      :default-selected-keys="['0_2']"
      breakpoint="xl"
      @menu-item-click="handleClick"
    >
      <a-sub-menu v-for="item in menus">
        <template #icon><icon-apps></icon-apps></template>
        <template #title>{{item.name}}</template>
        <a-menu-item v-for="val in item.children" :key="val.path">{{val.name}}</a-menu-item>
      </a-sub-menu>
 </a-menu>
</template>

<script lang="ts" setup>
import {IconApps} from "@arco-design/web-vue/es/icon";
import { useRouter } from 'vue-router'
import { useAppStore } from "@/store";
import { storeToRefs } from "pinia";
// 渲染菜单
const store = useAppStore()
const storeRef = storeToRefs(store)
const { menus } = storeRef

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
