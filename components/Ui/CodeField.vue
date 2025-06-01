<template>
  <div class="sms-code-input text-center pt-2">
    <div class="transition-all p-2 flex justify-start mb-6 text-black cursor-pointer"
         @click="emit('back')">
      <AppIcon icon="back" class="" width="32" height="32"/>
    </div>
    <h2 class="text-2xl font-medium mb-2 text-dark-blue">Введите код из СМС</h2>
    <p class="text-gray">Мы отправили на указанный Вами <br> номер +7 986 941 94 77</p>
    <div class="code-inputs flex justify-center gap-2 mt-6">
      <input
          v-for="(digit, index) in code"
          :key="index"
          ref="inputs"
          v-model="code[index]"
          type="text"
          inputmode="numeric"
          maxlength="1"
          @input="onInput(index)"
          class="w-9 caret-green h-16 font-semibold text-[56px] border-b-2 text-center bg-transparent focus:outline-none"
          :class="!error ? 'text-black border-gray-1' : 'text-red border-red' "
          @keydown.backspace="onBackspace(index, $event)"
      />
    </div>
    <ui-code-timer v-if="phoneData?.newCodeCanBeRequestedAfter" :time="phoneData.newCodeCanBeRequestedAfter"
                   @sendAgain="emit('sendAgain')"></ui-code-timer>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'


const router = useRouter()

const {$axios} = useNuxtApp()
const props = defineProps({
  modelValue: {
    type: String,
  },
  phoneData: {
    required: true,
  }
});

const error = ref('')
const emit = defineEmits(['back', 'update:modelValue', 'sendAgain']);

const verifyCode = computed({
  get() {
    return props.modelValue;
  },
  set(newValue) {
    emit('update:modelValue', newValue)
  }
});
const length = 6
const code = ref(Array(length).fill(''))
const inputs = ref([])

onMounted(() => {
  inputs.value[0].focus()
})

const onInput = (index) => {
  if (code.value[index].length > 0 && index < length - 1) {
    inputs.value[index + 1].focus()
  } else {
    $axios.post('users/signin/confirm', {
      ...props.phoneData,
      "code": code.value.join(),
      "agreementAccepted": true,
      // "quizToken": "47c4f9bc-b32c-425f-8ff4-81799b1139de",
    }).then((response) => {
      window.location.reload()
    }).catch((err) => {
      error.value = err
    })
  }
}

const onBackspace = (index, event) => {
  error.value = null;
  if (!code.value[index] && index > 0) {
    inputs.value[index - 1].focus()
  }
}

</script>

<style scoped>
.code-inputs input:nth-child(3) {
  margin-right: 16px;
}
</style>
