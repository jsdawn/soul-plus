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
      >
        <slot></slot>
      </div>
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
  emit('close');
  emit('update:show', false);
};

const close = () => {
  if (props.show) {
    callInterceptor({
      interceptor: props.beforeClose,
      done: triggerClose
    });
  }
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
