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

        <SoIcon
          class="so-field__clear"
          v-if="showClear"
          name="clear"
          :size="props.iconSize || '16px'"
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
import { ref, useAttrs, computed, reactive } from 'vue';
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

const emit = defineEmits([
  'update:modelValue',
  'click',
  'blur',
  'focus',
  'keypress',
  'click-input'
]);

const attrs = useAttrs();

const inputRef = ref();

const state = reactive({
  focused: false,
  validateFailed: false,
  validateMessage: ''
});

const getModelValue = () => String(props.modelValue ?? '');

const showClear = computed(() => {
  return (
    props.clearable &&
    !props.readonly &&
    state.focused &&
    getModelValue() !== ''
  );
});

const updateValue = value => {
  if (value !== props.modelValue) {
    emit('update:modelValue', value);
  }
};

const onBlur = event => {
  state.focused = false;
  emit('blur', event);
};

const onFocus = event => {
  state.focused = true;
  emit('focus', event);
};

const onInput = event => {
  if (!event.target?.composing) {
    updateValue(event.target?.value);
  }
};

const onClickInput = event => emit('click-input', event);

const onKeypress = event => emit('keypress', event);

const startComposing = event => {
  if (event.target) event.target.composing = true;
};

const endComposing = event => {
  if (event.target?.composing) {
    event.target.composing = false;
  }
};

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
    onCompositionstart: startComposing,
    onCompositionend: endComposing
  };
});

const onClick = event => emit('click', event);
</script>
