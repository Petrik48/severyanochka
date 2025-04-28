<script lang="ts" setup>
interface Props {
  tag: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const { tag } = defineProps<Props>()
</script>

<template>
  <component :is="tag">
    <slot></slot>
  </component>
</template>
