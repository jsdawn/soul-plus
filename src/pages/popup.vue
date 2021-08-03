<template>
  <div class="page-popup">
    <h3 class="comp-title">弹出层</h3>
    <div class="comp-wrap">
      <so-button type="primary" @click="show = !show">显示弹出层</so-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { SoButton, SoPopup } from 'packages/index.js';

const show = ref(false);
</script>

<style lang="scss" scoped>
.page-popup {
}
</style>
