<template>
  <div class="container">
    <div class="left-side">
      <a-tree
        :data="treeData"
        :default-expanded-keys="['0-0-0']"
        :default-selected-keys="['0-0-0', '0-0-1']"
      />
    </div>
    <div class="right-side">
      <a-tree
        :data="treeData"
        :default-expanded-keys="['0-0-0']"
        :default-selected-keys="['0-0-0', '0-0-1']"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const treeData = [
  {
    title: "Trunk 0-0",
    key: "0-0",
    children: [
      {
        title: "Branch 0-0-0",
        key: "0-0-0",
        disabled: true,
        children: [
          {
            title: "Leaf",
            key: "0-0-0-0",
          },
          {
            title: "Leaf",
            key: "0-0-0-1",
          },
        ],
      },
      {
        title: "Branch 0-0-1",
        key: "0-0-1",
        children: [
          {
            title: "Leaf",
            key: "0-0-1-0",
          },
        ],
      },
    ],
  },
];
</script>

<style lang="less">
.container {
  background-color: var(--color-fill-2);
  padding: 16px 20px;
  padding-bottom: 0;
  display: flex;
  .left-side {
    width: 280px;
    margin-left: 16px;
  }

  .right-side {
    flex: 1;
    overflow: auto;
  }
}
.panel {
  background-color: var(--color-bg-2);
  border-radius: 4px;
  overflow: auto;
}
</style>
