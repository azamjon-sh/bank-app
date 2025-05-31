<script setup lang="ts">
const props = defineProps({
  card: {
    type: Object,
    required: true
  }
})
const grid = ref([
  {key: 'cashback', title: 'Кэшбэк'},
  {key: 'service', title: 'Обслуживание'},
  {key: 'rest', title: 'Процент на остаток'},
  {key: 'transfers', title: 'Процент на остаток'},
  {key: 'price', title: 'Стоимость'},
])
</script>

<template>
  <div class="card bg-white rounded-xl p-4 mb-4" v-if="card">
    <div class="card__head flex gap-4 mb-4">
      <img src="/assets/images/gasprom.png" alt="">
      <h3 class="card__title text-lg text-black">
        {{ card.title }}
        <span class="card__subtitle block text-sm text-gray">{{ card.type }}</span>
      </h3>
    </div>

    <div class="card__grid grid grid-cols-2 gap-4 mb-4">
      <template v-for="item in grid">
        <div class="card__grid__item" v-if="card[item.key]">
          <div class="card__grid__head text-sm text-gray">{{ item.title }}</div>
          <div class="card__grid__value text-lg text-black">{{ card[item.key] }}</div>
        </div>
      </template>
    </div>

    <div class="card__categories mb-4">
      <div class="card__categories__head text-sm text-gray">Повышенный кэшбэк на категории:</div>
      <div class="card__categories__value text-lg text-black">{{ card.categories }}</div>
    </div>

    <AppButton >Заказать карту</AppButton>


  </div>
</template>

<style scoped>

</style>