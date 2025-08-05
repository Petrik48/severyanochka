<script setup lang="ts">
import { Header } from '../widgets/header'
import Footer from '@/widgets/footer/Footer.vue'
import { Content } from '@/shared/content'
import { Carousel } from '@/features/main-carousel'
import { Cards } from '@/widgets/cards'

import product1PNG from '@/assets/img/product-1.png'
import product2PNG from '@/assets/img/product-2.png'
import product3PNG from '@/assets/img/product-3.png'
import product4PNG from '@/assets/img/product-4.png'

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
      price: 44.5,
      cardPrice: 50.5,
      rating: 2,
      sale: 50,
    },
    {
      img: product2PNG,
      name: 'Молоко пастеризованное ПРОСТОКВАШИНО отборное 3,4–4,5%, без змж',
      price: 44.5,
      cardPrice: 50.5,
      rating: 3,
      sale: 50,
    },
    {
      img: product3PNG,
      name: 'Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскана полусухая, нарезка',
      price: 44.5,
      cardPrice: 50.5,
      rating: 5,
      sale: 50,
    },
    {
      img: product4PNG,
      name: 'Сосиски варёные Мясная История молочные + с сыром категория Б',
      price: 44.5,
      cardPrice: 50.5,
      rating: 4,
      sale: 50,
    },
  ],
}
</script>

<template>
  <Header />
  <main class="pt-4 bg-(--main-page-background) min-h-[calc(100vh-108px-72px)]">
    <Content>
      <Carousel :slides="slides" class="mb-4" />
      <Cards :data="saleCards" />
    </Content>
  </main>
  <Footer />
</template>
