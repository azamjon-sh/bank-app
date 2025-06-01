<script setup lang="ts">
const props = defineProps({
  card: {
    type: Object,
    required: true
  }, blue: Boolean
})

</script>

<template>
  <div class="card  rounded-xl p-4 " v-if="card" :class="blue?'bg-default':'bg-white'">
    <div class="card__head flex gap-4 mb-4 items-center">
      <img :src="card.imageUrl" alt="" class="w-16 h-16 object-contain object-center">
      <h3 class="card__title text-lg text-black">
        {{ card.title }}
        <span class="card__subtitle block text-sm text-gray">{{ card.subtitle }}</span>
      </h3>
    </div>

    <div class="card__grid grid grid-cols-2 gap-4 mb-4">
      <div class="card__grid__item">
        <div class="card__grid__head text-sm text-gray">Кэшбэк</div>
        <div class="card__grid__value text-lg text-black">до {{ card.cashbackUpTo }}%</div>
      </div>

      <div class="card__grid__item">
        <div class="card__grid__head text-sm text-gray">Стоимость</div>
        <div class="card__grid__value text-lg text-black">{{
            card.price.value ? card.price.value + ' ₽' : 'Бесплатно'
          }}
        </div>
      </div>

      <div class="card__grid__item">
        <div class="card__grid__head text-sm text-gray">Процент на остаток</div>
        <div class="card__grid__value text-lg text-black">до {{ card.interestOnBalanceUpTo }}%</div>
      </div>

      <div class="card__grid__item">
        <div class="card__grid__head text-sm text-gray">Переводы без&nbsp;комиссий</div>
        <div class="card__grid__value text-lg text-black">{{
            card.transfersWithoutFees.value ? card.transfersWithoutFees.value + ' ₽' : 'Бесплатно'
          }}
        </div>
      </div>
    </div>

    <div class="card__categories mb-4">
      <div class="card__categories__head text-sm text-gray">Повышенный кэшбэк на категории:</div>
      <div class="card__categories__value text-lg text-black">{{ card.cashbackCategories }}</div>
    </div>

    <AppButton :link="card.button.url">{{ card.button.title }}</AppButton>

  </div>
</template>

<style scoped>

</style>