<template>
  <transition name="so-fade">
    <div
      ref="overlayRef"
      :class="['so-overlay', className]"
      v-if="initRender"
      v-show="props.show"
      :style="{ zIndex: props.zIndex }"
    >
      <slot></slot>
    </div>
  </transition>
</template>

<script setup>
import { ref } from 'vue';
import { useTruthy, useLockScroll } from '../hooks';

const props = defineProps({
  show: Boolean,
  zIndex: [Number, String],
  className: String,
  lockScroll: Boolean
});

const overlayRef = ref();
const initRender = useTruthy(() => props.show);

useLockScroll(overlayRef, () => props.show && props.lockScroll);
</script>

<style lang="scss" scoped>
@import '../style/var';
@import '../style/animation.scss';

.so-overlay {
  position: fixed;
  top: 0;
  left: 0;
  z-index: $z-index-md;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}
</style>
