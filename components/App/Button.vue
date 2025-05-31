<script setup>
const props = defineProps({
  disabled: Boolean,

})
</script>

<template>
  <button
      :class="['border-none w-full h-14 flex items-center justify-center rounded-xl',
      disabled ? 'bg-gray-1 text-gray' : 'bg-green text-white' ]"
      :disabled="disabled">
    <span class="font-semibold">
      <slot/>
    </span>
  </button>
</template>

<style scoped>

</style>