<template>
  <div>
    <doc-card>
      <so-button type="primary">按钮</so-button>
      <so-button type="success">按钮</so-button>
      <so-button>按钮</so-button>

      <template v-slot:code>
        <pre>
          <code style="color:#999">{{code}}</code>
        </pre>
      </template>
    </doc-card>
  </div>
</template>

<script setup>
import SoButton from 'packages/Button';
import 'packages/theme-chalk/src/button.scss';

const code = `<so-button type="primary">按钮</so-button>
            <so-button type="success">按钮</so-button>
            <so-button>按钮</so-button>`;
</script>

<style lang="scss" scoped></style>
