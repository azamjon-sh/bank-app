<script setup>
const router = useRouter();
</script>

<template>
  <div class="menu fixed bottom-0 z-30 w-full bg-white pt-3 pb-9 flex justify-center">
    <Transition>
      <div class="menu__grid w-[425px] flex justify-between items-center  ">
        <NuxtLink to="/" class="menu__item  flex justify-center items-center flex-col gap-1">
          <AppIcon icon="home"/>
          <h4 class="text-xs ">Главная</h4>
        </NuxtLink>
        <NuxtLink to="/advices" class="menu__item  flex justify-center items-center flex-col gap-1">
          <AppIcon icon="advices"/>
          <h4 class="text-xs ">Советы</h4>
        </NuxtLink>
        <div class="menu__ai h-12 w-12">
          <img src="/assets/images/ai.png" alt="" class="w-full">
        </div>
        <NuxtLink to="/card" class="menu__item  flex justify-center items-center flex-col gap-1">
          <AppIcon icon="card"/>
          <h4 class="text-xs ">Мои карты</h4>
        </NuxtLink>
        <NuxtLink to="/profile" class="menu__item  flex justify-center items-center flex-col gap-1">
          <AppIcon icon="user"/>
          <h4 class="text-xs ">Профиль</h4>
        </NuxtLink>
      </div>
    </Transition>
  </div>
</template>

<style scoped>

</style>