<template>
  <button class="so-button">
    <slot>{{ state.text }}</slot>
  </button>
</template>

<script setup>
import { reactive } from 'vue';

const state = reactive({
  text: 'button test import'
});
</script>

<style lang="scss" scoped>
.so-button {
  font-size: 16px;
  color: burlywood;
  & + .so-button {
    margin-left: 10px;
  }
}
</style>
