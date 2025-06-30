<script lang="ts" setup>
import { ref } from 'vue'

import { Avatar } from '@/shared/avatar'
import { Typography } from '@/shared/typography'
import { Icon } from '@/shared/icon'
import useClickOutside from '@/composables/useClickOutside'

interface Props {
  data: {
    avatar: string
    name: string
    menu: any[]
  }
}

const { data } = defineProps<Props>()

const isOpen = ref(false)
const userMenu = ref()
const userMenuButton = ref()

useClickOutside(userMenu, () => {
  isOpen.value = false
})

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div
    ref="userMenu"
    class="user-menu relative w-full"
    :class="{ 'user-menu--open': isOpen }"
    @click="toggleMenu"
  >
    <button
      ref="userMenuButton"
      class="flex items-center gap-2.5 cursor-pointer flex-auto p-2 w-full"
    >
      <Avatar :img="data.avatar" />
      <Typography tag="p" size="s" class="flex-auto text-left">{{ data.name }}</Typography>
      <Icon
        icon="chevron-down"
        class="ml-auto ease-in-out duration-200 transition"
        :class="{ 'rotate-180': isOpen }"
      />
    </button>
    <ul
      v-if="isOpen && data.menu.length"
      class="absolute left-0 right-0 flex flex-col gap-2.5 shadow-(--shadow-default-m) p-2 bg-white rounded-b-sm"
      style="clip-path: inset(0px -20px -20px -20px)"
    >
      <li v-for="item in data.menu" :key="item.label" class="flex items-center h-12 w-full">
        <RouterLink v-if="item.link" :to="item.link">
          <Typography tag="p" size="m" class="cursor-pointer">
            {{ item.label }}
          </Typography>
        </RouterLink>
        <Typography v-else tag="p" size="m" @click="item.action" class="cursor-pointer">
          {{ item.label }}
        </Typography>
      </li>
    </ul>
  </div>
</template>
