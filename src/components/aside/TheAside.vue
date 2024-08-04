<script setup lang="ts">
import AppSkeleton from '../skeleton/AppSkeleton.vue'
</script>
<script lang="ts"></script>

<template>
  <aside class="aside">
    <AppSkeleton :width="'100%'" :height="'50%'" />
    <AppSkeleton :width="'95%'" :height="'26px'" />
    <div class="list" style="width: 100%;">
      <AppSkeleton :width="'90%'" :height="'10px'" />
      <AppSkeleton :width="'100%'" :height="'10px'" />
      <AppSkeleton :width="'92%'" :height="'10px'" />
      <AppSkeleton :width="'88%'" :height="'10px'" />
      <AppSkeleton :width="'86%'" :height="'10px'" />
    </div>
    <AppSkeleton :width="'80%'" :height="'10px'" />
  </aside>
</template>

<style scoped lang="scss">
.aside {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;

  width: 236px;
  height: 505px;
  padding: 15px;
  border: var(--border-item);
  border-radius: var(--base-border-radius);

  background: var(--item-background-color);

  .list {
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: center;
  }
}
</style>
