<script setup lang="ts">
const {$axios} = useNuxtApp()
const cards = ref([])
const myCard = ref(null)

onMounted(() => {
  $axios.get('cards/my').then((res) => {
    if (res.data.length)
      myCard.value = res.data
  })

  $axios.get('cards/offers').then((res) => {
    cards.value = res.data
  })
})

</script>

<template>
  <AppTitle>Мои карты</AppTitle>
  <UiField class="info border border-gray-1 rounded-xl bg-white flex items-center min-h-[84px] mb-6">
    <span class="text-gray text-center w-full inline-block" v-if="!myCard">У вас ещё нет выпущенных карт</span>
    <div v-else>
      <div class="card__head flex gap-4 items-center">
        <img :src="myCard.imageUrl" alt="" class="w-16 h-16 object-contain object-center">
        <h3 class="card__title text-lg text-black">
          {{ myCard.title }}
          <span class="card__subtitle block text-sm text-gray">{{ myCard.subtitle }}</span>
        </h3>
      </div>
      <div class="bg-default text-gray rounded-lg p-3 mt-4" v-if="myCard.problem">
        <h3 class="font-semibold mb-1">В процессе активации</h3>
        Для активации получите карту у курьера и сделайте любую покупку на сумму от 500 ₽
      </div>
    </div>
  </UiField>

  <div class="card-list pb-[88px]">
    <h2 class="font-medium text-2xl text-black mb-4">Доступные предложения</h2>
    <CardItem v-for="item in cards" :key="item.id" :card="item" class="mb-4"/>
  </div>
</template>

<style scoped>

</style>