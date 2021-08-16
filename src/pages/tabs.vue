<template>
  <div class="page-tabs">
    <h3 class="comp-title">Tabs 标签页</h3>
    <div class="comp-wrap">
      <so-tabs>
        <so-tab-pane title="个人信息">内容1</so-tab-pane>
        <so-tab-pane title="足迹">内容2</so-tab-pane>
      </so-tabs>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { SoTabs, SoTabPane } from 'packages/index.js';
</script>

<style lang="scss" scoped></style>
