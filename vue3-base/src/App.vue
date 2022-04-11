<template>
  <div id="nav">
    主应用
    <!-- 子应用容器 -->
    <div id="yourContainer" style="width: 100%;border: 1px solid #ccc;" />
    <!-- 路由跳转 -->
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <!-- 子应用路由跳转 -->
    <router-link to="/child/child1">child/child1</router-link>
  </div>
  <router-view />
</template>
