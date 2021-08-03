<template>
  <transition name="so-fade">
    <div class="so-overlay" v-if="initRender" v-show="props.show">
      <slot></slot>
    </div>
  </transition>
</template>

<script setup>
import { useTruthy } from '../hooks';

const props = defineProps({
  show: Boolean,
  zIndex: [Number, String]
});

const initRender = useTruthy(() => props.show);
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
