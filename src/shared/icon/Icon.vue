<script lang="ts" setup>
import type { Component } from 'vue'

import MenuIcon from '@/shared/icon/icons/MenuIcon.vue'
import SearchIcon from '@/shared/icon/icons/SearchIcon.vue'
import FavoriteIcon from '@/shared/icon/icons/FavoriteIcon.vue'
import OrdersIcon from '@/shared/icon/icons/OrdersIcon.vue'
import CartIcon from '@/shared/icon/icons/CartIcon.vue'
import ChevronDownIcon from '@/shared/icon/icons/ChevronDownIcon.vue'

interface Props {
  icon: string
  size?: string | number
}

const icons: { [index: string]: Component } = {
  menu: MenuIcon,
  search: SearchIcon,
  favorite: FavoriteIcon,
  orders: OrdersIcon,
  cart: CartIcon,
  'chevron-down': ChevronDownIcon,
}
const { icon, size = 24 } = defineProps<Props>()
const iconComponent = icons[icon]
</script>

<template>
  <component :is="iconComponent" :width="size" :height="size"></component>
</template>

<style lang="scss" scoped></style>
