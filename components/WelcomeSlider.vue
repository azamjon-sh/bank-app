<script setup>
import {Navigation, Pagination} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const emit = defineEmits(['finished']);

const swiperRef = ref(null);
const currentIndex = ref(0);

const swiperToNext = () => {
  swiperRef.value?.slideNext();
  if (currentIndex.value >= 2) {
    console.log('finish')
    emit('finished')
  }
};

const swiperToPrev = () => {
  swiperRef.value?.slidePrev();
};

const onSwiper = (swiper) => {
  swiperRef.value = swiper;
  currentIndex.value = swiper.activeIndex;
};

const onSlideChange = (swiper) => {
  currentIndex.value = swiper.activeIndex;
};
</script>

<template>
  <div class="welcome-back transition-all p-2 flex justify-start " :class="currentIndex?'opacity-1':'opacity-0'"
       @click="swiperToPrev">
    <AppIcon icon="back" class="" width="32" height="32"/>
  </div>
  <div class="welcome-container relative">
    <swiper
        class="welcome-slider relative"
        :slides-per-view="1"
        :modules="[Pagination, Navigation]"
        :pagination="false"
        auto-height
        :space-between="50"
        :effect="'fade'"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
    >
      <swiper-slide class="welcome-slide">
        <div class="flex flex-col items-center">
          <div class="h-[360px] flex items-center justify-center">
            <img src="@/assets/images/slide-1.png" alt="" class="max-h-full w-auto h-full">
          </div>
          <p class="slide-text mt-14 text-2xl text-center font-medium">Помогаю экономить <br>
            до 10% от ежемесячных <br> расходов</p>
        </div>
      </swiper-slide>
      <swiper-slide class="welcome-slide">
        <div class="flex flex-col items-center">
          <div class="h-[360px] flex items-center justify-center">
            <img src="@/assets/images/slide-2.png" alt="" class="max-h-full w-auto h-full">
          </div>
          <p class="slide-text mt-14 text-2xl text-center font-medium">Просто спроси меня <br>
            и увидешь настоящую <br> магию</p>
        </div>
      </swiper-slide>
      <swiper-slide class="welcome-slide">
        <div class="flex flex-col items-center">
          <div class="h-[360px] flex items-center justify-center">
            <img src="@/assets/images/slide-3.png" alt="" class="max-h-full w-auto h-full">
          </div>
          <p class="slide-text mt-14 text-lg text-center font-medium">Анализирую миллионы данных из чеков, магазинов,
            tg-каналов, промокодных витрин каждый
            день, чтобы всегда находить лучшие варианты по твоему запросу.</p>
        </div>
      </swiper-slide>
    </swiper>

    <div class="flex justify-between pb-[60px] mt-[52px]">
      <AppButton @click="swiperToNext">{{ currentIndex === 2 ? 'Зарегистрироваться' : 'Далее' }}</AppButton>
    </div>

    <div class="flex justify-center w-full gap-2 absolute top-[380px]">
      <span
          v-for="(dot, index) in 3"
          :key="index"
          class="w-2 h-2 rounded-full"
          :class="currentIndex === index ? 'bg-green' : 'bg-gray-1'"
      ></span>
    </div>
  </div>
</template>

<style scoped>
</style>