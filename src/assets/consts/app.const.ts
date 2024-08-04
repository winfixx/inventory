import { IInventoryItem } from '@/types/IInventoryItem'

export enum Themes {
  dark = 'dark',
  light = 'light'
}
export const keyThemesLocalStorage = 'theme'
export const keyInventoryLocalStorage = 'inventory'
export const dataInventoryItems: IInventoryItem[] = [
  {
    color: 'green',
    position: {
      x: 0,
      y: 0
    },
    count: 3
  },
  {
    color: 'purple',
    position: {
      x: 1,
      y: 0
    },
    count: 43
  },
  {
    color: 'blue',
    position: {
      x: 2,
      y: 0
    },
    count: 332
  },
  {
    color: 'aqua',
    position: {
      x: 3,
      y: 0
    },
    count: 4
  },
]