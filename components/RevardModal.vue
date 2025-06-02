<script setup>

const {$axios} = useNuxtApp()
const emit = defineEmits(['closeModal'])
const props = defineProps({
  activeId: {
    required: true,
    type: Object
  }
})

const closeModal = () => {
  task.value = {}
  emit('closeModal')
}

const task = ref({})

$axios.get(`tasks/${props.activeId}`).then((res) => {
  task.value = res.data
})
</script>
<template>
  <AppModal @closeModal="closeModal">
    <AppIcon icon="close" width="32" height="32" @click="closeModal" class="right-5 top-5 absolute cursor-pointer"/>
    <img :src="task.imageUrl" alt="" class="w-20 h-auto">
    <div class="rewards-title mt-2 text-black grow font-medium text-2xl">
      {{ task.title }}
    </div>
    <div class="rewards-subtitle text-gray text-lg mt-2 px-6">{{ task.description }}</div>
    <div class="rewards-amount bg-green rounded-full text-2xl text-white text-center py-2 px-3 mt-4">
      +{{ task.reward?.value }} {{ task.reward?.currency === 'RUB' ? '₽' : '$' }}
    </div>
    <AppButton :disabled="!task.button?.enabled" :link="task.button?.url" class="mt-8">{{ task.button?.title }}
    </AppButton>
  </AppModal>
</template>

<style scoped>

</style>