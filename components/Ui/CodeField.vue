<template>
  <div class="sms-code-input">
    <h2>Введите код из СМС</h2>
    <p>Мы отправили на указанный Вами номер +7 986 941 94 77</p>
    <div class="code-inputs">
      <input
          v-for="(digit, index) in code"
          :key="index"
          ref="inputs"
          v-model="code[index]"
          type="text"
          inputmode="numeric"
          maxlength="1"
          @input="onInput(index)"
          @keydown.backspace="onBackspace(index, $event)"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
  }
});
const emit = defineEmits(['update:modelValue']);

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
  }
}

const onBackspace = (index, event) => {
  if (!code.value[index] && index > 0) {
    inputs.value[index - 1].focus()
  }
}
</script>

<style scoped>
.sms-code-input {
  text-align: center;
  padding: 20px;
}

.code-inputs {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
}

.code-inputs input {
  width: 40px;
  height: 50px;
  font-size: 32px;
  text-align: center;
  border: 2px solid #ccc;
  border-radius: 6px;
  transition: border-color 0.3s;
}

.code-inputs input:focus {
  outline: none;
  border-color: #2196f3;
}
</style>
