<script lang="ts" setup>
import type { Component } from 'vue'
import MenuIcon from '@/shared/icon/icons/MenuIcon.vue'

interface Props {
  icon: string
}

const icons: { [index: string]: Component } = { menu: MenuIcon }
const { icon } = defineProps<Props>()
const iconComponent = icons[icon]
</script>

<template>
  <component :is="iconComponent"></component>
</template>

<style lang="scss" scoped></style>
