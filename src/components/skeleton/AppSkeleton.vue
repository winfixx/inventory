<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
  width: string
  height: string
}>()
</script>
<script lang="ts"></script>

<template>
  <div class="skeleton" :style="{width, height}"></div>
</template>

<style scoped lang="scss">
.skeleton {
  border-radius: var(--base-border-radius);
  background: linear-gradient(to right, var(--skeleton-background));
}
</style>
