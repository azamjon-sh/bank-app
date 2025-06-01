<script setup>
const props = defineProps({
  disabled: Boolean,
  link: String,
  red: Boolean,
})
</script>

<template>
  <NuxtLink v-if="link"
            target="_blank"
            :to="link"
            :class="['border-none w-full h-14 flex items-center justify-center rounded-xl',
            disabled ? 'bg-gray-1 text-gray' : (red ? 'bg-red text-white' : 'bg-green text-white') ]"
            :disabled="disabled">
     <span class="font-semibold">
      <slot/>
    </span>
  </NuxtLink>
  <button
      v-else
      :class="['border-none w-full h-14 flex items-center justify-center rounded-xl',
            disabled ? 'bg-gray-1 text-gray' : (red ? 'bg-red text-white' : 'bg-green text-white') ]"
      :disabled="disabled">
    <span class="font-semibold">
      <slot/>
    </span>
  </button>
</template>

<style scoped>

</style>