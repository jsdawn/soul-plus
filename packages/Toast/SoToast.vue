<template>
  <so-popup
    class="so-toast"
    v-model:show="props.show"
    :overlay="props.overlay || props.forbidClick"
    :overlay-class="overlayClasses"
    :close-on-click-overlay="props.closeOnClickOverlay"
    :transition="props.transition || 'so-fade'"
    :lock-scroll="props.lockScroll"
    @closed="onClosed"
    @[`update:show`]="updateShow"
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
import { computed, watch, onUnmounted } from 'vue';
import SoPopup from '../Popup';

const props = defineProps({
  show: Boolean, // v-model
  type: { type: String, default: 'text' },
  message: String,
  duration: { type: Number, default: 2000 },
  transition: String,
  overlay: { type: Boolean, default: false },
  overlayClass: String,
  forbidClick: Boolean, // 静止点击背景
  closeOnClickOverlay: { type: Boolean, default: false },
  lockScroll: { type: Boolean, default: false }
});

const emit = defineEmits(['update:show', 'closed']);

let timer;

const overlayClasses = computed(() => {
  let forbidClass = props.forbidClick ? 'so-toast--unclickable' : '';
  return props.overlayClass || forbidClass;
});

const updateShow = show => emit('update:show', show);

const clearTimer = () => {
  if (timer) clearTimeout(timer);
};

const onClosed = () => {
  emit('closed');
  clearTimer();
};

watch(
  () => [props.show, props.type, props.message, props.duration],
  () => {
    clearTimer();
    if (props.show && props.duration > 0) {
      timer = setTimeout(() => {
        updateShow(false);
      }, props.duration);
    }
  }
);

onUnmounted(() => {
  clearTimer();
});
</script>
