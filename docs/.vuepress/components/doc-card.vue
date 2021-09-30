<template>
  <div class="card">
    <div class="card-content">
      <slot></slot>
      <div>
        <div v-if="state.codeVisible"><slot name="code"></slot></div>
      </div>
    </div>
    <div class="card-operation" @click="toggle">
      {{ state.msg }}
    </div>
  </div>
</template>

<script setup>
import { createApp, reactive } from 'vue';
import VueHighlightJS from 'vue3-highlightjs';
import 'highlight.js/styles/solarized-light.css';

const app = createApp({});
app.use(VueHighlightJS);

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
.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 3px 0 #ccc;
  .card-content {
    padding: 14px;
    border-bottom: 1px solid #ccc;
  }
  .card-operation {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
