<template>
  <div class="page-action-sheet">
    <h3 class="comp-title">ActionSheet 动作面板</h3>
    <div class="comp-wrap">
      <so-button type="primary" @click="show1 = true">基础用法</so-button>
    </div>

    <so-action-sheet
      v-model:show="show1"
      title="动作面板"
      description="这是一段描述"
      cancel-text="取消"
      :actions="actions"
    ></so-action-sheet>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { SoButton, SoActionSheet } from 'packages/index.js';

const show1 = ref(false);
const actions = ref([
  { id: 1, name: '选项一' },
  { id: 2, name: '选项二' },
  { id: 3, name: '选项三' }
]);
</script>

<style lang="scss" scoped></style>
