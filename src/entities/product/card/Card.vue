<script setup lang="ts">
import type { Card } from '@/entities/product/card/interfaces.ts'
import { Typography } from '@/shared/typography'

interface ProductCardProps {
  product: Card
}

const { product } = defineProps<ProductCardProps>()
</script>

<template>
  <article class="flex flex-col">
    <div class="h-[160px] relative">
      <slot name="leftTopIcon"></slot>
      <slot name="rightTopIcon"></slot>
      <img :src="product.img" />
      <slot name="leftBottomIcon"></slot>
      <slot name="rightBottomIcon"></slot>
    </div>
    <div class="flex flex-col gap-2 pa-2 h-[189px]">
      <div class="flex justify-between">
        <div class="flex flex-col">
          <Typography tag="p" size="m" bold>44.50 ₽</Typography>
          <Typography tag="span" size="xs" class="text-(--grayscale-light)">С картой</Typography>
        </div>
        <div class="flex flex-col self-end">
          <Typography tag="p" size="s">50,50 ₽</Typography>
          <Typography tag="span" size="xs" class="text-(--grayscale-light)">Обычная</Typography>
        </div>
      </div>
      <Typography tag="p" size="s" class="h-[48px]">{{ product.name }}</Typography>
    </div>
  </article>
</template>
