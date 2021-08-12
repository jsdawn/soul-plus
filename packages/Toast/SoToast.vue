<template>
  <so-popup
    :class="{
      'so-toast': true,
      [`so-toast--${props.position}`]: props.position
    }"
    v-model:show="show"
    :disabled-teleport="true"
    :overlay="props.overlay || props.forbidClick"
    :overlay-class="overlayClasses"
    :close-on-click-overlay="props.closeOnClickOverlay"
    :transition="transitionName"
    :lock-scroll="props.lockScroll"
    @closed="onClosed"
  >
    <div
      v-if="props.type === 'html'"
      class="so-toast__text"
      v-html="props.message"
    ></div>
    <div v-else class="so-toast__text">{{ props.message }}</div>
  </so-popup>
</template>

<script setup>
import { computed, watch, onUnmounted, ref } from 'vue';
import SoPopup from '../Popup';

const props = defineProps({
  type: { type: String, default: 'text' },
  position: { type: String, default: 'bottom' }, // middle bottom
  message: String,
  duration: { type: Number, default: 2000 }, // 0则不关闭
  transition: String,
  overlay: { type: Boolean, default: false },
  overlayClass: String,
  forbidClick: Boolean, // 静止点击背景
  closeOnClickOverlay: { type: Boolean, default: false },
  lockScroll: { type: Boolean, default: false }
});

const emit = defineEmits(['closed']);

const show = ref(true);
let timer;

const overlayClasses = computed(() => {
  let forbidClass = props.forbidClick ? 'so-toast--unclickable' : '';
  return props.overlayClass || forbidClass;
});

const transitionName = computed(() => {
  let name = props.position === 'bottom' ? 'so-toast-slide-up' : 'so-fade';
  return props.transition || name;
});

const clearTimer = () => {
  if (timer) clearTimeout(timer);
};

const onClosed = () => {
  emit('closed');
  clearTimer();
};

const close = () => (show.value = false);

watch(
  () => [show, props.type, props.message, props.duration],
  () => {
    clearTimer();
    if (show && props.duration > 0) {
      timer = setTimeout(close, props.duration);
    }
  },
  { immediate: true }
);

onUnmounted(() => {
  clearTimer();
});

defineExpose({ close });
</script>
