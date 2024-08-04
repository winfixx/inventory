<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
  top: string
  right: string
}>()
</script>
<script lang="ts"></script>

<template>
  <div class="button-close" :style="{ top, right }">&#10006;</div>
</template>

<style scoped lang="scss">
.button-close {
  position: absolute;
  cursor: pointer;
}
</style>
