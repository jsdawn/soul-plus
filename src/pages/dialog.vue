<template>
  <div class="page-overlay">
    <h3 class="comp-title">Dialog 对话框</h3>
    <div class="comp-wrap">
      <so-button type="primary" @click="show = !show">显示对话框</so-button>

      <so-dialog
        v-model:show="show"
        title="Shopping"
        message="Are you sure???"
        :beforeClose="onBeforeClose"
      ></so-dialog>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { SoButton, SoDialog } from 'packages/index.js';

const show = ref(false);
const show2 = ref(false);

const onBeforeClose = action => {
  console.log(action);
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, 5000);
  });
};
</script>

<style lang="scss" scoped>
.page-overlay {
  .over-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    .content {
      padding: 20px;
      border-radius: 10px;
      background-color: #fff;
    }
  }
}
</style>
