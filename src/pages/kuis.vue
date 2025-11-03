<template>
   <div class="flex flex-col min-h-screen bg-white">
    <!-- Header -->
    <header class="bg-white border-b py-4 px-8 flex justify-between items-center">
      <div>
        <img src="@/assets/logo2.png" alt="Logo QuizMaster" class="w-[200px]" />
      </div>

      <div class="text-lg font-semibold text-gray-700 bg-gray-100 px-4 py-2 rounded shadow">
        <span>Waktu: {{ timer }} detik</span>
      </div>
    </header>

    <!-- Konten Utama -->
    <main class="flex-grow flex justify-center items-center px-6 py-8">
      <div
        v-if="!quizFinished"
        class="bg-white shadow rounded p-6 w-full max-w-lg text-center"
      >
        <h2 class="text-xl font-semibold text-gray-700 mb-4">
          Soal {{ currentQuestionIndex + 1 }} dari {{ questions.length }}
        </h2>

        <p class="text-lg text-gray-800 mb-6">{{ currentQuestion.question }}</p>

        <ul class="space-y-3">
          <li
            v-for="(option, index) in currentQuestion.shuffledOptions"
            :key="index"
            @click="selectAnswer(option)"
            :class="[
              'p-3 rounded text-left cursor-pointer border transition duration-200',
              selectedAnswer === option
                ? 'bg-blue-100 border-blue-500'
                : 'bg-gray-100 hover:bg-gray-200 border-gray-300',
              answerSubmitted ? 'pointer-events-none opacity-60' : ''
            ]"
          >
            <span class="font-bold mr-2 text-gray-700">{{ option.label }}.</span>
            <span class="text-gray-800">{{ option.text }}</span>
          </li>
        </ul>

        <button
          @click="submitAnswer"
          :disabled="!selectedAnswer || answerSubmitted"
          class="mt-6 w-full py-2.5 rounded font-semibold text-white transition 
                 disabled:bg-gray-400 disabled:cursor-not-allowed
                 bg-blue-500 hover:bg-blue-700"
        >
          {{ isLastQuestion ? 'Selesai' : 'Selanjutnya' }}
        </button>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script>
import { questions as allQuestions } from '@/datasoal.js'
import Footer from '@/components/footer.vue'

function shuffleArray(array) {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export default {
  name: 'Kuis',
  components: { Footer },
  data() {
    const shuffledQuestions = shuffleArray(allQuestions).slice(0, 10)
    const labeledQuestions = shuffledQuestions.map((q) => {
      const labels = ['A', 'B', 'C', 'D', 'E']
      const shuffledOptions = shuffleArray(q.options).map((opt, i) => ({
        label: labels[i] || '',
        text: opt,
      }))
      return { ...q, shuffledOptions }
    })

    return {
      questions: labeledQuestions,
      currentQuestionIndex: 0,
      selectedAnswer: null,
      answerSubmitted: false,
      score: 0,
      timer: 30,
      timerInterval: null,
    }
  },
  computed: {
    currentQuestion() {
      return this.questions[this.currentQuestionIndex]
    },
    quizFinished() {
      return this.currentQuestionIndex >= this.questions.length
    },
    isLastQuestion() {
      return this.currentQuestionIndex === this.questions.length - 1
    },
  },
  methods: {
    selectAnswer(option) {
      if (!this.answerSubmitted) this.selectedAnswer = option
    },
    submitAnswer() {
      if (!this.selectedAnswer && !this.answerSubmitted) return

      // Cek jawaban
      if (this.selectedAnswer && this.selectedAnswer.text === this.currentQuestion.answer)
        this.score++

      this.answerSubmitted = true
      clearInterval(this.timerInterval)

      setTimeout(() => {
        this.nextQuestion()
      }, 500)
    },
    nextQuestion() {
      this.currentQuestionIndex++
      if (this.quizFinished) {
        this.saveResult()
      } else {
        this.selectedAnswer = null
        this.answerSubmitted = false
        this.resetTimer()
      }
    },
    resetTimer() {
      this.timer = 30
      clearInterval(this.timerInterval)
      this.startTimer()
    },
    startTimer() {
      this.timerInterval = setInterval(() => {
        if (this.timer > 0) {
          this.timer--
        } else {
          clearInterval(this.timerInterval)
          // waktu habis, lanjut otomatis
          this.nextQuestion()
        }
      }, 1000)
    },
    saveResult() {
      const name = localStorage.getItem('currentUser') || 'Tanpa Nama'
      const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || []
      leaderboard.push({ name, score: this.score, total: this.questions.length })
      leaderboard.sort((a, b) => b.score - a.score)
      localStorage.setItem('leaderboard', JSON.stringify(leaderboard.slice(0, 10)))

      this.$router.push({
        name: 'Hasil',
        query: { score: this.score, total: this.questions.length },
      })
    },
  },
  mounted() {
    this.startTimer()
  },
  beforeUnmount() {
    clearInterval(this.timerInterval)
  },
}
</script>
