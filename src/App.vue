<template>
  <router-link to="/">
    <section class="ui-face">
      <h1>SoulUI</h1>
      <p class="secondary">Mobile UI Components built on Vue3 and Vite</p>
    </section>
  </router-link>
  <router-view></router-view>
</template>

<script setup>
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
</script>

<style lang="scss" scoped>
.ui-face {
  padding: 40px 20px;
  color: $text-color;
  h1 {
    font-size: $font-size-xl;
    font-weight: normal;
  }
  &:hover {
    color: $text-link-color;
  }
}
</style>
