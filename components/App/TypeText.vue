<template>
  <div class="typing-text">
    <div  class=" max-w-[300px] mt-4">
      <span v-html="displayedText" class="text-gray"></span>
      <span class="cursor  rounded-full bg-green pl-5 ml-1 pt-[1px] h-5 leading-[20px]" ></span>
    </div>
    <template v-if="finished">
      <AppButton class="mt-4" @click="emit('addCard')">
        {{ buttonText }}
      </AppButton>
    </template>
  </div>
</template>

<script setup>
import {ref, onMounted, onBeforeUnmount} from 'vue'

const props = defineProps({
  text: String,
  buttonText: String,
})

const emit = defineEmits(['addCard'])
const displayedText = ref('')
const showCursor = ref(true)
const finished = ref(false)
let interval = null
let cursorBlink = null

onMounted(() => {
  typeText()
})

onBeforeUnmount(() => {
  clearInterval(interval)
  clearInterval(cursorBlink)
})

function typeText() {
  let index = 0
  finished.value = false
  interval = setInterval(() => {
    if (index < props.text.length) {
      displayedText.value += props.text[index]
      index++
    } else {
      clearInterval(interval)
      startCursorBlink()
    }
  }, 1)
}

function startCursorBlink() {
  finished.value = true
  cursorBlink = setInterval(() => {
    showCursor.value = !showCursor.value
  }, 500)
}
</script>

<style scoped>

</style>
