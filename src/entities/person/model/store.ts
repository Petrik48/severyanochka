import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import { type Person } from './types.ts'

export const usePersonStore = defineStore('person', () => {
  const isAuth = ref<boolean>(false)
  const person = reactive<Person>({
    name: 'Алексей',
  })

  const setIsAuth = (value: boolean): void => {
    isAuth.value = value
  }

  return { isAuth, person, setIsAuth }
})
