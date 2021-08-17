<template>
  <so-popup role="dialog" class="so-dialog"> 111 </so-popup>
</template>

<script setup>
import SoPopup from '../Popup';

defineProps({
  show: Boolean,
  title: String,
  width: String,
  message: [String, Element],
  showConfirmButton: { type: Boolean, default: true },
  showCancelButton: { type: Boolean, default: true },
  confirmButtonText: { type: String, default: '确认' },
  cancelButtonText: { type: String, default: '取消' },
  overlay: { type: String, default: true },
  overlayClass: { type: String, default: true }

});
</script>
