import { dataInventoryItems, keyInventoryLocalStorage } from '@/assets/consts/app.const'
import { IInventoryItem } from '@/types/IInventoryItem'
import { defineStore } from 'pinia'

export const useInventoryStore = defineStore('inventory', {
  state: (): { inventoryItems: (IInventoryItem | null)[][] } => ({
    inventoryItems: []
  }),
  actions: {
    setInventory(inventory: IInventoryItem[][]) {
      this.inventoryItems = inventory
    },
    createEmptyInventory() {
      return new Array(5)
        .fill(null)
        .map(r => (r = new Array(5).fill(null)))
    },
    getInventoryFromLocalStorage(): (IInventoryItem | null)[][] {
      const items = localStorage.getItem(keyInventoryLocalStorage)
      if (items) return JSON.parse(items)

      return []
    },
    saveInLocalStorage(inventory: (IInventoryItem | null)[][]) {
      localStorage.setItem(
        keyInventoryLocalStorage,
        JSON.stringify(inventory)
      )
    },
    readyInventory() {
      const inventory = this.getInventoryFromLocalStorage()

      if (inventory.length === 0) {
        const newInventory = this.createEmptyInventory()

        dataInventoryItems.forEach(i => {
          newInventory[i.position.y][i.position.x] = i
        })

        this.saveInLocalStorage(newInventory)
        this.setInventory(newInventory)
      }
      else this.inventoryItems = inventory
    },
    removeItem(count: number, x: number, y: number) {
      console.log(count, x, y);
      const item = this.inventoryItems[y][x]
console.log(item);
      if (item && item.count >= count) {
        const remains = item.count - count

        if (remains === 0) this.inventoryItems[y][x] = null
        else item.count = remains

        this.saveInLocalStorage(this.inventoryItems)
      }
    },
    moveItem(item: IInventoryItem | null, whereX: number, whereY: number, whereItem: IInventoryItem | null) {
      if (item !== null && whereX > -1 && whereY > -1) {
        const currentY = item.position.y
        const currentX = item.position.x
        const standingItem = this.inventoryItems[whereY][whereX]

        if (standingItem === null) this.inventoryItems[currentY][currentX] = null
        else {
          whereItem!.position.x = currentX
          whereItem!.position.y = currentY
          this.inventoryItems[currentY][currentX] = whereItem
        }

        item.position.x = whereX
        item.position.y = whereY

        this.inventoryItems[whereY][whereX] = item
        localStorage.setItem(
          keyInventoryLocalStorage,
          JSON.stringify(this.inventoryItems)
        )
      }
    }
  }
})