<script lang="ts" setup>
import { DownOutlined } from '@ant-design/icons-vue';
import { ref } from 'vue';
import { useWindowSize, useResizeObserver } from '@vueuse/core';
import { scrollAnimation } from '@utils/scroll';

// 获取页面可视区域的宽高
const { height: currentHeight } = useWindowSize();
/**
 * 下拉按钮 模块
 * @var dropDown 下拉模块 dom元素
 * @var dropDownWidth css中计算left使用的变量
 *
 * @function handleDropDown
 * 点击后页面滚动事件
 */
const dropDown = ref(null);
const dropDownWidth = ref('0px');
useResizeObserver(dropDown, (entries) => {
  const entry = entries[0];
  const { width } = entry.contentRect;
  dropDownWidth.value = `${width / 2}px`;
});
const handleDropDown = ():void => {
  scrollAnimation(0, currentHeight.value);
};

// 点击后页面自动下拉

</script>

<template>
  <div class="box bg-header bg-cover w-full">
    <div
      class="w-1/2 text-center relative left-1/2 top-1/2 transform -translate-x-2/4 -translate-y-2/4 text-white font-header text-5xl"
    >
      今天也是充满希望的一天！
    </div>
    <div ref="dropDown" class="animate cursor-pointer text-white font-header text-5xl" @click="handleDropDown">
      开启新的一天
      <down-outlined />
    </div>
  </div>

  <div>
    <div v-for="item in 100" :key="item">
      很多内容
    </div>
  </div>
</template>

<style lang="scss">
html,
body,
#app,
.box {
  height: 100%;
  .animate {
    position: absolute;
    left:calc(50% - v-bind(dropDownWidth));
    bottom: 2rem;
    -webkit-animation: bounce-down 1.7s linear infinite;
    animation: bounce-down 1.7s linear infinite;
  }
}
@-webkit-keyframes bounce-down {
  25% {
    -webkit-transform: translateY(-6px);
  }
  50%,
  100% {
    -webkit-transform: translateY(0);
  }
  75% {
    -webkit-transform: translateY(6px);
  }
}
@keyframes bounce-down {
  25% {
    transform: translateY(-6px);
  }
  50%,
  100% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(6px);
  }
}
</style>
