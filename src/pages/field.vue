<template>
  <div class="page-field">
    <h3 class="comp-title">Field 输入框</h3>
    <div class="comp-wrap">
      <so-field
        label="用户名"
        v-model="info.username"
        placeholder="请输入用户名"
        left-icon="user-circle-o"
        right-icon="arrow"
        label-width="100px"
      >
        <template #label>颠三倒四</template>
      </so-field>

      <so-field></so-field>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { SoField } from 'packages/index.js';

const info = reactive({
  username: ''
});
</script>

<style lang="scss" scoped>
.page-field {
  .comp-wrap {
    padding-left: 0;
    padding-right: 0;
    background-color: #fff;
  }
}
</style>
