<script lang="ts">
import { DownOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
import { useWindowSize, useResizeObserver, useWindowScroll } from '@vueuse/core';
import { scrollAnimation } from '@utils/scroll';
import KCard from '@/components/KCard.vue';

import { getTest } from '@/apis/demo';

export default defineComponent({
  components: {
    DownOutlined,
    KCard,
  },
  async setup() {
    interface newsListResType{
      type: number,
        name: string,
        title: string,
    }
    let newsList:Array<newsListResType> = [];
    console.log(newsList);
    console.log(22);

    const res = await getTest();
    console.log(res);
    console.log(33);

    // 获取页面可视区域的宽高
    const { height: currentHeight } = useWindowSize();
    // 当前页面的滚动y值
    const { y: windowY } = useWindowScroll();
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
    const handleDropDown = (): void => {
      scrollAnimation(windowY.value, currentHeight.value - 60);
    };
    return {
      dropDown,
      dropDownWidth,
      handleDropDown,
    };
  },
});

// 点击后页面自动下拉
</script>

<template>
  <div class="box bg-header bg-cover w-full">
    <div class="w-1/2 text-center relative left-1/2 top-1/2 transform -translate-x-2/4 -translate-y-2/4 text-white font-header text-5xl">
      今天也是充满希望的一天！
    </div>
    <div ref="dropDown" class="animate cursor-pointer text-white font-header text-5xl" @click="handleDropDown">
      开启新的一天
      <down-outlined />
    </div>
  </div>

  <div class="flex md:w-md lg:w-lg xl:w-xl 2xl:w-2xl m-auto mt-4">
    <div class="w-3/4 mr-4">
      <k-card title-text="最新动态">
        <template #titleRight>
          123
        </template>
        <template #content>
          <div class="flex flex-wrap">
            <div v-for="item in 6" :key="item" class="border w-1/3">
              <div class="flex justify-between items-center">
                <div class=""></div>
                <div class=""></div>
              </div>
            </div>
          </div>
        </template>
      </k-card>
    </div>
    <div class="w-1/4">
      <K-card title-text="个人资料">
        321
      </K-card>
    </div>
  </div>
  <div v-for="item in 100" :key="item">
    很多内容
  </div>
</template>

<style lang="scss">
.animate {
  position: absolute;
  left: calc(50% - v-bind(dropDownWidth));
  bottom: 2rem;
  -webkit-animation: bounce-down 1.7s linear infinite;
  animation: bounce-down 1.7s linear infinite;
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
