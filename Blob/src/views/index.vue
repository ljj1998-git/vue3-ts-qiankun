<script lang="ts" setup>
import { DownOutlined } from '@ant-design/icons-vue';
import { getCurrentInstance, onMounted, ref } from 'vue';
// 引入全局
// eslint-disable-next-line prefer-const
let width = ref('0px');
onMounted(() => {
  const { $refs } = (getCurrentInstance() as any).proxy;
  width.value = `${$refs.classfy.offsetWidth / 2}px`;
  console.log(width);
});
</script>

<template>
  <div class="box bg-header bg-cover w-full">
    <div
      class="w-1/2 text-center relative left-1/2 top-1/2 transform -translate-x-2/4 -translate-y-2/4 text-white font-header text-5xl"
    >
      今天也是充满希望的一天！
    </div>
    <div ref="classfy" class="animate cursor-pointer text-white font-header text-5xl">
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
    left:calc(50% - v-bind(width));
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
