<template>
  <div class="page-index">
    <h3 class="comp-title">基础组件</h3>
    <div class="components">
      <router-link v-for="item in baseComps" :key="item.name" :to="item.path">
        <span>{{ item.name }}</span> <i>&gt;</i>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const baseComps = ref([
  { name: 'Button 按钮', path: '/button' },
  { name: 'DropdownMenu 下拉菜单', path: '/dropdown-menu' },
  { name: 'Overlay 遮罩层', path: '/overlay' },
  { name: 'Popup 弹出层', path: '/popup' },
  { name: 'Toast 轻提示', path: '/toast' },
  { name: 'Icon 图标', path: '/icon' }
]);
</script>

<style lang="scss" scoped>
.page-index {
  background-color: #fff;
}
.components {
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  a {
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
    margin-bottom: 10px;
    line-height: 40px;
    border-radius: 20px;
    color: $text-link-color;
    background-color: $background-color;
    i {
      color: $gray-6;
    }
    &:active {
      background-color: $active-color;
    }
  }
}
</style>
