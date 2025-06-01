<template>
  <Wallet/>
  <MakeCard/>
  <Rewards/>
</template>
<script setup>

const {$axios} = useNuxtApp()

const expenses = ref('')
onMounted(() => {

  $axios.get('expenses').then((res) => {
    expenses.value = res.data
  })
})


</script>