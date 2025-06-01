<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  time:{
    required: true,
  }
})

const newCodeCanBeRequestedAfter = new Date(props.time)
const timeLeft = ref('')
const canResend = ref(false)
let interval

function updateTimer() {
  const now = new Date()
  const diff = Math.max(0, Math.floor((newCodeCanBeRequestedAfter - now) / 1000))

  if (diff === 0) {
    canResend.value = true
    timeLeft.value = ''
    clearInterval(interval)
  } else {
    const minutes = Math.floor(diff / 60)
    const seconds = diff % 60
    timeLeft.value = `${minutes}:${seconds.toString().padStart(2, '0')}`
  }
}

onMounted(() => {
  updateTimer()
  interval = setInterval(updateTimer, 1000)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<template>
  <div class="font-semibold text-center mt-12" >
    <span v-if="!canResend" class="text-gray block">Отправить повторно через {{ timeLeft }}</span>
    <span v-else class="text-green" @click="$emit('sendAgain')">Отправить повторно</span>
  </div>

</template>
