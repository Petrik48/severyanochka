<script lang="ts" setup>
import { Icon } from '@/shared/icon'
import { Typography } from '@/shared/typography'

interface Props {
  data: [
    {
      label: string
      icon: string
      count: number
      link: string
    },
  ]
}

const { data } = defineProps<Props>()
</script>

<template>
  <nav class="flex items-center gap-6">
    <ul class="contents">
      <li v-for="item in data" :key="item.link">
        <router-link :to="item.link" class="flex flex-col gap-2 items-center relative">
          <Icon :icon="item.icon" />
          <Typography tag="p" size="xs">{{ item.label }}</Typography>
          <span
            v-if="item.count"
            class="py-0.5 px-1 absolute -top-[6px] right-[14px] bg-(--main-primary) text-(--main-on-primary) rounded font-bold text-[7px]"
            >{{ item.count }}</span
          >
        </router-link>
      </li>
    </ul>
  </nav>
</template>
