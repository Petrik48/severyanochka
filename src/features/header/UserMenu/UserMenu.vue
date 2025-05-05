<script lang="ts" setup>
import { Avatar } from '@/shared/avatar'
import { Typography } from '@/shared/typography'
import { Icon } from '@/shared/icon'

interface Props {
  data: {
    avatar: string
    name: string
    menu: any[]
  }
}

const { data } = defineProps<Props>()
</script>

<template>
  <button class="flex items-center gap-2.5 cursor-pointer flex-auto p-2">
    <Avatar :img="data.avatar" />
    <Typography tag="p" size="s" class="flex-auto text-left">{{ data.name }}</Typography>
    <Icon icon="chevron-down" />
  </button>
</template>
