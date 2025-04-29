<script lang="ts" setup>
import { Typography } from '@/shared/typography'

interface Props {
  leftIcon?: HTMLElement
  rightIcon?: HTMLElement
  accent?: 'primary' | 'secondary' | 'error' | 'grayscale'
  decoration?: 'default' | 'outline' | 'none'
  size?: 'l' | 'm' | 's'
  disabled?: boolean
  height?: number | string
  width?: number | string
}

const {
  accent = 'primary',
  decoration = 'default',
  size = 'm',
  disabled = false,
  height,
  width,
} = defineProps<Props>()
</script>

<template>
  <button
    class="flex items-center gap-2 rounded-sm"
    :disabled="disabled"
    :class="['button', `button--${size}`, `button--${decoration}`, `button--${accent}`]"
    :style="{ width: width ? `${width}px` : '', height: height ? `${height}px` : '' }"
  >
    <slot name="leftIcon" />
    <Typography tag="p" size="s" class="flex-auto">
      <slot></slot>
    </Typography>
    <slot name="rightIcon" />
  </button>
</template>

<style lang="scss" scoped>
.button {
  cursor: pointer;

  &--l {
    padding: 18px 16px;
  }

  &--m {
    padding: 8px;
  }

  &--s {
    padding: 4px 8px;
  }

  &--primary {
    color: var(--main-on-primary);
    background: var(--main-primary);
  }

  &--secondary {
    color: var(--main-on-primary);
    background: var(--main-secondary);
  }
}
</style>
