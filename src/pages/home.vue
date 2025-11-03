<template>
  <div id="home-page" class="min-h-screen flex flex-col bg-gray-50 text-gray-800">
    <!-- Header -->
    <Header />

    <!-- Body -->
    <main
      class="flex flex-col justify-center items-center flex-grow min-h-[82vh] py-8 px-12 bg-gray-50 text-center"
    >
      <div class="max-w-2xl">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
          Uji Pengetahuan Anda!
        </h1>
        <p class="text-lg text-gray-600 mb-8">
          Selamat datang di
          <span class="font-semibold text-blue-600">QuizMaster</span>. Siap untuk memulai tantangan?
        </p>

        <!-- Tombol mulai kuis (tengah) -->
        <div class="flex justify-center">
          <button
            @click="openPopup"
            class="bg-blue-500 text-white py-4 px-8 rounded font-semibold hover:bg-blue-700 transition-colors duration-300"
          >
            Mulai Kuis
          </button>
        </div>
      </div>

      <!-- Popup muncul ketika user klik tombol -->
      <Popup v-if="showPopup" @close="closePopup" />
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'
import Popup from '@/components/popup.vue'

const showPopup = ref(false)

const openPopup = () => {
  showPopup.value = true
}

const closePopup = () => {
  showPopup.value = false
}
</script>

<style scoped>
#home-page {
  font-family: 'Poppins', sans-serif;
}
</style>
