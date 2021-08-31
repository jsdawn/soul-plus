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
      <so-field label="文本" v-model="info.text"></so-field>
      <so-field label="数字" v-model.number="info.num" type="number"></so-field>
      <so-field label="密码" v-model="info.pwd" type="password"></so-field>
    </div>

    <h3 class="comp-title">禁用输入框</h3>
    <div class="comp-wrap">
      <so-field label="文本" model-value="输入框只读" readonly></so-field>
      <so-field label="文本" model-value="输入框已禁用" disabled></so-field>
    </div>

    <h3 class="comp-title">显示图标</h3>
    <div class="comp-wrap">
      <so-field
        label="文本"
        v-model="info.icon1"
        left-icon="wap-home"
        right-icon="star"
        placeholder="显示图标"
      ></so-field>

      <so-field
        label="文本"
        v-model="info.icon2"
        left-icon="fire"
        clearable
        placeholder="显示清除图标"
      ></so-field>
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
  pwd: '',
  icon2: ''
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
