<template>
  <router-view v-slot="{ Component, route }">
  <component
        :is="Component"
        :key="route.fullPath"
      />
    <!-- <div>{{ JSON.stringify(route) }}</div> -->
    <!-- <transition name="fade" mode="out-in" appear>
      <component
        :is="Component"
        :key="route.fullPath"
      />
      <keep-alive v-else :include="cacheList">
        <component :is="Component" :key="route.fullPath" />
      </keep-alive>
    </transition> -->
  </router-view>
</template>

<script lang="ts" setup>
import { computed } from "vue";
// import { useTabBarStore } from '@/store';

// const tabBarStore = useTabBarStore();

// const cacheList = computed(() => tabBarStore.getCacheList);
</script>

<style scoped lang="less"></style>
