<script setup>

const showSlider = ref(true)

const phone = ref('')
const activePhone = ref(true)
const code = ref('888000')
const phoneData = ref(null)
const sendPhone = (data) => {
  activePhone.value = false
  phoneData.value = data
}

</script>

<template>
  <div class="h-screen max-w-[425px] mx-auto p-4" v-if="showSlider">
    <WelcomeSlider @finished="showSlider = false"/>
  </div>
  <template v-else>
    <UiPhoneField v-if="activePhone" v-model="phone" @sendPhone="sendPhone"/>
    <UiCodeField v-else :phoneData="phoneData" v-model="code" @back="activePhone = true" @sendAgain="activePhone = true"/>
  </template>

</template>

<style scoped>

</style>