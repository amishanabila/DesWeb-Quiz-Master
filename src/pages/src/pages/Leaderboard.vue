<template>
  <div>
    <Header />

    <main
      class="flex flex-col md:flex-row justify-center items-center mb-1 mt-[-3px] min-h-[82vh] py-8 px-4 md:px-12 bg-gray-50 text-center md:text-left"
    >
      <div class="w-full md:w-1/2 mb-10 md:mb-0">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Leaderboard</h1>

        <div class="max-h-[300px] overflow-y-auto border rounded p-4 bg-white shadow">
          <ul class="text-sm md:text-lg text-gray-700 space-y-2">
            <li
              v-for="(item, index) in leaderboard"
              :key="index"
              class="flex justify-between w-full max-w-xs mx-auto md:mx-0"
            >
              <span>{{ index + 1 }}. {{ item.name }}</span>
              <span class="font-semibold">{{ item.score }}/{{ item.total }}</span>
            </li>
          </ul>

          <button
            @click="showDeletePopup = true"
            class="mt-6 w-full py-2.5 rounded font-semibold text-white transition 
                   bg-blue-500 hover:bg-blue-700"
          >
            Reset Leaderboard
          </button>
        </div>
      </div>

      <div class="flex justify-center md:justify-end w-full md:w-1/2 mb-10">
        <img src="@/assets/logo.png" alt="QuizMaster Logo" class="w-75 md:w-100 object-contain" />
      </div>
    </main>

    <Footer />

    <div
      v-if="showDeletePopup"
      class="fixed inset-0 bg-white/50 flex justify-center items-center z-50"
    >
      <div class="bg-white p-8 rounded shadow text-center w-[90%] max-w-md">
        <h2 class="text-2xl font-bold mb-6">
          Yakin ingin menghapus seluruh data leaderboard?
        </h2>

        <div class="flex justify-center gap-4">
          <button
            @click="showDeletePopup = false"
            class="bg-red-500 hover:bg-red-700 text-white px-4 py-4 font-semibold rounded transition-colors"
          >
            Tidak
          </button>
          <button
            @click="confirmDeleteLeaderboard"
            class="bg-blue-500 hover:bg-blue-700 text-white px-4 font-semibold py-4 rounded transition-colors"
          >
            Ya
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

const leaderboard = ref([])
const showDeletePopup = ref(false)

onMounted(() => {
  leaderboard.value = JSON.parse(localStorage.getItem('leaderboard')) || []
})

function confirmDeleteLeaderboard() {
  localStorage.removeItem('leaderboard')
  leaderboard.value = []
  showDeletePopup.value = false
}
</script>

<style scoped>
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
