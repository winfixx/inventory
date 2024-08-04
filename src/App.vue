<script setup lang="ts">
import TheAside from './components/aside/TheAside.vue'
import AppMoon from './components/icons/AppMoon.vue'
import AppSun from './components/icons/AppSun.vue'
</script>
<script lang="ts">
import { mapActions, mapStores } from 'pinia'
import { Themes } from './assets/consts/app.const'
import theme from './assets/themes/theme'
import TheFooter from './components/footer/TheFooter.vue'
import TheInventory from './components/inventory/TheInventory.vue'
import { useInventoryStore } from './stores/useInventoryStore'

export default {
  data() {
    return {
      currentTheme: theme.getTheme()
    }
  },
  methods: {
    toggleTheme() {
      if (theme.getTheme() === Themes.dark) {
        this.currentTheme = Themes.light
        theme.setTheme(Themes.light)
      } else {
        this.currentTheme = Themes.dark
        theme.setTheme(Themes.dark)
      }
    },
    ...mapActions(useInventoryStore, ['readyInventory'])
  },
  computed: {
    ...mapStores(useInventoryStore)
  },
  mounted() {
    theme.setTheme(this.currentTheme)

    this.readyInventory()
  }
}
</script>

<template>
  <div class="change-theme">
    <AppSun @click="toggleTheme" v-show="currentTheme === Themes.dark" />
    <AppMoon @click="toggleTheme" v-show="currentTheme === Themes.light" />
  </div>

  <div class="main-container">
    <TheAside />
    <TheInventory />
  </div>
  <TheFooter />
</template>

<style scoped lang="scss">
.change-theme {
  position: absolute;
  top: 15px;
  right: 15px;
  max-width: 30px;
  max-height: 30px;
}
.main-container {
  display: flex;
  gap: var(--base-gap);
}
</style>
