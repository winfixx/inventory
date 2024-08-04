<script setup lang="ts">
import AppButton from '@/components/buttons/app-button/AppButton.vue'
import AppInput from '@/components/inputs/app-input/AppInput.vue'
import { useInventoryStore } from '@/stores/useInventoryStore'
import { IInventoryItem } from '@/types/IInventoryItem'
import { mapActions } from 'pinia'
import { defineProps, defineModel } from 'vue'

defineProps<{
  toggleShowRemoval: () => void
  inventoryItem: IInventoryItem
}>()

defineModel()
</script>
<script lang="ts">
export default {
  data() {
    return {
      countRemove: 0
    }
  },
  methods: {
    ...mapActions(useInventoryStore, ['removeItem'])
  }
}
</script>

<template>
  <div class="removal">
    <div>
      <AppInput
        placeholder="Введите количество"
        v-model="countRemove"
        type="number"
        width="100%"
        height="40px"
      />
    </div>

    <div class="button-list">
      <AppButton
        height="33px"
        width="40%"
        fontColor="var(--cancel-button-color)"
        background="var(--cancel-button-background-color)"
        text="Отмена"
        @click="toggleShowRemoval"
      />
      <AppButton
        width="60%"
        text="Подтвердить"
        @click="() =>
          removeItem(
            countRemove,
            inventoryItem.position.x,
            inventoryItem.position.y
          )
        "
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.removal {
  .button-list {
    margin-top: 15px;
    display: flex;
    gap: 10px;
  }
}
</style>
