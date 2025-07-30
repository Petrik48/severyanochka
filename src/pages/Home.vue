<script setup lang="ts">
import { Header } from '../widgets/header'
import Footer from '@/widgets/footer/Footer.vue'
import { Content } from '@/shared/content'
import { Container } from '@/shared/container'
</script>

<template>
  <main>
    <Header />
    <Content>
      <Container> Test 4 </Container>
    </Content>
    <Footer />
  </main>
</template>
