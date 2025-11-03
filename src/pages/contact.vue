<template>
  <div>
    <Header />

    <main
      class="flex flex-col md:flex-row justify-center items-center mb-1 mt-[-3px] min-h-[82vh] py-8 px-12 bg-gray-50 text-center md:text-left"
    >
      <!-- 🧾 Bagian kiri: teks & kontak -->
      <div class="w-full md:w-1/2 mb-10 md:mb-0">
        <h1 class="text-4xl font-bold text-gray-800 mb-6">Hubungi Kami</h1>
        <p class="text-gray-600 mb-8 max-w-md mx-auto md:mx-0 text-lg leading-relaxed">
          Jika Anda memiliki pertanyaan atau masukan, jangan ragu untuk menghubungi kami melalui media di bawah ini.
        </p>
        <div class="space-y-4">
          <p class="text-lg flex items-center gap-2 justify-center md:justify-start">
            <Mail class="w-7 h-7 text-blue-700" />
            <a href="mailto:11231008@student.itk.ac.id" class="hover:underline">
              112310089@student.itk.ac.id
            </a>
          </p>
          <p class="text-lg flex items-center gap-2 justify-center md:justify-start">
            <Instagram class="w-7 h-7 text-pink-700" />
            <a href="https://instagram.com/amishanabila" target="_blank" class="hover:underline">
              @amishanabila
            </a>
          </p>
        </div>
      </div>

       <!-- 🧩 Bagian kanan: logo -->
      <div class="flex justify-center md:justify-end w-full md:w-1/2 mb-10">
        <img
          src="@/assets/logo.png"
          alt="QuizMaster Logo"
          class="w-100 object-contain"
        />
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'

// Import icon dari Lucide
import { Mail, Instagram } from 'lucide-vue-next'
</script>
