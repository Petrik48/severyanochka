<script setup lang="ts">
import { Container } from '@/shared/container'
import { Logo } from '@/shared/logo'
import { Icon } from '@/shared/icon'
import { Button } from '@/shared/button'
</script>

<template>
  <header
    class="flex items-center header h-18 bg-(--main-surface) shadow-(--shadow-default-s) sticky"
  >
    <Container class="flex items-center gap-10">
      <Logo orientation="horizontal" height="32" width="152" />
      <div class="flex items-center gap-4">
        <Button accent="secondary" width="140">
          <template #leftIcon>
            <Icon icon="menu" />
          </template>
          Каталог
        </Button>
      </div>
    </Container>
  </header>
</template>

<style lang="scss" scoped></style>
