<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'KCard',
  props: {
    titleText: { type: String },
  },
  setup() {
    return {
      // titleText,
    };
  },
});
</script>

<template>
  <div class="bg-white p-4 w-auto">
    <div v-if="titleText" class="flex pb-4 border-b justify-between items-center">
      <div class="pl-4 font-bold text-xl border-l-4 border-blue-600">
        {{ titleText }}
      </div>
      <div>
        <slot name="titleRight" />
      </div>
    </div>
    <slot name="content" />
  </div>
</template>

<style lang="scss" scoped></style>
