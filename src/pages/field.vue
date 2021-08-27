<template>
  <div class="page-field">
    <h3 class="comp-title">Field 输入框</h3>
    <div class="comp-wrap">
      <so-field
        label="用户名"
        v-model="info.username"
        placeholder="请输入用户名"
      ></so-field>
    </div>

    <h3 class="comp-title">自定义类型</h3>
    <div class="comp-wrap">
      <so-field label="文本" aa v-model="info.text" type="text"></so-field>
      <so-field label="数字" v-model="info.num" type="number"></so-field>
      <so-field label="密码" v-model="info.pwd" type="password"></so-field>
    </div>
  </div>
</template>



<script setup>
import { reactive } from 'vue';
import { SoField } from 'packages/index.js';

const info = reactive({
  username: '',
  text: '',
  num: '',
  pwd: ''
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
