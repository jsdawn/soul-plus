<template>
  <div class="doc-card">
    <div class="card-content">
      <slot></slot>

      <div>
        <div v-if="state.codeVisible"><slot name="code"></slot></div>
      </div>
    </div>

    <div class="card-operation">
      <span @click="toggle">{{ state.msg }}</span>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const state = reactive({
  codeVisible: false,
  msg: '展开代码'
});

const toggle = () => {
  state.codeVisible = !state.codeVisible;
  state.msg = state.codeVisible ? '收起代码' : '展开代码';
};
</script>

<style lang="scss" scoped>
.doc-card {
  border: 1px solid #eee;
  border-radius: 5px;
  box-shadow: 0 0 3px 0 #eee;

  .card-content {
    padding: 14px;
    border-bottom: 1px solid #eee;
  }

  .card-operation {
    width: 100%;
    height: 40px;
    line-height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      padding: 0 10px;
      cursor: pointer;
    }
  }
}
</style>
