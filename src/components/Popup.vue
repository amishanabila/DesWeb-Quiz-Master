<template>
  <div>
    <div
      v-if="showNamePopup"
      class="fixed inset-0 bg-white/50 flex justify-center items-center z-50"
    >
      <div class="bg-white p-8 rounded shadow text-center w-[90%] max-w-md relative">
        <!-- Button X di pojok kanan -->
        <button
          @click="cancelQuiz"
          class="absolute right-4 top-4 w-8 h-8 flex items-center justify-center rounded-full bg-red-500 hover:bg-red-600 text-white transition duration-200 shadow-md"
          title="Batalkan"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </button>

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
