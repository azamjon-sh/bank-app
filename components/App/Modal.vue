<script setup>

</script>

<template>
  <div class="fixed bg-opacity-50 bg-black w-screen h-screen top-0 left-0 z-40 px-4 flex items-end pb-8"
       @click="$emit('closeModal')">
    <div class="bg-white  rounded-xl p-6 text-center flex flex-col items-center min-h-[200px] relative" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>

</style>