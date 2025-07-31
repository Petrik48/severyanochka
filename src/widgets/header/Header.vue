<script setup lang="ts">
import { reactive, ref } from 'vue'

import { Container } from '@/shared/container'
import { Logo } from '@/shared/logo'
import { Icon } from '@/shared/icon'
import { Button } from '@/shared/button'
import { Field } from '@/shared/field'
import Navigation from '@/features/header/navigation/Navigation.vue'

import { UserMenu } from '@/features/header/user-menu'

import avatar from '@/assets/avatar.png'
import { usePersonStore } from '@/entities'
import { storeToRefs } from 'pinia'
import { DropdownMenu } from '@/features/header/dropdown-menu'

const personState = usePersonStore()
const { person, isAuth } = storeToRefs(personState)
const { setIsAuth } = personState

const model = ref()
const navItems = reactive([
  { label: 'Избранное', icon: 'favorite', count: 1, link: '/favorite' },
  { label: 'Заказы', icon: 'orders', count: 0, link: '/orders' },
  { label: 'Корзина', icon: 'cart', count: 2, link: '/cart' },
])

const userMenu = reactive({
  avatar: avatar,
  name: person.value.name,
  menu: [
    { label: 'Профиль', link: '/profile' },
    { label: 'Выйти', action: () => setIsAuth(false) },
  ],
})

const isShowDropdownMenu = ref(false)
</script>

<template>
  <header class="header bg-(--main-surface) sticky top-0 z-2">
    <div class="flex items-center h-18 shadow-(--shadow-default-s)">
      <Container class="flex items-center gap-10 h-full bg-(--main-surface)">
        <Logo orientation="horizontal" height="32" width="152" />
        <div class="flex items-center gap-4">
          <div @mouseenter="isShowDropdownMenu = true">
            <Button accent="secondary" width="140">
              <template #leftIcon>
                <Icon icon="menu" />
              </template>
              Каталог
            </Button>
          </div>
          <Field
            placeholder="Найти товар"
            width="375"
            v-model="model"
            border-color="--main-secondary"
          >
            <template #rightIcon>
              <Icon icon="search" />
            </template>
          </Field>
        </div>
        <div class="flex items-center gap-6 flex-auto">
          <Navigation :data="navItems" />
          <UserMenu v-if="isAuth" :data="userMenu" />
          <Button v-else width="157" @click="setIsAuth(true)">
            Войти
            <template #rightIcon>
              <Icon icon="login" />
            </template>
          </Button>
        </div>
        <DropdownMenu v-if="isShowDropdownMenu" @mouseleave="isShowDropdownMenu = false" />
      </Container>
    </div>
  </header>
</template>
