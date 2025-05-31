<script setup>

const authenticate = ref(false)

</script>

<template>
  <main class="bg-default h-screen max-h-screen overflow-y-auto">
    <div class="h-screen max-w-[425px] mx-auto p-4" v-if="!authenticate">
      <WelcomeSlider @finished="authenticate = true"/>
    </div>
    <div class="h-screen max-w-[425px] mx-auto p-4" v-else>
      <AppAuthenticate/>
    </div>
<!--    <template v-else>-->
<!--      <div class="w-full max-w-[425px] p-4 mx-auto  pb-[128px]">-->
<!--        <slot></slot>-->
<!--      </div>-->
<!--      <AppMenu/>-->
<!--    </template>-->
  </main>

</template>

<style scoped>

</style>