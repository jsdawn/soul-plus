<template>
  <div>
    <doc-card>
      <so-cell title="标题" value="内容"></so-cell>
      <so-cell title="标题" label="描述信息" value="内容"></so-cell>

      <template v-slot:code>
        <pre>
          <code style="color:#999">{{code}}</code>
        </pre>
      </template>
    </doc-card>
  </div>
</template>

<script setup>
import SoCell from 'packages/Cell';
import 'packages/theme-chalk/src/cell.scss';

const code = `
  <so-cell title="标题" value="内容"></so-cell>
  <so-cell title="标题" label="描述信息" value="内容"></so-cell>`;
</script>

<style lang="scss" scoped></style>
