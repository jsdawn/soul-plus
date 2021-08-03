<template>
  <teleport :to="teleport ? teleport : 'body'" :disabled="!props.teleport">
    <so-overlay :show="props.show">
      <slot name="overlay"></slot>
    </so-overlay>

    <transition :name="transitionName" appear>
      <div
        :class="['so-popup', classes]"
        v-bind="attrs"
        v-if="initRender"
        v-show="props.show"
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
import { useAttrs, computed } from 'vue';
// utils
import { useTruthy } from '../hooks';
// components
import SoOverlay from '../Overlay';

const props = defineProps({
  show: Boolean,
  teleport: [String, Element],
  position: { type: String, default: 'center' }, // top bottom right left
  transition: String
});

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
      ? 'so-fade'
      : `so-popup-slide-${props.position}`;
  return props.transition || slideName;
});

console.log(attrs);
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
    transform: translate3d(-50%, -50%, 0);
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
}
</style>
