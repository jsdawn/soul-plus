<template>
  <button
    class="so-button"
    :class="classes"
    type="button"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <span v-if="loading" class="so-button__indicator"></span>
    <span class="so-button__text"><slot /></span>
  </button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  loading: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  type: String, // primary success warning danger
  size: String, // large small mini
  plain: { type: Boolean, default: false },
  round: { type: Boolean, default: false },
  block: { type: Boolean, default: false }
});

const emit = defineEmits(['click']);

const classes = computed(() => {
  return {
    [`so-button--${props.type}`]: props.type,
    [`so-button--${props.size}`]: props.size,
    [`so-button--plain`]: props.plain,
    [`so-button--round`]: props.round,
    [`so-button--block`]: props.block,
    [`so-button--loading`]: props.loading
  };
});

const handleClick = event => {
  if (props.disabled || props.loading) return;
  emit('click', event);
};
</script>

<style lang="scss" scoped>
@import '../style/var';

.so-button {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  height: 40px;
  padding: 0 20px;
  border: 1px solid $border-color;
  border-radius: $border-radius-md;
  background-color: transparent;
  cursor: pointer;
  transition: background-color, border-color 0.2s;
  -webkit-tap-highlight-color: transparent;
  -webkit-appearance: none;
  outline: none;
  user-select: none;
  & + & {
    margin-left: 10px;
  }

  .so-button__indicator {
    display: inline-block;
    width: 13px;
    height: 13px;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $text-color $text-color $text-color transparent;
    border-style: solid;
    border-width: 1px;
    animation: loading-spin 1s infinite linear;
  }

  &:active {
    font-weight: $font-weight-bold;
    background-color: $background-color;
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: $disabled-opacity;
    pointer-events: none;
  }

  &--round {
    border-radius: 25px;
  }

  &--block {
    display: flex;
    width: 100%;
    .so-button + & {
      margin-left: 0;
      margin-top: 10px;
    }
  }

  &--loading {
    padding-left: 12px;
    padding-right: 12px;
  }

  // type
  @mixin type-styl($type-color) {
    border-color: $type-color;
    color: $white;
    background: $type-color;
    &:active {
      border-color: darken($type-color, 10%);
      background: darken($type-color, 10%);
    }
    > .so-button__indicator {
      border-color: $white $white $white transparent;
    }
  }

  &--primary {
    @include type-styl($primary-color);
  }
  &--success {
    @include type-styl($success-color);
  }
  &--warning {
    @include type-styl($warning-color);
  }
  &--danger {
    @include type-styl($danger-color);
  }

  // plain
  &--plain {
    border-color: $text-color;
    color: $text-color;
    background-color: transparent;
    &:active {
      background-color: $background-color;
    }

    @mixin plain-styl($type-color) {
      border-color: $type-color;
      color: $type-color;
      > .so-button__indicator {
        border-color: $type-color $type-color $type-color transparent;
      }
    }

    &.so-button--primary {
      @include plain-styl($primary-color);
    }
    &.so-button--success {
      @include plain-styl($success-color);
    }
    &.so-button--warning {
      @include plain-styl($warning-color);
    }
    &.so-button--danger {
      @include plain-styl($danger-color);
    }
  }

  // size
  &--mini {
    height: 25px;
    padding-left: 5px;
    padding-right: 5px;
    font-size: 12px;
    border-radius: $border-radius-sm;
    > .so-button__indicator {
      width: 10px;
      height: 10px;
      margin-right: 2px;
    }
    &.so-button--loading {
      padding-left: 2px;
      padding-right: 2px;
    }
  }

  &--small {
    height: 30px;
    padding-left: 15px;
    padding-right: 15px;
    &.so-button--loading {
      padding-left: 7px;
      padding-right: 7px;
    }
  }

  &--large {
    height: 45px;
    font-size: $font-size-lg;
  }
}

// keyframes
@keyframes loading-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
