<script lang="ts" setup>
interface Props {
  leftIcon?: HTMLElement
  rightIcon?: HTMLElement
  accent?: 'primary' | 'secondary' | 'error' | 'grayscale'
  decoration?: 'default' | 'outline' | 'none'
  size?: 'l' | 'm' | 's'
  disabled?: boolean
}

const {
  accent = 'primary',
  decoration = 'default',
  size = 'm',
  disabled = false,
} = defineProps<Props>()
</script>

<template>
  <button></button>
</template>

<style lang="scss" scoped></style>
