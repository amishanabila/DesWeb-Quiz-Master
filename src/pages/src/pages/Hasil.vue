<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100 text-center font-[Poppins] px-4">
    <div class="bg-white shadow rounded p-6 md:p-10 w-full max-w-md flex flex-col items-center">
      <h1 class="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Kuis Selesai!</h1>
      <p class="text-gray-600 mb-6 text-base md:text-lg">Skor Akhir Anda:</p>

      <div
        class="w-32 h-32 md:w-40 md:h-40 bg-blue-600 text-white rounded-full flex flex-col justify-center items-center mb-6 shadow-md"
      >
        <span class="text-4xl md:text-6xl font-extrabold leading-none">{{ score }}</span>
        <span class="text-lg md:text-xl">/ {{ total }}</span>
      </div>

      <p class="text-gray-700 italic mb-6 md:mb-8 text-sm md:text-base">{{ feedbackMessage }}</p>

      <button
        @click="restartQuiz"
        class="w-full bg-green-500 hover:bg-green-700 text-white font-semibold py-3 md:py-4 rounded mb-3 transition-all duration-200"
      >
        Coba Lagi
      </button>
      <button
        @click="goToHome"
        class="w-full bg-gray-500 hover:bg-gray-700 text-white font-semibold py-3 md:py-4 rounded transition-all duration-200"
      >
        Kembali ke Beranda
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hasil',
  data() {
    return {
      score: 0,
      total: 0,
    }
  },
  created() {
    this.score = parseInt(this.$route.query.score) || 0
    this.total = parseInt(this.$route.query.total) || 0
  },
  computed: {
    feedbackMessage() {
      const percentage = (this.score / this.total) * 100
      if (percentage >= 80) return 'Luar Biasa! Pengetahuan Anda sangat luas!'
      if (percentage >= 60) return 'Bagus! Terus tingkatkan lagi!'
      if (percentage >= 40) return 'Tidak buruk, coba lagi untuk hasil yang lebih baik.'
      return 'Jangan menyerah, belajar lagi dan coba tantangannya kembali!'
    },
  },
  methods: {
    restartQuiz() {
      this.$router.push({ name: 'Kuis' })
    },
    goToHome() {
      this.$router.push({ name: 'Home' })
    },
  },
}
</script>
