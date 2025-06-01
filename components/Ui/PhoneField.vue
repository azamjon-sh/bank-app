<template>
  <div class="phone-form pt-[50px]">
    <div class="phone-logo w-20 mb-8 ">
      <img class="w-full h-auto]:" src="@/assets/images/ai.png" alt="">
    </div>
    <AppTitle class="text-left mb-6">Введите номер телефона</AppTitle>

    <div class="phone-input flex bg-white border-gray-1 rounded-lg py-3 text-lg font-normal">
      <span class="prefix border-r border-gray-1 w-[60px] flex justify-center items-center mr-3">+7</span>
      <input
          v-model="phone"
          type="text"
          placeholder="Номер телефона"
          inputmode="numeric"
          class="border-none outline-none grow"
          @input="formatPhone"
      />
    </div>

    <p class="text-red text-sm">
      {{ errors}}
    </p>

    <label class="checkbox mt-4 flex gap-4 items-center text-left cursor-pointer">
      <input type="checkbox" v-model="agreed" class="hidden"/>
      <span class="checkmark relative min-w-5 w-5 h-5 rounded-md flex items-center justify-center"
            :class="agreed?'checked bg-green':'bg-gray-1'"></span>
      <span class="grow text-gray">
        Я соглашаюсь с
        <a href="/policy" class="text-[#0069F2] decoration-transparent" target="_blank">политикой конфиденциальности</a>
      </span>
    </label>

    <AppButton :disabled="!isValid" @click="submit" class="mt-14">
      Продолжить
    </AppButton>
  </div>
</template>

<script setup>
import axios from "axios";

const {$axios} = useNuxtApp()

const props = defineProps({
  modelValue: {
    type: String,
  }
});
const emit = defineEmits(['sendPhone', 'update:modelValue']);
const phone = computed({
  get() {
    return props.modelValue;
  },
  set(newValue) {
    emit('update:modelValue', newValue)
  }
});
const agreed = ref(false)

const formatPhone = () => {
  phone.value = phone.value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4')
      .slice(0, 13)
}
const getPhoneForSubmit = () => {
  const digits = phone.value.replace(/\D/g, '')
  return '+7' + digits
}

const isValid = computed(() => phone.value.replace(/\D/g, '').length === 10 && agreed.value)
const errors = ref(null)
const submit = () => {
  errors.value = null
  $axios.post('users/signin', {
    contact: getPhoneForSubmit(),
    agreementAccepted: agreed.value
  }).then((response) => {
    emit('sendPhone', response.data)
  }).catch((error) => {
    errors.value = error.response.data.error.description;
  })
}
</script>

<style scoped>

.checkmark.checked::after {
  content: '✔';
  color: white;
}

</style>
