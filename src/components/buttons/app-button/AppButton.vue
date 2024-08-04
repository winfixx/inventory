<script setup lang="ts"></script>
<script lang="ts">
export default {
  props: {
    width: {
      default: '100%',
      required: false,
      type: String
    },
    height: String,
    fontColor: {
      type: String,
      default: 'var(--app-button-color)',
      required: false
    },
    background: {
      type: String,
      default: 'var(--app-button-background-color)',
      required: false
    },
    text: String
  }
}
</script>

<template>
  <button
    class="button"
    :style="{
      width,
      height,
      background,
      color: fontColor,
      boxShadow: `0px 0px 12px ${background}`
    }"
  >
    {{ text }}
  </button>
</template>

<style scoped lang="scss">
.button {
  cursor: pointer;
  padding: 8px 10px 8px 10px;
  border: none;
  border-radius: var(--base-button-border-radius);
}
</style>
