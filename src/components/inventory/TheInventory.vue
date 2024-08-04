<script setup lang="ts">
import AppInventoryItem from '../inventory-item/AppInventoryItem.vue'
import InnerModal from './inner-modal/InnerModal.vue'
</script>
<script lang="ts">
import { useInventoryStore } from '@/stores/useInventoryStore'
import { IInventoryItem } from '@/types/IInventoryItem'
import { mapActions, mapStores } from 'pinia'

export default {
  data(): {
    whereX: number
    whereY: number
    whereItem: IInventoryItem | null
    showModal: boolean
    selectedItem: IInventoryItem | null
  } {
    return {
      whereX: -1,
      whereY: -1,
      whereItem: null,
      showModal: false,
      selectedItem: null
    }
  },
  computed: {
    ...mapStores(useInventoryStore)
  },
  methods: {
    ...mapActions(useInventoryStore, ['moveItem']),
    toggleShowModal(item: IInventoryItem | null) {
      this.selectedItem = item
      this.showModal = !this.showModal
    },
    onDragStart(e: DragEvent) {
      const currentTarget: any = e.currentTarget
      currentTarget.classList.add('selected')
    },
    onDragEnd(e: DragEvent, item: IInventoryItem) {
      const currentTarget: any = e.currentTarget
      currentTarget.classList.remove('selected')

      this.moveItem(item, this.whereX, this.whereY, this.whereItem)
    },
    onDrop(whereX: number, whereY: number, whereItem: IInventoryItem | null) {
      this.whereX = whereX
      this.whereY = whereY
      this.whereItem = whereItem
    }
  }
}
</script>

<template>
  <div class="inventory" id="inventory">
    <InnerModal
      :showModal="showModal"
      :toggleShowModal="toggleShowModal"
      :inventoryItem="selectedItem!"
    />
    <table>
      <tr
        class="row"
        v-for="(row, y) in inventoryStore.inventoryItems"
        :key="y"
      >
        <td class="cell" v-for="(cell, x) in row" :key="x">
          <div
            :class="[
              'item',
              {
                isActive:
                  cell !== null &&
                  cell?.position.x === selectedItem?.position.x &&
                  cell?.position.y === selectedItem?.position.y
              }
            ]"
            draggable="true"
            @dragstart="(e: DragEvent) => cell !== null ? onDragStart(e) : null"
            @dragend="(e: DragEvent) => {if (cell !== null) onDragEnd(e, cell)}"
            @dragover.prevent="() => false"
            @drop="
              () => (cell !== null ? onDrop(x, y, cell) : onDrop(x, y, null))
            "
            @click="() => (cell !== null ? toggleShowModal(cell) : null)"
          >
            <div v-if="cell !== null">
              <AppInventoryItem
                width="48px"
                height="48px"
                :color="cell.color"
              />
              <div class="count-item">
                <span>{{ cell.count }}</span>
              </div>
            </div>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<style scoped lang="scss">
.inventory {
  position: relative;

  height: 505px;
  width: 525px;
  border: var(--border-item);
  border-radius: var(--base-border-radius);

  background: var(--item-background-color);
  overflow: hidden;

  table {
    border-spacing: 0;

    .row {
      display: flex;
      border-bottom: var(--border-item);

      &:last-child {
        border-bottom: none;
      }

      .cell {
        position: relative;

        cursor: move;

        width: 105px;
        height: 100px;
        border-right: var(--border-item);

        &:last-child {
          border-right: none;
        }

        .item {
          display: flex;
          justify-content: center;
          align-items: center;

          height: 100%;
          width: 100%;

          &.isActive {
            background: var(--item-active-background-color);
          }

          .count-item {
            position: absolute;

            bottom: 0;
            right: 0;
            padding: 0px 5px 2px 7px;

            border-left: var(--border-item);
            border-top: var(--border-item);
            border-top-left-radius: 12px;

            > span {
              user-select: none;
            }
          }

          &.selected {
            border: var(--border-item);
            border-radius: var(--base-border-radius);
            opacity: 40%;
          }
        }
      }
    }
  }
}
</style>
