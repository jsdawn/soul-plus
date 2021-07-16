<template>
  <transition name="slide-item">
    <div class="so-dropdown-item" v-show="active">
      <p>这里是 {{ props.title }}</p>
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'SoDropdownItem'
};
</script>

<script setup>
import { computed, inject, getCurrentInstance, reactive, watch } from 'vue';

const props = defineProps({
  title: String,
  disabled: Boolean,
  titleClass: String
});

const rootActive = inject('rootActive');
const updatePaneState = inject('updatePaneState');
const instance = getCurrentInstance();

const active = computed(() => {
  console.log(active);
  return rootActive.value === instance.uid;
});

watch(
  () => rootActive,
  val => {
    console.log(val);
  }
);

updatePaneState({
  uid: instance.uid,
  instance,
  props
});
</script>

<style lang="scss" scoped>
@import '../style/var';
@import '../style/animation.scss';

@keyframes slide-item-enter {
  from {
    opacity: 0.5;
    transform: translate3d(0, 20%, 0);
  }
}

.slide-item {
  &-enter-active {
    animation: slide-item-enter $animation-duration-base both
      $animation-timing-function-enter;
  }
}
</style>
