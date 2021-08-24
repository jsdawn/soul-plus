<template>
  <so-cell
    class="so-field"
    :title-class="['so-field__label', labelClass]"
    value-class="so-field__value"
    :title="props.label"
    :title-style="{ width: props.labelWidth }"
  >
    <template #icon>
      <slot name="left-icon">
        <SoIcon
          class="so-field__left-icon"
          v-if="props.leftIcon"
          :classPrefix="props.iconPrefix"
          :name="props.leftIcon"
        />
      </slot>
    </template>

    <template #title>
      <slot name="label"></slot>
    </template>

    <div class="so-field__body">
      <input
        class="so-field__control"
        type="text"
        :placeholder="props.placeholder"
      />

      <slot name="right-icon">
        <SoIcon
          class="so-field__right-icon"
          v-if="props.rightIcon"
          :classPrefix="props.iconPrefix"
          :name="props.rightIcon"
        />
      </slot>
    </div>
  </so-cell>
</template>

<script setup>
import { computed } from 'vue';
import { pick } from '../hooks';
import { cellSharedProps } from '../Cell/shared';

import SoIcon from '../Icon';
import SoCell from '../Cell';

const props = defineProps({
  ...cellSharedProps,

  modelValue: [Number, String],
  name: String,
  type: String, // tel digit number textarea password
  maxlength: [Number, String],
  placeholder: String,
  disabled: Boolean,
  readonly: Boolean,
  required: Boolean,
  clearable: Boolean,
  autofocus: Boolean,
  errorMessage: String,
  formatter: Function,
  labelClass: [String, Array, Object],
  labelWidth: String,
  labelAlign: String, // left center right
  leftIcon: String
});
</script>
