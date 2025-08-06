<script lang="ts" setup>
import { computed } from 'vue'

import { Typography } from '@/shared/typography'
import { Icon } from '@/shared/icon'

interface Props {
  leftIcon?: HTMLElement
  rightIcon?: HTMLElement
  accent?: 'primary' | 'secondary' | 'error' | 'grayscale'
  decoration?: 'default' | 'outline' | 'none'
  size?: 'l' | 'm' | 's'
  disabled?: boolean
  height?: number | string
  width?: number | string
  count?: number
}

const {
  accent = 'primary',
  decoration = 'default',
  size = 'm',
  disabled = false,
  count = 0,
  height,
  width,
} = defineProps<Props>()

const classComputed = computed(() => {
  return [
    'button',
    count ? '!cursor-default' : '',
    `button--${size}`,
    `button--${count ? 'default' : decoration}`,
    `button--${count ? 'secondary' : accent}`,
  ]
})

const styleComputed = computed(() => {
  return { width: width ? `${width}px` : '', height: height ? `${height}px` : '' }
})

const decreaseCount = () => {
  console.log('decreaseCount')
}

const increaseCount = () => {
  console.log('increaseCount')
}
</script>

<template>
  <button
    class="flex items-center gap-2 rounded-sm h-fit"
    :disabled="disabled"
    :class="classComputed"
    :style="styleComputed"
  >
    <span class="flex justify-between w-full" v-if="count">
      <Icon icon="minus" size="24" class="cursor-pointer" @click.stop="decreaseCount" />
      {{ count }}
      <Icon icon="plus" size="24" class="cursor-pointer" @click.stop="increaseCount" />
    </span>
    <span v-else class="contents">
      <slot name="leftIcon" />
      <Typography tag="p" size="s" class="flex-auto">
        <slot></slot>
      </Typography>
      <slot name="rightIcon" />
    </span>
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

    & p {
      color: var(--main-on-primary);
    }
  }

  &--secondary {
    background: var(--main-secondary);
    color: var(--main-on-primary);

    & p {
      color: var(--main-on-primary);
    }

    &.button--outline {
      background: transparent;
      border: 1px solid var(--main-secondary);

      & p {
        color: var(--main-secondary);
      }
    }
  }
}
</style>
