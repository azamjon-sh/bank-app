<script setup>
const {$axios} = useNuxtApp()

const tasks = ref([])
const activeTask = ref(null)

onMounted(() => {
  $axios.get('tasks').then((res) => {
    tasks.value = res.data
  })
})

function openTask(id) {
  let task = tasks.value.find((item) => item.id === id)
  if (!task.completed) {
    activeTask.value = task.id
  }
}
</script>

<template>
  <div class="rewards" v-if="tasks.length">
    <h2 class="text-2xl text-black my-6 font-medium">Получи награду за действия</h2>
    <div class="rewards-list">
      <UiField class="rewards-item relative px-3 h-auto mb-4"
               v-for="task in tasks" :key="task.id" @click="openTask(task.id)">
        <AppIcon v-if="task.completed" icon="check" class="absolute top-[-8px] right-[-8px] " width="32"
                 height="32"></AppIcon>
        <div :class="['flex items-center justify-between gap-2 ',{'opacity-50':task.completed}]">
          <div class="rewards-image w-12 h-12">
            <img :src="task.imageUrl" alt="" class="w-full">
          </div>
          <div class="rewards-text text-black grow font-medium text-lg">
            {{ task.title }}
            <div class="text-gray text-sm">{{ task.subtitle }}</div>
          </div>
          <div class="rewards-amount bg-green rounded-full text-lg text-white text-center py-1 w-20">
            +{{ task.reward?.value }} {{ task.reward?.currency === 'RUB' ? '₽' : '$' }}
          </div>
        </div>
      </UiField>
      <RevardModal v-if="activeTask" :activeId="activeTask" @close-modal="activeTask = null"/>
    </div>

  </div>
</template>

<style scoped>

</style>