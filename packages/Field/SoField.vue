<template>
  <div
    class="so-field"
    :class="{
      'so-field--center': props.center,
      'so-field--clickable': props.clickable
    }"
    @click="onClick"
  >
    <slot name="left-icon">
      <SoIcon
        class="so-field__left-icon"
        v-if="props.leftIcon"
        :classPrefix="props.iconPrefix"
        :name="props.leftIcon"
        :size="props.iconSize || '16px'"
      />
    </slot>

    <div
      class="so-field__label"
      :class="props.labelClass"
      :style="{ width: props.labelWidth, textAlign: props.labelAlign }"
    >
      <slot name="label">
        {{ props.label }}
      </slot>
    </div>

    <div class="so-field__body">
      <slot>
        <input
          class="so-field__control"
          v-bind="inputAttrs"
          :type="props.type || 'text'"
        />
      </slot>
    </div>

    <slot name="right-icon">
      <SoIcon
        class="so-field__right-icon"
        v-if="props.rightIcon"
        :classPrefix="props.iconPrefix"
        :name="props.rightIcon"
        :size="props.iconSize || '16px'"
      />
    </slot>
  </div>
</template>

<script>
export default {
  inheritAttrs: false
};
</script>

<script setup>
import { ref, useAttrs, computed } from 'vue';
import SoIcon from '../Icon';

const props = defineProps({
  modelValue: [Number, String],
  label: String,
  name: String,
  type: String, // tel digit number textarea password
  placeholder: String,
  autocomplete: String,
  disabled: Boolean,
  readonly: Boolean,
  maxlength: [Number, String],
  rows: [Number, String],

  required: Boolean,
  clearable: Boolean,
  autofocus: Boolean,
  errorMessage: String,
  formatter: Function,
  center: Boolean,
  clickable: Boolean,
  rules: Array,

  labelClass: [String, Array, Object],
  labelWidth: String,
  labelAlign: String, // left center right

  iconPrefix: String,
  iconSize: String,
  leftIcon: String,
  rightIcon: String
});

const emit = defineEmits(['update:modelValue', 'blur', 'focus']);

const attrs = useAttrs();

const inputRef = ref();

const updateValue = value => {
  if (value !== props.modelValue) {
    emit('update:modelValue', value);
  }
};

const onBlur = event => {
  emit('blur', event);
};

const onFocus = event => {
  emit('focus', event);
};

const onInput = event => {
  updateValue(event.target?.value);
};

const onClickInput = event => {};

const onKeypress = event => {};

const startComposing = event => {};

const endComposing = event => {};

const inputAttrs = computed(() => {
  return {
    ...attrs,
    ref: inputRef,
    name: props.name,
    rows: props.rows,
    value: props.modelValue,
    disabled: props.disabled,
    readonly: props.readonly,
    maxlength: props.maxlength,
    autofocus: props.autofocus,
    placeholder: props.placeholder,
    autocomplete: props.autocomplete,
    onBlur,
    onFocus,
    onInput,
    onClick: onClickInput,
    onChange: endComposing,
    onKeypress,
    onCompositionend: endComposing,
    onCompositionstart: startComposing
  };
});

const onClick = event => emit('click', event);
</script>
