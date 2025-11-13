<template>
  <div id="home-page" class="min-h-screen flex flex-col bg-gray-50 text-gray-800">
    <Header />

    <main
      class="flex flex-col justify-center items-center flex-grow min-h-[82vh] py-8 px-4 md:px-12 text-center relative"
      :style="{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroBackground})`,
        backgroundSize: '100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      
      }"
    >
      <div class="max-w-2xl relative z-10 px-4">
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
          Uji Pengetahuan Anda!
        </h1>
        <p class="text-base md:text-lg text-white mb-8 drop-shadow-md">
          Selamat datang di
          <span class="font-semibold text-blue-300">QuizMaster</span>. Siap untuk memulai tantangan?
        </p>

        <div class="flex justify-center">
          <button
            @click="openPopup"
            class="bg-blue-500 text-white py-3 md:py-4 px-6 md:px-8 rounded font-semibold hover:bg-blue-600 transition-colors duration-300 shadow"
          >
            Mulai Kuis
          </button>
        </div>
      </div>

      <Popup v-if="showPopup" @close="closePopup" />
    </main>

    <section class="py-12 md:py-16 px-4 md:px-8 bg-white">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-8 md:mb-12">
          Kenapa Memilih QuizMaster?
        </h2>
        
        <div class="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div class="flex-1">
            <h3 class="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">Tingkatkan Pengetahuanmu dengan Cara Menyenangkan</h3>
            <p class="text-sm md:text-base text-gray-600 leading-relaxed mb-3 md:mb-4">
              Kami menyajikan <span class="font-semibold text-blue-600">10 soal acak</span> dari berbagai topik informatika setiap kali Anda bermain. Dari AI & Machine Learning hingga Jaringan Komputer, semua ada di sini untuk mengasah kemampuan Anda.
            </p>
            <p class="text-sm md:text-base text-gray-600 leading-relaxed mb-3 md:mb-4">
              <span class="font-semibold">Kompetisi Real-Time:</span> Lihat posisi Anda di leaderboard dan tantang diri untuk mencapai skor tertinggi. Sistem penilaian yang adil memastikan setiap usaha Anda dihargai.
            </p>
            <p class="text-sm md:text-base text-gray-600 leading-relaxed mb-3 md:mb-4">
              <span class="font-semibold">Timer Challenge:</span> Setiap soal memiliki batas waktu 30 detik untuk menguji kemampuan berpikir cepat Anda. Semakin cepat menjawab dengan benar, semakin tinggi kesempatan Anda di puncak leaderboard!
            </p>
            <p class="text-sm md:text-base text-gray-600 leading-relaxed font-medium text-blue-600">
              Mulai sekarang dan buktikan Anda adalah master kuis sejati!
            </p>
          </div>
          
          <div class="flex-1 flex justify-center">
            <div class="bg-white p-6 md:p-12">
              <img
                src="@/assets/logo.png"
                alt="QuizMaster Logo"
                class="w-50 h-50 md:w-65 md:h-65 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Popup from '@/components/Popup.vue'
import heroBackground from '@/assets/logo2.png'

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