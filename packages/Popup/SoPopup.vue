<template>
  <teleport :to="teleport ? teleport : 'body'" :disabled="!props.teleport">
    <so-overlay
      :class-name="overlayClass"
      v-if="overlay"
      :show="props.show"
      :z-index="props.zIndex"
      @click="clickOverlay"
    >
      <slot name="overlay"></slot>
    </so-overlay>

    <transition
      :name="transitionName"
      appear
      @after-enter="onOpened"
      @after-leave="onClosed"
    >
      <div
        ref="popupRef"
        :class="['so-popup', classes]"
        v-bind="attrs"
        v-if="initRender"
        v-show="props.show"
        :style="{ zIndex: props.zIndex }"
        @click="onClick"
      ></div>
    </transition>
  </teleport>
</template>

<script>
export default {
  inheritAttrs: false
};
</script>

<script setup>
import { ref, useAttrs, computed, watch, onMounted } from 'vue';
// utils
import { useTruthy, useLockScroll } from '../hooks';
import { callInterceptor } from '../hooks/callInterceptor';
// components
import SoOverlay from '../Overlay';

const props = defineProps({
  show: Boolean, // v-model
  overlay: { type: Boolean, default: true },
  overlayClass: String,
  closeOnClickOverlay: { type: Boolean, default: true },
  teleport: [String, Element],
  position: { type: String, default: 'center' }, // top bottom right left
  transition: String,
  zIndex: [Number, String],
  lockScroll: { type: Boolean, default: true },
  beforeClose: Function
});

const emit = defineEmits([
  'update:show',
  'click',
  'click-overlay',
  'open',
  'opened',
  'close',
  'closed'
]);

const popupRef = ref();

const attrs = useAttrs();
const initRender = useTruthy(() => props.show);

const classes = computed(() => {
  return {
    [`so-popup--${props.position}`]: props.position
  };
});

const transitionName = computed(() => {
  let slideName =
    props.position === 'center'
      ? 'so-popup-swing-top'
      : `so-popup-slide-${props.position}`;
  return props.transition || slideName;
});

// 开启
const open = () => {
  emit('open');
};

// 关闭
const triggerClose = () => {
  if (props.show) {
    emit('close');
    emit('update:show', false);
  }
};

const close = () => {
  callInterceptor({
    interceptor: props.beforeClose,
    done: triggerClose
  });
};

const clickOverlay = () => {
  emit('click-overlay');
  if (props.closeOnClickOverlay) {
    close();
  }
};

const onClick = event => emit('click', event);
const onOpened = () => emit('opened');
const onClosed = () => emit('closed');

watch(
  () => props.show,
  value => {
    value ? open() : close();
  }
);

onMounted(() => {
  if (props.show) {
    open();
  }
});

useLockScroll(popupRef, () => props.show && props.lockScroll);

defineExpose({ popupRef });
</script>

<style lang="scss" scoped>
@import '../style/var';
@import '../style/mixins';

.so-popup {
  position: fixed;
  z-index: $z-index-md;
  max-height: 100%;
  overflow-y: auto;
  background-color: #fff;
  transition: transform 0.3s;
  @include safe-area-inset-bottom();

  &--center {
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0) rotateX(0deg);
  }

  &--top {
    top: 0;
    left: 0;
    width: 100%;
  }

  &--right {
    top: 50%;
    right: 0;
    transform: translate3d(0, -50%, 0);
  }

  &--bottom {
    bottom: 0;
    left: 0;
    width: 100%;
  }

  &--left {
    top: 50%;
    left: 0;
    transform: translate3d(0, -50%, 0);
  }

  // animation

  &-slide-top-enter-active,
  &-slide-left-enter-active,
  &-slide-right-enter-active,
  &-slide-bottom-enter-active {
    transition-timing-function: $animation-timing-function-enter;
  }

  &-slide-top-leave-active,
  &-slide-left-leave-active,
  &-slide-right-leave-active,
  &-slide-bottom-leave-active {
    transition-timing-function: $animation-timing-function-leave;
  }

  &-slide-top-enter-from,
  &-slide-top-leave-active {
    transform: translate3d(0, -100%, 0);
  }

  &-slide-right-enter-from,
  &-slide-right-leave-active {
    transform: translate3d(100%, -50%, 0);
  }

  &-slide-bottom-enter-from,
  &-slide-bottom-leave-active {
    transform: translate3d(0, 100%, 0);
  }

  &-slide-left-enter-from,
  &-slide-left-leave-active {
    transform: translate3d(-100%, -50%, 0);
  }

  @keyframes swing-top-in {
    0% {
      transform: translate3d(-50%, -50%, 0) rotateX(-100deg);
      transform-origin: top;
      opacity: 0;
    }
    100% {
      transform: translate3d(-50%, -50%, 0) rotateX(0deg);
      transform-origin: top;
      opacity: 1;
    }
  }

  @keyframes swing-top-out {
    0% {
      transform: translate3d(-50%, -50%, 0) rotateX(0deg);
      transform-origin: top;
      opacity: 1;
    }
    100% {
      transform: translate3d(-50%, -50%, 0) rotateX(-100deg);
      transform-origin: top;
      opacity: 0;
    }
  }

  &-swing-top {
    &-enter-active {
      animation: swing-top-in $animation-duration-base both
        cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    &-leave-active {
      animation: swing-top-out $animation-duration-base both
        cubic-bezier(0.6, -0.28, 0.735, 0.045);
    }
  }
}
</style>

<style lang="scss">
.so-overflow-hidden {
  overflow: hidden !important;
}
</style>
