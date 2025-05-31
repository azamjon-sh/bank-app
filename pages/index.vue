<template>
  <div class="home">
    <h3 class="home-title pt-2">
      Привет, Александр!
    </h3>
    <div class="home-wallet flex gap-2 items-center mt-4">
      <AppIcon icon="wallet" width="40" height="40"/>
      <div class="flex grow">
        <div class="wallet-text text-gray">
          Твой баланс
          <div class="text-black text-2xl font-medium">1 000 ₽</div>
        </div>
      </div>
      <AppButtonArrow/>
    </div>
    <UiField class="mt-6 h-auto min-h-[360px]">
      <h2 class="text-black text-2xl">Первый шаг <br/>к здоровому бюджету</h2>
      <AppTypeText
                   :text="textType" buttonText="Подобрать карту">
      </AppTypeText>

    </UiField>
    <Rewards/>
  </div>
</template>
<script setup>
import WelcomeSlider from "~/components/WelcomeSlider.vue";

const textType = 'Твои ежемсячные расходы примерно <span class="text-black font-medium">55 000 ₽.</span> Ты много тратишь на продукты и кафе. Прогнозирую, что помогу тебе экономить <span class="text-black font-medium">4 540 ₽ в месяц.</span><br/> Это <span class="text-black font-medium">8%</span> от твоих расходов. <br/><br/>Начнем с подбора наиболее выгодной банковской карты с учетом структуры твоих покупок.'
</script>