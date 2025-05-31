<template>
  <div class="typing-text">
    <div  class=" max-w-[300px] mt-4">
      <span v-html="displayedText" class="text-gray"></span>
      <span class="cursor w-5 h-5 rounded-full bg-green pl-5 ml-1 " :class="showCursor?'opacity-1':'opacity-0'"></span>
    </div>
    <template v-if="finished">
      <AppButton class="mt-4" :link="buttonLink">
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
  buttonLink: String,
})
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
  }, 25)
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
