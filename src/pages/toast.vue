<template>
  <div class="page-toast">
    <h3 class="comp-title">Toast 轻提示</h3>
    <div class="comp-wrap">
      <so-button type="primary" @click="show = !show">文字提示</so-button>

      <so-toast v-model:show="show" message="文字提示"></so-toast>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { SoButton, SoToast } from 'packages/index.js';

const show = ref(false);
</script>

<style lang="scss" scoped></style>
