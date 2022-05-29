<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'KCard',
  props: {
    titleText: { type: String },
  },
});
</script>

<template>
  <div class="bg-white p-4 w-auto">
    <div class="flex border-b">
      <div class="mb-4 pl-4 font-bold text-xl border-l-4 border-blue-600">
        {{ titleText }}
      </div>
    </div>
    <slot />
  </div>
</template>

<style lang="scss" scoped></style>
