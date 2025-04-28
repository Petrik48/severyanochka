<script setup lang="ts">
import { Typography } from '../shared/typography'
</script>

<template>
  <main>
    <div class="flex gap-4">
      <div class="flex flex-col gap-2 justify-between">
        <Typography tag="p" size="xs"> test </Typography>
        <Typography tag="p" size="s"> test </Typography>
        <Typography tag="p" size="m"> test </Typography>
        <Typography tag="p" size="l"> test </Typography>
        <Typography tag="p" size="xl"> test </Typography>
      </div>
      <div class="flex flex-col gap-2 justify-between">
        <Typography tag="p" size="xs" bold> test </Typography>
        <Typography tag="p" size="s" bold> test </Typography>
        <Typography tag="p" size="m" bold> test </Typography>
        <Typography tag="p" size="l" bold> test </Typography>
        <Typography tag="p" size="xl" bold> test </Typography>
      </div>
      <div class="flex flex-col gap-2 justify-between">
        <Typography tag="h1" size="xs"> test </Typography>
        <Typography tag="h2" size="s"> test </Typography>
        <Typography tag="h3" size="m"> test </Typography>
        <Typography tag="h4" size="l"> test </Typography>
        <Typography tag="h5" size="xl"> test </Typography>
      </div>
      <div class="flex flex-col gap-2 justify-between">
        <Typography tag="h1" size="xs" bold> test </Typography>
        <Typography tag="h2" size="s" bold> test </Typography>
        <Typography tag="h3" size="m" bold> test </Typography>
        <Typography tag="h4" size="l" bold> test </Typography>
        <Typography tag="h5" size="xl" bold> test </Typography>
      </div>
    </div>
  </main>
</template>
