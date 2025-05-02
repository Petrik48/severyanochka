<script lang="ts" setup>
import type { Component } from 'vue'

import MenuIcon from '@/shared/icon/icons/MenuIcon.vue'

interface Props {
  icon: string
  size?: string | number
}

const icons: { [index: string]: Component } = { menu: MenuIcon }
const { icon, size = 24 } = defineProps<Props>()
const iconComponent = icons[icon]
</script>

<template>
  <component :is="iconComponent" :width="size" :height="size"></component>
</template>

<style lang="scss" scoped></style>
