<script lang="ts" setup>
import type { Component } from 'vue'

import MenuIcon from '@/shared/icon/icons/MenuIcon.vue'
import SearchIcon from '@/shared/icon/icons/SearchIcon.vue'
import FavoriteIcon from '@/shared/icon/icons/FavoriteIcon.vue'
import OrdersIcon from '@/shared/icon/icons/OrdersIcon.vue'
import CartIcon from '@/shared/icon/icons/CartIcon.vue'
import ChevronDownIcon from '@/shared/icon/icons/ChevronDownIcon.vue'
import ChevronRightIcon from '@/shared/icon/icons/ChevronRightIcon.vue'
import LoginIcon from '@/shared/icon/icons/LoginIcon.vue'
import InstaIcon from '@/shared/icon/icons/InstaIcon.vue'
import VkIcon from '@/shared/icon/icons/VkIcon.vue'
import FbIcon from '@/shared/icon/icons/FbIcon.vue'
import OkIcon from '@/shared/icon/icons/OkIcon.vue'
import PhoneIcon from '@/shared/icon/icons/PhoneIcon.vue'
import RatingIcon from '@/shared/icon/icons/RatingIcon.vue'

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
  'chevron-right': ChevronRightIcon,
  login: LoginIcon,
  insta: InstaIcon,
  vk: VkIcon,
  fb: FbIcon,
  ok: OkIcon,
  phone: PhoneIcon,
  rating: RatingIcon,
}
const { icon, size = 24 } = defineProps<Props>()
const iconComponent = icons[icon]
</script>

<template>
  <component :is="iconComponent" :width="size" :height="size"></component>
</template>

<style lang="scss" scoped></style>
