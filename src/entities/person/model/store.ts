import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

export const usePersonStore = defineStore('person', () => {
  const isAuth = ref(false)
  const person = reactive({
    name: 'Алексей',
  })

  const setIsAuth = () => (isAuth.value = true)

  return { isAuth, person }
})
