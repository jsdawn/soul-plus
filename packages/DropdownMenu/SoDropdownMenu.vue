<template>
  <div ref="rootRef" class="so-dropdown-menu">
    <div
      ref="barRef"
      :class="[
        'so-dropdown-menu__bar',
        { 'so-dropdown-menu__bar--opened': state.opened }
      ]"
    >
      <div
        role="button"
        tabindex="0"
        class="so-dropdown-menu__item"
        v-for="(item, index) in state.items"
        :key="index"
        @click="toggleItem(index)"
      >
        <span
          :class="[
            'so-dropdown-menu__title',
            { 'so-dropdown-menu__title--active': index === state.active }
          ]"
          >{{ item.title }}</span
        >
      </div>
    </div>

    <div
      class="so-dropdown-menu__container"
      :style="{
        top: state.offset + 'px',
        display: state.showWrapper ? '' : 'none'
      }"
    >
      <transition name="so-fade">
        <div class="so-dropdown-menu__overlay" v-show="state.opened"></div>
      </transition>

      <transition name="so-slide-down" :onAfterLeave="onClosed">
        <div class="so-dropdown-menu__content" v-show="state.opened">
          <div
            class="so-dropdown-item"
            v-for="(item, index) in state.items"
            :key="index"
            v-show="index === state.active"
          >
            <div>这里是内容</div>
            <div>以下遍历选项</div>
            <div v-for="n in index + 1" :key="n">{{ item.title + n }}</div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
// https://vant-contrib.gitee.io/vant/v3/#/zh-CN/dropdown-menu#jie-shao
// https://github.com/youzan/vant/blob/dev/src/dropdown-menu/DropdownMenu.tsx
import { ref, reactive } from 'vue';
import {
  useRect,
  useEventListener,
  useScrollParent,
  onMountedOrActivated
} from '../hooks';

const emit = defineEmits(['closed']);

const state = reactive({
  offset: 0,
  opened: false,
  showWrapper: false,
  items: [{ title: '全部商品' }, { title: '排序' }],
  active: -1
});

const rootRef = ref();
const barRef = ref();
const scrollParent = useScrollParent(rootRef);

const updateOffset = () => {
  if (!barRef.value) return;
  const rect = useRect(barRef);
  state.offset = rect.bottom;
};

const onScroll = () => {
  updateOffset();
};

const toggleItem = idx => {
  if (idx === state.active) {
    state.opened = !state.opened;
  } else {
    state.opened = true;
  }

  state.active = idx;
  if (state.opened) {
    state.showWrapper = true;
  }
};

const onClosed = () => {
  state.showWrapper = false;
  emit('closed');
};

onMountedOrActivated(() => {
  updateOffset();
});

useEventListener('scroll', onScroll, { target: scrollParent });
</script>

<style lang="scss" scoped>
@import '../style/var';
@import '../style/animation.scss';

.so-dropdown-menu {
  user-select: none;

  &__bar {
    position: relative;
    display: flex;
    height: 50px;
    background-color: #fff;
    box-shadow: 0 2px 12px rgba(100, 101, 102, 0.12);

    &--opened {
      z-index: $z-index-md + 1;
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
        margin-top: -1px;
        border-color: transparent transparent currentColor currentColor;
        transform: rotate(135deg);
      }
    }

    &--down {
      &::after {
        margin-top: -1px;
        transform: rotate(135deg);
      }
    }
  }

  &__container {
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: $z-index-md;
    overflow: hidden;
  }

  &__content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    max-height: 80%;
    overflow: hidden;
    background-color: #fff;
  }

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }
}
</style>
