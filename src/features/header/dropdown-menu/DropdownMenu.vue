<script lang="ts" setup>
import { Typography } from '@/shared/typography'
import { useCatalogStore } from '@/entities'

const catalogStore = useCatalogStore()
const { catalogSections } = catalogStore
</script>

<template>
  <div
    class="absolute left-0 right-0 h-fit bottom-0 flex justify-center py-10 shadow-(--shadow-default-s) animate-slidedown z-[-1]"
  >
    <ul class="w-[1208px] grid grid-rows-4 grid-flow-col gap-x-10 gap-y-6">
      <li v-for="section in catalogSections" :key="section.label" class="w-fit">
        <router-link :to="section.link">
          <Typography tag="span" bold size="s" class="cursor-pointer hover:text-(--main-primary)">
            {{ section.label }}
          </Typography>
        </router-link>
      </li>
    </ul>
  </div>
</template>
