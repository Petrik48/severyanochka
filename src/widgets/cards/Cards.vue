<script setup lang="ts">
import { Container } from '@/shared/container'
import { Typography } from '@/shared/typography'
import { Button } from '@/shared/button'
import { Icon } from '@/shared/icon'
import { ProductCard } from '@/entities/product'
import type { CardsProps } from '@/widgets/cards/interfaces.ts'
import { Like } from '@/features/like'
import { Badge } from '@/shared/badge'

const { data } = defineProps<CardsProps>()
const { title, listLinkText, listLinkUrl, items } = data
</script>

<template>
  <Container class="!my-15">
    <div class="flex justify-between">
      <Typography tag="h3" bold>{{ title }}</Typography>
      <Button accent="grayscale" decoration="none" size="m" class="self-end">
        <RouterLink :to="listLinkUrl">{{ listLinkText }}</RouterLink>
        <template #rightIcon>
          <Icon icon="chevron-right" />
        </template>
      </Button>
    </div>
    <div class="flex gap-10">
      <ProductCard v-for="(product, index) in items" :key="product.name + index" :product="product">
        <template #leftTopIcon>
          <Like />
        </template>
        <template #leftBottomIcon>
          <Badge>
            {{ `-${product.sale}%` }}
          </Badge>
        </template>
      </ProductCard>
    </div>
  </Container>
</template>
