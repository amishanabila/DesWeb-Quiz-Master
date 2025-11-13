<template>
  <div>
    <div
      v-if="showNamePopup"
      class="fixed inset-0 bg-white/50 flex justify-center items-center z-50"
    >
      <div class="bg-white p-8 rounded shadow text-center w-[90%] max-w-md">
        <h2 class="text-2xl font-bold mb-4">Masukkan Nama Anda</h2>

        <input
          v-model="userName"
          type="text"
          placeholder="Nama Anda"
          class="border-b-2 border-gray-400 outline-none text-center py-2 w-full mb-2"
          @focus="clearError"
        />

        <p v-if="errorMessage" class="text-red-500 text-sm mb-4">{{ errorMessage }}</p>

        <button
          @click="handleNameSubmit"
          class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded transition-colors"
        >
          OK
        </button>
      </div>
    </div>

    <div
      v-if="showConfirmPopup"
      class="fixed inset-0 bg-white/50 flex justify-center items-center z-50"
    >
      <div class="bg-white p-8 rounded shadow text-center w-[90%] max-w-md">
        <h2 class="text-2xl font-bold mb-6">Silahkan Mulai Kuisnya</h2>

        <div class="flex justify-center gap-4">
          <button
            @click="cancelQuiz"
            class="bg-red-500 hover:bg-red-700 text-white px-4 py-4 font-semibold rounded transition-colors"
          >
            Tidak
          </button>
          <button
            @click="confirmStart"
            class="bg-blue-500 hover:bg-blue-700 text-white px-4 font-semibold py-4 rounded transition-colors"
          >
            Mulai
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'
import { useRouter } from 'vue-router'

const emit = defineEmits(['close'])
const router = useRouter()

const showNamePopup = ref(true)
const showConfirmPopup = ref(false)
const userName = ref('')
const errorMessage = ref('')

const handleNameSubmit = () => {
  if (userName.value.trim() === '') {
    errorMessage.value = 'Nama tidak boleh kosong!'
    return
  }
  showNamePopup.value = false
  showConfirmPopup.value = true
}

const clearError = () => {
  errorMessage.value = ''
}

const cancelQuiz = () => {
  emit('close')
  router.push({ name: 'Home' })
}

const confirmStart = () => {
  localStorage.setItem('currentUser', userName.value)
  router.push({ name: 'Kuis' })
  emit('close')
}
</script>
