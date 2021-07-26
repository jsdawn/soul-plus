<template>
  <div class="page-index">
    <h3 class="comp-title">基础组件</h3>
    <div class="components">
      <router-link to="/button"> <span>Button 按钮</span> <i>&gt;</i> </router-link>

      <router-link to="/dropdown-menu">
        <span>DropdownMenu 下拉菜单</span> <i>&gt;</i>
      </router-link>
    </div>
  </div>
</template>

<script setup></script>

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
