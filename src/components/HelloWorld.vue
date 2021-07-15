<template>
  <h1>{{ msg }}</h1>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <!-- <img :src="logoUrl" alt="" /> -->

  <button type="button" @click="state.count++">
    count is: {{ state.count }}
  </button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>

  <SoDropdownMenu />
</template>

<script setup>
import { reactive, toRefs } from 'vue';
import logoUrl from 'assets/logo.png';
import SoDropdownMenu from 'packages/DropdownMenu/SoDropdownMenu.vue';

defineProps({
  msg: String
});

const state = reactive({
  count: 0
});

console.log(import.meta.env);
</script>

<style lang="scss" scoped>
h1 {
  color: $textColor;
}
</style>
