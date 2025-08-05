<script setup lang="ts">
import { Icon } from '@/shared/icon'

interface Props {
  value: number
}

const { value } = defineProps<Props>()
</script>

<template>
  <div class="flex gap-1">
    <Icon
      icon="rating"
      size="16"
      v-for="(_, index) in 5"
      :key="index"
      class="cursor-pointer text-(--grayscale-light)"
      :class="{ 'text-(--main-primary)': index < value }"
    />
  </div>
</template>
