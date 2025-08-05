<script setup lang="ts">
import { ref, computed } from 'vue'

import type { Card } from '@/entities/product/card/interfaces.ts'
import { Typography } from '@/shared/typography'
import { Button } from '@/shared/button'
import { Rating } from '@/shared/rating'

interface ProductCardProps {
  data: Card
}

const { data } = defineProps<ProductCardProps>()
const { img, name, price, cardPrice, rating } = data
const isHovered = ref(false)

const buttonProps = computed(() => {
  return isHovered.value
    ? { accent: 'primary', decoration: 'default' }
    : { accent: 'secondary', decoration: 'outline' }
})
</script>

<template>
  <article
    class="flex flex-col w-[272px]"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div class="h-[160px] relative">
      <slot name="leftTopIcon"></slot>
      <slot name="rightTopIcon"></slot>
      <img :src="img" />
      <slot name="leftBottomIcon"></slot>
      <slot name="rightBottomIcon"></slot>
    </div>
    <div class="flex flex-col gap-2 pa-2 h-[189px]">
      <div class="flex justify-between cursor-default">
        <div class="flex flex-col">
          <Typography tag="p" size="m" bold>{{ cardPrice.toFixed(2) }} ₽</Typography>
          <Typography tag="span" size="xs" class="text-(--grayscale-light)">С картой</Typography>
        </div>
        <div class="flex flex-col self-end">
          <Typography tag="p" size="s">{{ price.toFixed(2) }} ₽</Typography>
          <Typography tag="span" size="xs" class="text-(--grayscale-light)">Обычная</Typography>
        </div>
      </div>
      <Typography tag="p" size="s" class="line-clamp-2 cursor-default h-[48px]">{{
        name
      }}</Typography>
      <Rating :value="rating || 0" />
      <Button size="m" v-bind="buttonProps" class="transition duration-150 ease-in-out">
        В корзину
      </Button>
    </div>
  </article>
</template>
