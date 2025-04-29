<script setup lang="ts">
import { Container } from '@/shared/container'
import { Logo } from '@/shared/logo'
import { Icon } from '@/shared/icon'
</script>

<template>
  <header
    class="flex items-center header h-18 bg-(--main-surface) shadow-(--shadow-default-s) sticky"
  >
    <Container class="">
      <Logo orientation="horizontal" height="32" width="152" />
      <Icon icon="menu" />
    </Container>
  </header>
</template>

<style lang="scss" scoped></style>
