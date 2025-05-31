<script setup>

</script>

<template>
  <div class="rewards">
    <h2 class="text-2xl text-black my-6 font-medium">Получи награду за действия</h2>
    <div class="rewards-list">
      <UiField class="rewards-item flex items-center justify-between gap-2 px-3 h-auto mb-4" v-for="item in 3">
        <div class="rewards-image w-12 h-12">
          <img src="@/assets/images/ai.png" alt="" class="w-full">
        </div>
        <div class="rewards-text text-black font-medium text-lg">
          Яндекс.Браузер
          <div class="text-gray text-sm">Установи приложение</div>
        </div>
        <div class="rewards-amount bg-green rounded-full text-lg text-white text-center py-1 w-20">
          +300 ₽
        </div>
      </UiField>
    </div>
  </div>
</template>

<style scoped>

</style>