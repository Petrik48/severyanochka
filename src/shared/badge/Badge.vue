<script setup lang="ts">
import { Typography } from '@/shared/typography'
</script>

<template>
  <div class="absolute left-[10px] bottom-[10px] px-2 py-1 rounded-sm bg-(--main-primary)">
    <Typography tag="span" size="s" class="text-(--main-on-primary)">
      <slot></slot>
    </Typography>
  </div>
</template>
