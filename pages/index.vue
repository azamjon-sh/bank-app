<script setup lang="ts">
const cards = ref([
  {
    id: 1,
    title: "Гаспромбанк",
    img: '/assets/images/gasprom.png',
    type: "Дебетовая карта",
    cashback: "до 35%",
    service: "Бесплатно",
    rest: "До 24%",
    transfers: "Переводы без %",
    categories: "Аптеки, супермаркеты, товары для дома",
  },
  {
    id: 2,
    img: '/assets/images/gasprom.png',
    title: "ПСБ",
    type: "Дебетовая карта",
    cashback: "до 32%",
    service: "Бесплатно",
    price: "Бесплатно",
    rest: "10%",
    categories: "Аптеки, супермаркеты, товары для дома",
  },
])
</script>

<template>
  <AppTitle>Мои карты</AppTitle>
  <div class="info border border-gray-1 rounded-xl bg-white flex items-center justify-center h-[84px] mb-6">
    <span class="text-gray">У вас ещё нет выпущенных карт</span>
  </div>
  <div class="card-list pb-[88px]">
    <h2 class="font-medium text-2xl text-black mb-4">Доступные предложения</h2>
    <CardItem v-for="item in cards" :key="item.id" :card="item"/>
  </div>
</template>

<style scoped>

</style>