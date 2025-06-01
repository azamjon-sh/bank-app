<script setup>
import {Swiper, SwiperSlide} from 'swiper/vue'
import {Pagination} from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

const {$axios} = useNuxtApp()
const cards = ref([])
const myCard = ref({})

onMounted(() => {
  $axios.get('cards/my').then((res) => {
    myCard.value = res.data
  })

  $axios.get('cards').then((res) => {
    cards.value = res.data
  })
})
const textType = 'Твои ежемсячные расходы примерно <span class="text-black font-medium">55 000 ₽.</span> Ты много тратишь на продукты и кафе. Прогнозирую, что помогу тебе экономить <span class="text-black font-medium">4 540 ₽ в месяц.</span><br/> Это <span class="text-black font-medium">8%</span> от твоих расходов. <br/><br/>Начнем с подбора наиболее выгодной банковской карты с учетом структуры твоих покупок.'
const step = ref(4)
</script>

<template>
  <UiField class="mt-6 h-auto min-h-[200px] overflow-x-hidden">
    <template v-if="step === 1">
      <h2 class="text-black text-2xl">Первый шаг <br/>к здоровому бюджету</h2>
      <AppTypeText
          @addCard="step = 2"
          :text="textType" buttonText="Подобрать карту">
      </AppTypeText>
    </template>
    <template v-if="step === 2">
      <span class="text-gray mb-2">Первый шаг к здоровому бюджету</span>
      <h2 class="text-black text-2xl mb-2">Лучшие варианты с учетом структуры твоих покупок</h2>
      <span class="text-gray">Закажи доставку карты курьером, чтобы разблокировать дальнейшие действия </span>

      <Swiper
          :modules="[Pagination]"
          :pagination="{ clickable: true }"
          space-between="8"
          class="card-carousel mt-6"
      >
        <SwiperSlide v-for="item in cards" :key="item.id" class="card-carousel-item">
          <CardItem :card="item" blue></CardItem>
        </SwiperSlide>
      </Swiper>
    </template>

    <template v-if="step === 3">
      <h2 class="text-black text-2xl mb-2">Отлично! Ты уже заказал карту</h2>

      <div class="card__head bg-default flex gap-4 mb-4 items-center p-5 rounded-xl mt-4" v-if="cards.length">
        <img :src="cards[0].imageUrl" alt="" class="w-16 h-16 object-contain object-center">
        <h3 class="card__title text-lg text-black">
          {{ cards[0].title }}
          <span class="card__subtitle block text-sm text-gray">{{ cards[0].subtitle }}</span>
        </h3>
      </div>
      <span class="text-gray mt-4">
        Осталось получить карту у курьера  и сделать любую покупку на сумму  от 500 ₽ для активации карты. <br> <br>
        Если с момента получения карты прошло более 10 дней, то сообщите нам о проблеме.
        </span>

      <NuxtLink class="text-green decoration-transparent mt-6 inline-block" to="/">Сообщить о проблеме</NuxtLink>
    </template>

    <template v-if="step === 4">
      <h2 class="text-black text-2xl mb-2">Ты подключил карту 🎉</h2>

      <div class="card__head bg-default flex gap-4 mb-4 items-center p-5 rounded-xl mt-4" v-if="cards.length">
        <img :src="cards[0].imageUrl" alt="" class="w-16 h-16 object-contain object-center">
        <h3 class="card__title text-lg text-black">
          {{ cards[0].title }}
          <span class="card__subtitle block text-sm text-gray">{{ cards[0].subtitle }}</span>
        </h3>
      </div>
      <span class="text-gray mt-4">Ознакомьтесь с действующими акциями</span>
      <AppButton link="https://bonobi.ru/gpbpromo" target="_blank" class="mt-4">К акциям</AppButton>
    </template>
  </UiField>
</template>

<style>
.card-carousel.swiper {
  overflow: unset;
  width: 96%;

  .swiper-pagination {
    position: relative !important;
    margin-top: 16px;
    margin-bottom: -10px;

    .swiper-pagination-bullet {
      width: 8px;
      height: 8px;
    }

    .swiper-pagination-bullet-active {
      background: #0FB90F;
    }
  }
}

</style>