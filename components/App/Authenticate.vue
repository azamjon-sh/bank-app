<script setup>

const phone = ref('')
const code = ref('888000')

const onResponse = (data)=>{
  console.log(data)
}

</script>

<template>
  <UiPhoneField v-model="phone" @onResponce="onResponse"/>
  <UiCodeField v-model="code"/>
</template>

<style scoped>

</style>