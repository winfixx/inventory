<script setup lang="ts">
import AppButton from '@/components/buttons/app-button/AppButton.vue'
import CloseButton from '@/components/buttons/close-button/CloseButton.vue'
import AppInventoryItem from '@/components/inventory-item/AppInventoryItem.vue'
import AppSkeleton from '@/components/skeleton/AppSkeleton.vue'
import { IInventoryItem } from '@/types/IInventoryItem'
import { defineProps } from 'vue'
import RemovalInnerModal from './RemovalInnerModal.vue'

defineProps<{
  showModal: boolean
  toggleShowModal: (item: IInventoryItem | null) => void
  inventoryItem: IInventoryItem
}>()
</script>
<script lang="ts">
export default {
  data(vm) {
    return {
      showRemoval: false
    }
  },
  methods: {
    toggleShowRemoval() {
      this.showRemoval = !this.showRemoval
    }
  }
}
</script>

<template>
  <div v-if="showModal" class="inner-modal">
    <CloseButton top="5px" right="10px" @click="() => toggleShowModal(null)" />

    <div class="image-item">
      <AppInventoryItem
        width="115.56px"
        height="115.56px"
        :color="inventoryItem?.color"
      />
    </div>

    <div class="main-modal">
      <AppSkeleton width="100%" height="30px" />

      <div class="skeletons-list">
        <AppSkeleton width="100%" height="10px" />
        <AppSkeleton width="100%" height="10px" />
        <AppSkeleton width="100%" height="10px" />
        <AppSkeleton width="80%" height="10px" />
        <AppSkeleton width="45%" height="10px" />
      </div>
    </div>

    <div class="footer-modal">
      <AppButton
        v-if="!showRemoval"
        height="39px"
        text="Удалить предмет"
        @click="toggleShowRemoval"
      />
      <RemovalInnerModal
        v-else
        :toggleShowRemoval="toggleShowRemoval"
        :inventoryItem="inventoryItem"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.inner-modal {
  display: flex;
  flex-direction: column;
  position: absolute;

  z-index: var(--modal-z-index);
  top: 0;
  right: 0;
  bottom: 0;
  width: 250px;

  background: var(--item-background-color);
  opacity: 0.98;
  animation: openInnerModal 0.2s linear;

  border-top-right-radius: var(--base-border-radius);
  border-bottom-right-radius: var(--base-border-radius);
  border-left: var(--border-item);

  .image-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 215px;
    margin: 10px 10px 0 10px;
  }

  .main-modal {
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-top: var(--border-item);
    margin: 0 10px 0 10px;
    padding-top: 15px;

    .skeletons-list {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 14px;
    }
  }

  .footer-modal {
    position: absolute;
    bottom: 0;
    width: 100%;
    background: var(--item-background-color);
    border-top: var(--border-item);
    padding: 15px 10px;
  }
}

@keyframes openInnerModal {
  0% {
    opacity: 0;
    width: 0;
  }
  100% {
    opacity: 0.98;
    width: 250px;
  }
}
</style>
