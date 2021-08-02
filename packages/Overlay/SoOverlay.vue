<template>
  <div class="so-overlay" v-if="initRender" v-show="props.show">
    <slot></slot>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useTruthy } from '../hooks';

const props = defineProps({
  show: Boolean,
  zIndex: [Number, String]
});

const initRender = useTruthy(() => props.show);
</script>

<style lang="scss" scoped>
.so-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}
</style>
