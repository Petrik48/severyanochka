<script setup lang="ts">
import { Header } from '../widgets/header'
import Footer from '@/widgets/footer/Footer.vue'
import { Content } from '@/shared/content'
import { Carousel } from '@/features/main-carousel'

const slides = [
  {
    backgroundClass: 'bg-[url(slide-1-bg.png)]',
    text: 'Доставка бесплатно от 1000 ₽',
  },
  {
    backgroundClass: 'bg-[url(slide-2-bg.png)]',
    text: '',
  },
]
</script>

<template>
  <Header />
  <main class="mt-4">
    <Content>
      <Carousel :slides="slides" />
    </Content>
  </main>
  <Footer />
</template>
