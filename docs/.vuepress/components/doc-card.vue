<template>
  <div class="doc-card">
    <div class="card-content">
      <slot></slot>

      <highlightjs v-show="state.codeVisible" :code="props.code" />
    </div>

    <div class="card-operation">
      <span @click="toggle">{{ state.msg }}</span>
    </div>
  </div>
</template>

<script>
import hljs from 'highlight.js/lib/core';
import xml from 'highlight.js/lib/languages/xml';
import hljsVuePlugin from '@highlightjs/vue-plugin';

hljs.registerLanguage('xml', xml);

export default {
  components: {
    highlightjs: hljsVuePlugin.component
  }
};
</script>

<script setup>
import { reactive } from 'vue';

const props = defineProps({
  code: { type: String, default: '' }
});

const state = reactive({
  codeVisible: false,
  msg: '展开代码'
});

const toggle = () => {
  state.codeVisible = !state.codeVisible;
  state.msg = state.codeVisible ? '收起代码' : '展开代码';
};
</script>

<style lang="scss">
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

  pre {
    padding: 0;
    margin: 0;
    code.hljs {
      color: inherit;
    }
  }
}
</style>
