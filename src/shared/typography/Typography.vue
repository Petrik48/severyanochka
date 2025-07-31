<script lang="ts" setup>
interface Props {
  tag: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'li'
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
  &:is(h5, h6) {
    font-size: 18px;
  }
  &:is(h4) {
    font-size: 24px;
  }
  &:is(h3) {
    font-size: 36px;
  }
  &:is(h2) {
    font-size: 48px;
  }
  &:is(h1) {
    font-size: 64px;
  }

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
}
</style>
