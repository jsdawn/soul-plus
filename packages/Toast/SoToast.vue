<template>
  <so-popup>
    <div class="so-toast__text">{{ props.message }}</div>
  </so-popup>
</template>

<script setup>
import SoPopup from '../Popup';

const props = defineProps({
  message: String
});
</script>
