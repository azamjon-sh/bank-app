<template>
  <AppTitle>Профиль</AppTitle>

  <div class="" v-if="profile.phone"><h4 class="text-gray mb-2 text-sm">Телефон</h4>
    <div
        class="rounded-lg border-gray-1 flex text-black justify-between border bg-[#E8EBF2] px-3 items-center h-11 mb-4">
      {{ profile.phone }}
      <AppIcon icon="lock"></AppIcon>
    </div>
  </div>
  <div class="" v-if="profile.email"><h4 class="text-gray mb-2 text-sm">E-mail</h4>
    <div
        class="rounded-lg border-gray-1 flex text-black justify-between border bg-[#E8EBF2] px-3 items-center h-11 mb-4">
      {{ profile.email }}
      <AppIcon icon="lock"></AppIcon>
    </div>
  </div>
  <div class="" v-if="profile.name"><h4 class="text-gray mb-2 text-sm">Имя</h4>
    <div
        class="rounded-lg border-gray-1 flex text-black justify-between border bg-[#E8EBF2] px-3 items-center h-11 mb-4">
      {{ profile.name }}
      <AppIcon icon="lock"></AppIcon>
    </div>
  </div>
  <div class="" v-if="profile.age"><h4 class="text-gray mb-2 text-sm">Возраст</h4>
    <div
        class="rounded-lg border-gray-1 flex text-black justify-between border bg-[#E8EBF2] px-3 items-center h-11 mb-4">
      {{ profile.age }}
      <AppIcon icon="lock"></AppIcon>
    </div>
  </div>
  <div class="" v-if="profile.car"><h4 class="text-gray mb-2 text-sm">Автомобиль</h4>
    <div
        class="rounded-lg border-gray-1 flex text-black justify-between border bg-[#E8EBF2] px-3 items-center h-11 mb-4">
      {{ profile.car }}
      <AppIcon icon="lock"></AppIcon>
    </div>
  </div>
  <div class="" v-if="profile.pet"><h4 class="text-gray mb-2 text-sm">Питомец</h4>
    <div
        class="rounded-lg border-gray-1 flex text-black justify-between border bg-[#E8EBF2] px-3 items-center h-11 mb-4">
      {{ profile.pet }}
      <AppIcon icon="lock"></AppIcon>
    </div>
  </div>

  <div class="flex justify-center items-center mt-7 gap-4 cursor-pointer" @click="modalOpen = true">
    <AppIcon icon="logout" width="32" height="32"/>
    <span class="text-red">Удалить профиль</span>
  </div>

  <AppModal @closeModal="modalOpen = false" v-if="modalOpen">
    <div class="rewards-title mt-2 text-black grow font-medium text-2xl">
      Вы уверены, что хотите удалить профиль?
    </div>
    <div class="rewards-subtitle text-gray text-lg mt-2 px-6">
      Восстановить данные и средства на балансе будет невозможно
    </div>
    <div class="flex mt-8 gap-2 w-full">
      <AppButton class="grow" red @click="acceptDelete">Удалить</AppButton>
      <AppButton class="grow" @click="modalOpen=false">Отмена</AppButton>
    </div>
  </AppModal>
</template>
<script setup>
import {useDataStore} from "~/stores/dataStore.js";

const {$axios} = useNuxtApp()
const dataStore = useDataStore()
const profile = computed(() => dataStore.user)
const modalOpen = ref(false)

const acceptDelete = (item) => {

  $axios.delete('users/me').then((res) => {
    window.location.href = '/'
  })
}
</script>