<template>
  <div class="page-action-sheet">
    <h3 class="comp-title">ActionSheet 动作面板</h3>
    <div class="comp-wrap">
      <so-button type="primary" @click="show1 = true">基础用法</so-button>
    </div>

    <so-action-sheet
      v-model:show="show1"
      description="这是一段描述，以下是操作选项"
      cancel-text="取消"
      :actions="actions"
    ></so-action-sheet>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { SoButton, SoActionSheet, SoToast } from 'packages/index.js';

const show1 = ref(false);

const deleteHandler = action => {
  action.loading = true;
  setTimeout(() => {
    action.loading = false;
    SoToast('删除成功');
    show1.value = false;
  }, 2000);
};

const actions = ref([
  { name: '选项一' },
  { name: '选项二', disabled: true },
  { name: '删除', color: 'red', className: 'delete', callback: deleteHandler }
]);
</script>

<style lang="scss" scoped></style>
