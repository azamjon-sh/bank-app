<script setup>

const dataStore = useDataStore()
const loading = ref(true)
const {$axios} = useNuxtApp()
$axios.get('users/me').then((res) => {
  if (res.data.id) {
    dataStore.user = res.data
  }
}).finally(() => {
  loading.value = false
})

</script>

<template>
  <main class="bg-default h-screen max-h-screen overflow-y-auto">
    <template v-if="!loading">
      <div class="w-full max-w-[425px] p-4 mx-auto  pb-[128px]" v-if="dataStore.user">
        <slot></slot>
        <AppMenu/>
      </div>
      <div class="h-screen max-w-[425px] mx-auto p-4" v-else>
        <AppAuthenticate/>
      </div>
    </template>
  </main>

</template>

<style scoped>

</style>