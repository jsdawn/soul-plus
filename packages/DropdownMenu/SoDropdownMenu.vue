<template>
  <div class="so-dropdown-menu">
    <div class="so-dropdown-menu__bar">
      <div role="button" tabindex="0" class="so-dropdown-menu__item">
        <span class="so-dropdown-menu__title">对对对</span>
      </div>
    </div>

    <div
      class="so-overlay"
      style="animation-duration: 0.2s;top:200px"
    ></div>

    <div class="so-dropdown-item">
      <div class="so-dropdown-item__content">
        <div>选项一</div>
        <div>选项二</div>
      </div>
    </div>

    <div class="so-dropdown-item">
      <div class="so-dropdown-item__content">
        <div>选项一</div>
        <div>选项二</div>
      </div>
    </div>
  </div>
</template>

<script setup>
// https://vant-contrib.gitee.io/vant/v3/#/zh-CN/dropdown-menu#jie-shao
// https://github.com/youzan/vant/blob/dev/src/dropdown-menu/DropdownMenu.tsx
</script>

<style lang="scss" scoped>
.so-dropdown-menu {
  user-select: none;

  &__bar {
    position: relative;
    display: flex;
    height: 50px;
    background-color: #fff;
    box-shadow: 0 2px 12px rgba(100, 101, 102, 0.12);

    &--opened {
      z-index: 10;
    }
  }

  &__item {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    min-width: 0; // hack for flex ellipsis
    cursor: pointer;

    &:active {
      opacity: 0.7;
    }

    &--disabled {
      &:active {
        opacity: 1;
      }

      .van-dropdown-menu__title {
        color: red;
      }
    }
  }

  &__title {
    position: relative;
    box-sizing: border-box;
    max-width: 100%;
    padding: 8px;
    color: #333;
    font-size: 14px;
    line-height: 22px;

    &::after {
      position: absolute;
      top: 50%;
      right: -4px;
      margin-top: -5px;
      border: 3px solid;
      border-color: transparent transparent #dcdee0 #dcdee0;
      transform: rotate(-45deg);
      opacity: 0.8;
      content: '';
    }

    &--active {
      color: red;

      &::after {
        border-color: transparent transparent currentColor currentColor;
      }
    }

    &--down {
      &::after {
        margin-top: -1px;
        transform: rotate(135deg);
      }
    }
  }
}

.so-overlay {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}
</style>
