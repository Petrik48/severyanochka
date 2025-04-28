<script lang="ts" setup>
interface Props {
  tag: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  size: 'xs' | 's' | 'm' | 'l' | 'xl'
  bold?: boolean
}

const { tag, size, bold } = defineProps<Props>()
</script>

<template>
  <component
    :is="tag"
    :class="['typography', `typography--${size}`, `${bold ? 'typography--bold ' : ''}`]"
  >
    <slot></slot>
  </component>
</template>

<style lang="scss" scoped>
.typography {
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: var(--main-onsurface);

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
