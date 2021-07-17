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
        v-for="(item, index) in panes"
        :key="index"
        @click="toggleItem(index)"
      >
        <span
          :class="[
            'so-dropdown-menu__title',
            {
              'so-dropdown-menu__title--active':
                index === activeIdx && state.opened
            }
          ]"
        >
          <div>{{ item.props?.title }}</div></span
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
        <div
          class="so-dropdown-menu__overlay"
          v-show="state.opened"
          @click="clickOverlay"
        ></div>
      </transition>

      <transition name="so-slide-down" :onAfterLeave="onClosed">
        <div
          class="so-dropdown-menu__content"
          v-show="state.opened"
          :style="{ height: state.wrapHeight }"
        >
          <slot></slot>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, provide, computed, useSlots } from 'vue';
import {
  useRect,
  useEventListener,
  useScrollParent,
  onMountedOrActivated
} from '../hooks';

const emit = defineEmits(['closed']);

const slots = useSlots();

const state = reactive({
  offset: 0,
  opened: false,
  showWrapper: false,
  wrapHeight: 'auto'
});

const activeIdx = ref(-1); // 激活的 index
const panes = ref([]); // 存放 items 实例
const rootRef = ref();
const barRef = ref();
const scrollParent = useScrollParent(rootRef);

const paneSlots = computed(() => {
  let ps = slots.default?.() || [];
  return ps.filter(v => v.type?.name === 'SoDropdownItem');
});

const activeUid = computed(() => panes.value[activeIdx.value]?.uid);

// 提供 current active uid
provide('rootActive', activeUid);
// 提供 pane 实例入栈 fun
provide('updatePaneState', pane => {
  let findPane = panes.value.find(v => v.uid === pane.uid);
  if (findPane) {
    panes.value = panes.value.filter(v => v.uid !== findPane.uid);
  } else {
    panes.value.push(pane);
  }

  if (paneSlots.value.length === 0) {
    console.warn('Warn--SoDropdownMenu: lose default slots');
    return;
  }

  // 排序 -- paneSlots
  let newPanes = [];
  for (let v of paneSlots.value) {
    let vPane = panes.value.find(p => p.props.title === v.props.title);
    if (vPane) newPanes.push(vPane);
  }
  panes.value = newPanes;

  if (activeIdx.value > panes.value.length - 1) {
    activeIdx.value = 0;
  }
});
// 提供 wrap heigth-px fun
provide('updateWrapHeight', heigth => {
  state.wrapHeight = heigth || 'auto';
});

const updateOffset = () => {
  if (!barRef.value) return;
  const rect = useRect(barRef);
  state.offset = rect.bottom;
};

const onScroll = () => {
  updateOffset();
};

const toggleItem = idx => {
  if (idx === activeIdx.value) {
    state.opened = !state.opened;
  } else {
    state.opened = true;
  }
  activeIdx.value = idx;

  if (state.opened) {
    state.showWrapper = true;
  }
};

const clickOverlay = () => {
  state.opened = false;
};

// content 离开动画结束触发 onAfterLeave 隐藏 container
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
@import '../style/mixins';
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
        color: $danger-color;
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

    div {
      max-width: 100%;
      @include ellipsis;
    }

    &::after {
      position: absolute;
      top: 50%;
      right: -4px;
      margin-top: -5px;
      border: 3px solid;
      border-color: transparent transparent $gray-4 $gray-4;
      transform: rotate(-45deg);
      opacity: 0.8;
      content: '';
    }

    &--active {
      color: $danger-color;

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
    transition: height 0.2s ease-out;
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
