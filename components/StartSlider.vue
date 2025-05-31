<template>
  <Swiper
      :modules="[Pagination]"
      :pagination="{ clickable: true }"
      class="h-screen"
  >
    <SwiperSlide>
      <div class="flex flex-col items-center justify-between h-full p-6">
        <!-- Верхняя часть -->
        <div class="flex flex-col items-center">
          <img src="@/assets/images/slide-1.png" alt="">
          <p class="slide-text">Помогаю экономить <br>
            до 10% от ежемесячных <br> расходов</p>
        </div>

        <!-- Кнопка -->
        <button class="bg-green-500 text-white w-full py-3 rounded-xl text-lg">
          Далее
        </button>
      </div>
    </SwiperSlide>

    <SwiperSlide>
      <div class="flex flex-col items-center justify-between h-full p-6">
        <div class="flex flex-col items-center">
          <img src="@/assets/images/slide-2.png" alt="">
          <p class="slide-text">Просто спроси меня <br>
            и увидешь настоящую <br> магию</p>
        </div>

        <!-- Кнопка -->
        <button class="bg-green-500 text-white w-full py-3 rounded-xl text-lg">
          Далее
        </button>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
</script>

<style scoped>
.swiper-pagination-bullet {
  background: #bbb;
  opacity: 1;
}
.swiper-pagination-bullet-active {
  background: #00c853;
}
</style>
