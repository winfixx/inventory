<script setup lang="ts">
import AppSkeleton from '../skeleton/AppSkeleton.vue'
</script>
<script lang="ts"></script>

<template>
  <footer class="footer">
    <AppSkeleton :width="'90%'" :height="'60%'" />
  </footer>
</template>

<style scoped lang="scss">
.footer {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 785px;
  height: 72px;
  border: var(--border-item);
  border-radius: var(--base-border-radius);
  
  background: var(--item-background-color);
}
</style>
