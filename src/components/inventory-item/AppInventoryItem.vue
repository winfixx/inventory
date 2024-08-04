<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
  width: string
  height: string
  color: string
}>()
</script>
<script lang="ts"></script>

<template>
  <div :style="{ width, height, background: color }" class="item">
    <div :style="{ width, height, background: color }" class="ghost"></div>
  </div>
</template>

<style scoped lang="scss">
.item {
  position: relative;

  .ghost {
    position: absolute;
    bottom: 10px;
    left: 10px;
    opacity: 35%;
  }
}
</style>
