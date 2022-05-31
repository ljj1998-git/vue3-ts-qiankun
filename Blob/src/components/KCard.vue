<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'KCard',
  props: {
    titleText: { type: String },
  },
  setup() {
    const circleLists: Array<string> = ['#ff5d58 ', '#ffb528', '#26c73d'];
    return {
      circleLists,
    };
  },
});
</script>

<template>
  <div class="bg-white p-4 w-auto">
    <div v-if="titleText" class="flex pb-4 mb-2 border-b justify-between items-center">
      <div class="pl-4 font-bold text-xl border-l-4 border-blue-600">
        {{ titleText }}
      </div>
      <div class="flex">
        <div v-for="item in circleLists" :key="item" class="rounded-full w-4 h-4 mx-1" :style="'background-color:' + item"></div>
      </div>
    </div>
    <slot name="content" />
  </div>
</template>

<style lang="scss" scoped></style>
