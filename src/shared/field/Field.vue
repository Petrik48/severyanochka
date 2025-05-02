<script lang="ts" setup>
import { ref } from 'vue'

interface Props {
  label?: string
  disabled?: boolean
  size?: 'l' | 'm'
  placeholder?: string
  height?: number | string
  width?: number | string
}

const { label = '', disabled = false, size = 'm', placeholder = '', width } = defineProps<Props>()
const model = defineModel()

const onFocus = ref(false)
</script>

<template>
  <div class="field" :class="[`field--${size}`]" :style="{ width: width ? `${width}px` : '' }">
    <span
      v-if="label"
      class="field__label font-normal text-(--grayscale-hard) text-base"
      :class="{ 'text-[18px]': size === 'l' }"
    >
      {{ label }}
    </span>
    <div
      class="field__container flex items-center border border-solid border-(--grayscale-light) rounded-sm py-2 px-4 gap-[8.5px]"
      :class="{
        'py-3': size === 'l',
        'border-(--main-secondary) shadow-(--shadow-secondary-m)': onFocus,
        'bg-(--grayscale-lightest)': disabled,
        'bg-(--main-onprimary)': !disabled,
      }"
    >
      <slot name="leftIcon"></slot>
      <input
        v-model="model"
        class="field__input flex text-base font-normal placeholder:text-base placeholder:font-normal caret-(--main-secondary)"
        :class="{
          'text-(--main-onsurface) placeholder:text-(--main-onsurface)': !disabled,
          'text-[18px] placeholder:text-[18px]': size === 'l',
          'text-(--grayscale-light) placeholder:text-(--grayscale-light)': disabled,
        }"
        type="text"
        :placeholder="placeholder"
        :disabled="disabled"
        @focusin="onFocus = true"
        @focusout="onFocus = false"
      />
      <slot name="rightIcon"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.field {
}
</style>
