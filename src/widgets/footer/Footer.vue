<script setup lang="ts">
import { reactive } from 'vue'

import { Container } from '@/shared/container'
import { Logo } from '@/shared/logo'
import { Typography } from '@/shared/typography'
import { Icon } from '@/shared/icon'

const links = reactive([
  { label: 'О компании', href: '/' },
  { label: 'Контакты', href: '/' },
  { label: 'Вакансии', href: '/' },
  { label: 'Статьи', href: '/' },
  { label: 'Политика обработки персональных данных', href: '/' },
])

const socials = reactive([
  { icon: 'insta', href: '/' },
  { icon: 'vk', href: '/' },
  { icon: 'fb', href: '/' },
  { icon: 'ok', href: '/' },
])
</script>

<template>
  <footer class="px-4 py-8 bg-(--main-footer) bg-[url(footer-bg-pattern.png)]">
    <Container class="flex items-center gap-10">
      <div class="flex items-center gap-10">
        <Logo width="64" height="44" />
        <RouterLink :to="link.href" v-for="link in links" :key="link.label">
          <Typography tag="span" size="xs">
            {{ link.label }}
          </Typography>
        </RouterLink>
      </div>
      <div class="flex gap-4 ml-auto">
        <RouterLink v-for="social in socials" :key="social.icon" :to="social.href">
          <Icon :icon="social.icon" />
        </RouterLink>
      </div>
      <a href="tel:+88007773333" class="flex gap-2">
        <Icon icon="phone" />
        <Typography tag="span" size="s" class="whitespace-nowrap">8 800 777 33 33</Typography>
      </a>
    </Container>
  </footer>
</template>
