import { defineStore } from 'pinia'

export const useDataStore = defineStore({
  id: 'my-info',
  state: () => ({
    name: 'Carlos Ramirez',
    profile: 'FullStack Dev'
  }),
  getters: {
    name: (state) => state.name,
    profile: (state) => state.profile
  },
  actions: {
    increment() {
      this.counter++
    }
  }
})
