<script setup lang="ts">
import { Header } from '../widgets/header'
import Footer from '@/widgets/footer/Footer.vue'
import { Content } from '@/shared/content'
import { Carousel } from '@/features/main-carousel'
import { Cards } from '@/widgets/cards'

import product1PNG from '@/assets/img/product-1.png'

const slides = [
  {
    backgroundClass: 'bg-[url(@/assets/img/slide-1-bg.png)]',
    text: 'Доставка бесплатно от 1000 ₽',
  },
  {
    backgroundClass: 'bg-[url(@/assets/img/slide-2-bg.png)]',
    text: '',
  },
]

const saleCards = {
  title: 'Акции',
  listLinkText: 'Все акции',
  listLinkUrl: '/',
  items: [
    {
      img: product1PNG,
      name: 'Г/Ц Блинчики с мясом вес, Россия',
      sale: 50,
    },
  ],
}
</script>

<template>
  <Header />
  <main class="mt-4">
    <Content>
      <Carousel :slides="slides" class="mb-4" />
      <Cards :data="saleCards" />
    </Content>
  </main>
  <Footer />
</template>
