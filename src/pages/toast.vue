<template>
  <div class="page-toast">
    <h3 class="comp-title">Toast 轻提示</h3>
    <div class="comp-wrap">
      <so-button type="primary" @click="showToast">文字提示</so-button>

      <so-button type="danger" @click="closeToast">关闭</so-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { SoButton, SoToast } from 'packages/index.js';

let tt;

const showToast = () => {
  tt = SoToast('文字提示');
};

const closeToast = () => {
  tt.close();
};
</script>

<style lang="scss" scoped></style>
