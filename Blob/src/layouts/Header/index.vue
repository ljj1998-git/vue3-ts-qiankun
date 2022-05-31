<script lang="ts" setup>
import { ref, watch } from 'vue';
import { useWindowScroll } from '@vueuse/core';

const { y } = useWindowScroll();
const isShow = ref(false);
watch(y, (newData) => {
  isShow.value = newData > 60;
});
</script>

<template>
  <transition name="fade">
    <div v-if="isShow" ref="el" class="fixed z-50 w-full h-header bg-headerColor">
      <div class="flex justify-between h-full md:w-md lg:w-lg xl:w-xl 2xl:w-2xl m-auto">
        <div class="text-header text-2xl leading-header">
          Blog
        </div>
        <nav class="menu">
          <ul>
            <li>
              <router-link :to="{path:'/'}">
                首页
              </router-link>
            </li>
            <li>
              <router-link :to="{ path: '/RecordLife' }">
                生活分享
              </router-link>
            </li>
            <li>
              <a href="#">技分分享</a>
              <div class="sub">
                <ul>
                  <li>
                    <a href="#">Vue3</a>
                  </li>
                  <li><a href="#">React</a></li>
                  <li>
                    <a href="#">Angular</a>
                  </li>
                </ul>
              </div>
            </li>
            <li><a href="#">工具库</a></li>
            <li><a href="#">留言板</a></li>
            <li><a href="#">关于我</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.28s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
/* 改用子元素选择器，方便后面的控制 */
.menu > ul {
  list-style: none;
  margin: 0px;
}
/* 利用伪元素清理浮动 */
.menu > ul::after {
  display: block;
  content: '';
  clear: both;
}
.menu > ul > li {
  position: relative;
  float: left;
  width: auto;
}
.menu > ul > li > a {
  display: block;
  background-color: var(--color3);
  color: #dfdfdf;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  line-height: 60px;
  min-width: 60px;
  padding: 0 20px;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
}
.menu > ul > li:hover > a {
  background-color: #000;
}
.sub {
  position: absolute;
  width: 100%;
  height: 0;
  overflow: hidden;
}
.menu > ul > li:hover .sub {
  height: auto;
}

.sub > ul {
  list-style: none;
  transform: translateY(-100%);
  transition: all 0.5s ease;
}

.menu > ul > li:hover .sub > ul {
  transform: translateY(0);
}

/* 下边线 */
.sub > ul > li {
  border-bottom: 1px solid #777;
}

/* 最后一个菜单项取消下边线 */
.sub > ul > li:last-child {
  border-bottom: none;
}

/* 菜单项 */
.sub > ul > li > a {
  display: block;
  background-color: #333;
  color: #dfdfdf;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 30px;
  padding: 7px 20px;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
}

.sub > ul > li > a:hover {
  background-color: #555;
}
</style>
