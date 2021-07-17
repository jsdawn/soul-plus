<template>
  <h1>{{ msg }}</h1>
  <h1>{{ msg }}</h1>
  <h1>{{ msg }}</h1>
  <h1>{{ msg }}</h1>
  <h1>{{ msg }}</h1>
  <h1>{{ msg }}</h1>
  <h1>{{ msg }}</h1>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <!-- <img :src="logoUrl" alt="" /> -->

  <button type="button" @click="state.itemName += state.count++">改名</button>
  <button type="button" @click="state.showItem = !state.showItem">
    切换显示item {{ state.showItem }}
  </button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>

  <so-dropdown-menu>
    <so-dropdown-item :title="state.itemName" v-if="state.showItem">
      <p v-for="n in 5" :key="n">商品{{ n }}</p>
    </so-dropdown-item>
    <so-dropdown-item title="排序">
      <p v-for="n in 7" :key="n">排序{{ n }}</p>
    </so-dropdown-item>
  </so-dropdown-menu>

  <div style="height: 200px; backgroundcolor: #ffd01e"></div>
  <div style="height: 200px; backgroundcolor: #ffd01e"></div>
  <div style="height: 200px; backgroundcolor: #ffd01e"></div>
  <div style="height: 200px; backgroundcolor: #ffd01e"></div>
</template>

<script setup>
import { reactive, toRefs } from 'vue';
import logoUrl from 'assets/logo.png';
import SoDropdownMenu from 'packages/DropdownMenu/SoDropdownMenu.vue';
import SoDropdownItem from 'packages/DropdownItem/SoDropdownItem.vue';

defineProps({
  msg: String
});

const state = reactive({
  count: 0,
  showItem: true,
  itemName: '全部商品'
});
</script>

<style lang="scss" scoped>
h1 {
  color: $textColor;
}
</style>
