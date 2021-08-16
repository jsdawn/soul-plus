<template>
  <transition name="so-fade" appear>
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
