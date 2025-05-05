<script lang="ts" setup>
interface Props {
  img: string
}

const { img } = defineProps<Props>()
</script>

<template>
  <img :src="img" alt="avatar" class="h-10 w-10 rounded-full overflow-hidden" />
</template>
