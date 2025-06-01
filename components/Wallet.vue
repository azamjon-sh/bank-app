<script setup>
import {useDataStore} from "~/stores/dataStore.js";
const dataSore = useDataStore()
const {$axios} = useNuxtApp()
const step = ref(0)
const balance = ref(0)
const formatPrice = (price) => {
  let integerAmount = parseInt(price.value)
  return integerAmount.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + " " + (price.currency === 'RUB' ? '₽' : '$')
}
onMounted(() => {
  $axios.get('transactions/balance').then((res) => {
    balance.value = res.data
  })
})

function nextStep() {
  if (step.value === 1) step.value++
  else step.value = 0;
}
</script>

<template>
  <h3 class="home-title pt-2">
    Привет {{ dataSore.user?.name ? `, ${dataSore.user?.name}` : '' }}!
  </h3>
  <div class="home-wallet flex gap-2 items-center mt-4">
    <AppIcon icon="wallet" width="40" height="40"/>
    <div class="flex grow">
      <div class="wallet-text text-gray">
        Твой баланс
        <div class="text-black text-2xl font-medium" v-if="balance">
          {{ formatPrice(balance) }}
        </div>
      </div>
    </div>
    <AppButtonArrow @click="step = 1"/>
  </div>

  <AppModal v-show="step >= 1" @closeModal="step = 0">
    <transition>
      <div class="flex flex-col items-center">
        <img src="@/assets/images/withdraw.svg" alt="" class="w-auto h-14" v-if="step === 1">
        <div class="rewards-title mt-2 text-black grow font-medium text-2xl">
          {{ step === 1 ? 'Вывод на карту банка' : 'Вывод недоступен' }}
        </div>
        <div class="rewards-subtitle text-gray text-lg mt-2 px-6" v-if="step === 1">Для полноценного использования
          сервиса сначала выполни первый шаг и закажи банковскую карту. Ты сможешь выводить бонусы на эту карту в один
          клик.
        </div>
        <div class="rewards-subtitle text-gray text-lg mt-2 px-6" v-else-if="step === 2">По техническим причинам.
          Пожалуйста подождите, мы устраняем проблему.
        </div>
        <AppButton class="mt-6" @click="nextStep">Хорошо</AppButton>
      </div>
    </transition>
  </AppModal>
</template>

<style scoped>

</style>