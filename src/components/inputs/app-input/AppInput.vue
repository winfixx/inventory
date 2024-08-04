<script setup lang="ts">
import { defineModel, defineProps, InputTypeHTMLAttribute } from 'vue'

defineProps<{
  placeholder: string
  type: InputTypeHTMLAttribute
  width: string
  height: string
}>()
const text = defineModel('text')
</script>
<script lang="ts"></script>

<template>
  <input
    v-model="text"
    :placeholder="placeholder"
    :style="{ width, height }"
    class="input"
    :type="type"
  />
</template>

<style scoped lang="scss">
.input {
  padding: 5px;
  border: var(--border-item);
  border-radius: var(--base-input-border-radius);
  background-color: var(--app-input-background-color);
}
</style>
