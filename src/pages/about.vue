<template>
  <div>
    <Header />

    <main
      class="flex flex-col md:flex-row justify-center items-center mb-1 mt-[-3px] min-h-[82vh] py-8 px-12 bg-gray-50 text-center md:text-left"
    >
<!-- 🧠 Bagian kiri: teks deskripsi -->
<div class="w-full md:w-1/2 mb-10 md:mb-0">
  <h1 class="text-4xl font-bold text-gray-800 mb-6">About</h1>
  <p class="text-gray-500 text-lg mb-4">
    Mengukur Pemahamanmu di Empat Pilar Informatika.
  </p>
  <p class="text-gray-700 leading-relaxed mb-4">
    <span class="font-semibold text-blue-600">QuizMaster</span> didesain khusus untuk menguji kompetensimu dalam berbagai cabang ilmu informatika. Soal-soal kami mencakup topik-topik esensial yang wajib diketahui oleh setiap penggemar teknologi.
  </p>

  <p class="text-gray-700 leading-relaxed mb-4">
    Di sini, kamu akan menemukan tantangan seputar:
  </p>
  <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2 mb-4">
    <li>
      <span class="font-semibold">AI & Machine Learning:</span> Temukan apa itu Neural Network, fungsi regularization untuk menghindari overfitting, dan bedah konsep data training.
    </li>
    <li>
      <span class="font-semibold">Software Engineering:</span> Pahami siklus hidup pengembangan perangkat lunak, mulai dari arti ‘bug’, proses compiling, hingga arsitektur microservices.
    </li>
    <li>
      <span class="font-semibold">Jaringan Komputer:</span> Jawab pertanyaan tentang fungsi hub, alamat IPV4, dan protokol yang membuat internet berjalan.
    </li>
    <li>
      <span class="font-semibold">Dasar Pemrograman:</span> Kenali bahasa pemrograman tingkat tinggi seperti Python dan framework populer seperti React.
    </li>
  </ul>

  <p class="text-gray-700 leading-relaxed font-medium">
    Siap mengukur seberapa jauh pengetahuanmu? Buktikan sekarang!
  </p>
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
</script>
