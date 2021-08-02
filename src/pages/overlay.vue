<template>
  <div class="page-button">
    <h3 class="comp-title">遮罩层</h3>
    <div class="comp-wrap">
      <so-button type="primary" @click="show = !show">显示遮罩层</so-button>
      <so-overlay v-model:show="show"></so-overlay>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { SoButton, SoOverlay } from 'packages/index.js';

const show = ref(false);
</script>

<style lang="scss" scoped>
.page-button {
  background-color: transparent;
}
</style>
