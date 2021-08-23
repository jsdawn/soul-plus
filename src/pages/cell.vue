<template>
  <div class="page-cell">
    <h3 class="comp-title">Cell 单元格</h3>
    <div class="comp-wrap">
      <so-cell></so-cell>
    </div>
  </div>
</template>

<script setup>
import { SoCell } from 'packages/index.js';
</script>

<style lang="scss" scoped>
.page-cell {
  .comp-wrap {
    padding-left: 0;
    padding-right: 0;
    background-color: #fff;
  }
}
</style>
