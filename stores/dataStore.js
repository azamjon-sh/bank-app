import {defineStore} from "pinia";

export const useDataStore = defineStore('dataStore', {
    state: () => ({
        phoneData: null,
        user: null,
    }),

    actions: {
        async submitPhone() {
            const {$axios} = useNuxtApp()
            $axios.post('users/signin', {
                "contact": "+77777775555",
                "agreementAccepted": true
            }).then((response) => {
                console.log(response)
            })
        },
    },
})