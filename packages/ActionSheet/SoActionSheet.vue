<template>
  <so-popup
    role="action-sheet"
    :class="['so-action-sheet', props.className]"
    v-bind="popupProps"
    :position="props.position"
    @update:show="updateShow"
    :style="{ width: props.width }"
  >
    <div class="so-action-sheet__title" v-if="props.title">
      {{ props.title }}
    </div>

    <div class="so-action-sheet__description" v-if="props.description">
      {{ props.description }}
    </div>

    <div class="so-action-sheet__content">
      <div
        role="button"
        class="so-action-sheet__item"
        v-for="(item, index) in actions"
      >
        {{ item.name }}
      </div>
    </div>

    <template v-if="props.cancelText">
      <div class="so-action-sheet__separate"></div>
      <div class="so-action-sheet__cancel">{{ props.cancelText }}</div>
    </template>
  </so-popup>
</template>

<script setup>
import { computed } from 'vue';

import { pick } from '../utils';
import { popupSharedProps, popupSharedPropKeys } from '../Popup/shared';

import SoPopup from '../Popup';

const props = defineProps({
  ...popupSharedProps,

  position: { type: String, default: 'bottom' },
  title: String,
  description: String,
  actions: Array,
  width: String,
  className: String,
  cancelText: String
});

const emit = defineEmits(['update:show', 'cancel']);

const popupProps = computed(() => {
  return pick(props, popupSharedPropKeys);
});

const updateShow = value => emit('update:show', value);
</script>
