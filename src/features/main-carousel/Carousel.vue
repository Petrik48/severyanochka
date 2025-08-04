<script setup lang="ts">
import { Carousel, Slide } from 'vue3-carousel'
import { Typography } from '@/shared/typography'
import { Container } from '@/shared/container'

interface Props {
  slides: {
    backgroundClass: string
    text: string
  }[]
}

const { slides } = defineProps<Props>()
</script>

<template>
  <Carousel :itemsToShow="1" class="h-[200px]!" wrap-around :autoplay="3000">
    <Slide
      v-for="slide in slides"
      :key="slide.text"
      class="bg-no-repeat bg-cover"
      :class="slide.backgroundClass"
    >
      <Container>
        <div class="carousel__item cursor-default">
          <Typography tag="h2" bold class="pr-[69px] text-end">
            {{ slide.text }}
          </Typography>
        </div>
      </Container>
    </Slide>
  </Carousel>
</template>
