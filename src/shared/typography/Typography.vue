<script lang="ts" setup>
interface Props {
  tag: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  size?: 'xs' | 's' | 'm' | 'l' | 'xl'
  bold?: boolean
}

const { tag, size, bold } = defineProps<Props>()
</script>

<template>
  <component
    :is="tag"
    :class="['typography', size ? `typography--${size}` : '', `${bold ? 'typography--bold ' : ''}`]"
    class="typography font-normal leading-[150%] text-(--main-on-surface)"
  >
    <slot></slot>
  </component>
</template>

<style lang="scss" scoped>
.typography {
  &--xs {
    font-size: 12px;
  }
  &--s {
    font-size: 16px;
  }
  &--m {
    font-size: 18px;
  }
  &--l {
    font-size: 24px;
  }
  &--xl {
    font-size: 36px;
  }

  &--bold {
    font-weight: bold;
  }

  &:is(h1) {
    font-size: 18px;
  }
  &:is(h2) {
    font-size: 24px;
  }
  &:is(h3) {
    font-size: 36px;
  }
  &:is(h4) {
    font-size: 48px;
  }
  &:is(h5) {
    font-size: 64px;
  }

  @media screen and (max-width: 768px) {
    &--xs {
      font-size: 8px;
    }
    &--s {
      font-size: 12px;
    }
    &--m {
      font-size: 14px;
    }
    &--l {
      font-size: 20px;
    }
    &--xl {
      font-size: 32px;
    }

    &:is(h1) {
      font-size: 16px;
    }
    &:is(h2) {
      font-size: 20px;
    }
    &:is(h3) {
      font-size: 24px;
    }
    &:is(h4) {
      font-size: 36px;
    }
    &:is(h5) {
      font-size: 48px;
    }
  }
}
</style>
