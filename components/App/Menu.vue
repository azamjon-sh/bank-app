<script setup>
const router = useRouter();
</script>

<template>
  <div class="menu fixed bottom-0 z-30 w-full bg-white pt-3 pb-9 flex justify-center">
    <Transition>
      <div class="menu__grid w-[425px] flex justify-evenly items-center">
        <NuxtLink to="/home" class="menu__item flex justify-center items-center flex-col gap-1">
          <img src="/assets/images/home.svg" alt="">
          <h4 class="text-xs text-gray">Главная</h4>
        </NuxtLink>
        <NuxtLink to="/advices" class="menu__item flex justify-center items-center flex-col gap-1">
          <img src="/assets/images/chart.svg" alt="">
          <h4 class="text-xs text-gray">Советы</h4>
        </NuxtLink>
        <div class="menu__ai">
          <img src="/assets/images/ai.png" alt="">
        </div>
        <NuxtLink to="/" class="menu__item flex justify-center items-center flex-col gap-1">
          <img src="/assets/images/card.svg" alt="">
          <h4 class="text-xs text-gray">Мои карты</h4>
        </NuxtLink>
        <NuxtLink to="/profile" class="menu__item flex justify-center items-center flex-col gap-1">
          <img src="/assets/images/profile.svg" alt="">
          <h4 class="text-xs text-gray">Профиль</h4>
        </NuxtLink>
      </div>
    </Transition>
  </div>
</template>

<style scoped>

</style>