<template>
  <i
    :class="{
      'so-icon': true,
      [`so-icon-${props.name}`]: props.name
    }"
    :style="{
      color: props.color,
      fontSize: props.size
    }"
  ></i>
</template>

<script setup>
const props = defineProps({
  name: String,
  color: String,
  size: String
});
</script>
