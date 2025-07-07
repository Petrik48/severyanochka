<script lang="ts" setup>
import { Typography } from '@/shared/typography'
</script>

<template>
  <div
    class="absolute left-0 right-0 top-full h-fit bottom-0 flex gap-10 justify-center py-10 shadow-(--shadow-default-s)"
  >
    <ul class="flex flex-col gap-6">
      <Typography tag="li" bold size="s" class="cursor-pointer hover:text-(--main-primary)">
        Молоко, сыр, яйцо
      </Typography>
      <Typography tag="li" bold size="s" class="cursor-pointer hover:text-(--main-primary)">
        Хлеб
      </Typography>
      <Typography tag="li" bold size="s" class="cursor-pointer hover:text-(--main-primary)">
        Фрукты и овощи
      </Typography>
      <Typography tag="li" bold size="s" class="cursor-pointer hover:text-(--main-primary)">
        Замороженные продукты
      </Typography>
    </ul>
    <ul class="flex flex-col gap-6">
      <Typography tag="li" bold size="s" class="cursor-pointer hover:text-(--main-primary)">
        Напитки
      </Typography>
      <Typography tag="li" bold size="s" class="cursor-pointer hover:text-(--main-primary)">
        Кондитерские изделия
      </Typography>
      <Typography tag="li" bold size="s" class="cursor-pointer hover:text-(--main-primary)">
        Чай, кофе
      </Typography>
    </ul>
    <ul class="flex flex-col gap-6">
      <Typography tag="li" bold size="s" class="cursor-pointer hover:text-(--main-primary)">
        Бакалея
      </Typography>
      <Typography tag="li" bold size="s" class="cursor-pointer hover:text-(--main-primary)">
        Здоровое питание
      </Typography>
      <Typography tag="li" bold size="s" class="cursor-pointer hover:text-(--main-primary)">
        Зоотовары
      </Typography>
    </ul>
    <ul class="flex flex-col gap-6">
      <Typography tag="li" bold size="s" class="cursor-pointer hover:text-(--main-primary)">
        Непродовольственные товары
      </Typography>
      <Typography tag="li" bold size="s" class="cursor-pointer hover:text-(--main-primary)">
        Детское питание
      </Typography>
      <Typography tag="li" bold size="s" class="cursor-pointer hover:text-(--main-primary)">
        Мясо, птица, колбаса
      </Typography>
    </ul>
  </div>
</template>
