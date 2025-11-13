<template>
  <div>
    <Header />

    <section class="bg-gradient-to-r from-orange-500 to-orange-600 py-16 md:py-20 px-4 md:px-8 text-center text-white">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Hubungi Kami</h1>
        <p class="text-base md:text-lg lg:text-xl opacity-90">
          Kami siap membantu menjawab pertanyaan Anda
        </p>
      </div>
    </section>

    <section class="py-12 md:py-16 px-4 md:px-8 bg-gray-50">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-8 md:mb-12">
          Informasi Kontak
        </h2>
        
        <div class="flex flex-col lg:flex-row gap-8 md:gap-12">
          <div class="flex-1">
            <h3 class="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">Hubungi Kami</h3>
            <p class="text-sm md:text-base text-gray-600 mb-6 md:mb-8 leading-relaxed">
              Jika Anda memiliki pertanyaan atau masukan, jangan ragu untuk menghubungi kami melalui media di bawah ini.
            </p>
            
            <div class="space-y-4 md:space-y-6">
              <div class="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-white rounded shadow transition-shadow">
                <div class="bg-orange-100 p-2 md:p-3 rounded">
                  <Mail class="w-5 h-5 md:w-6 md:h-6 text-orange-600" />
                </div>
                <div>
                  <h4 class="text-sm md:text-base font-semibold text-gray-800 mb-1">Email</h4>
                  <div class="flex flex-col space-y-1">
                    <a href="mailto:11231008@student.itk.ac.id" class="text-xs md:text-sm text-gray-600 hover:text-orange-600 hover:underline break-all">
                      11231008@student.itk.ac.id
                    </a>
                    <a href="mailto:amishanabila37@gmail.com" class="text-xs md:text-sm text-gray-600 hover:text-orange-600 hover:underline break-all">
                      amishanabila37@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              
              <div class="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-white rounded shadow transition-shadow">
                <div class="bg-pink-100 p-2 md:p-3 rounded">
                  <Instagram class="w-5 h-5 md:w-6 md:h-6 text-pink-600" />
                </div>
                <div>
                  <h4 class="text-sm md:text-base font-semibold text-gray-800 mb-1">Instagram</h4>
                  <a href="https://instagram.com/amishanabila" target="_blank" class="text-xs md:text-sm text-gray-600 hover:text-pink-600 hover:underline">
                    @amishanabila
                  </a>
                </div>
              </div>
              
              <div class="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-white rounded shadow transition-shadow">
                <div class="bg-blue-100 p-2 md:p-3 rounded">
                  <MapPin class="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                </div>
                <div>
                  <h4 class="text-sm md:text-base font-semibold text-gray-800 mb-1">Lokasi</h4>
                  <p class="text-xs md:text-sm text-gray-600">
                    Permata Hijau Residence<br>
                    Balikpapan, Indonesia
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="flex-1">
            <h3 class="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">Lokasi Kami</h3>
            <div class="bg-white rounded shadow overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d351.5397599156741!2d116.87944498843689!3d-1.225344918426485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df14605293620e1%3A0x996d5e81ad121a3e!2sPermata%20Hijau%20Residence!5e1!3m2!1sen!2sid!4v1763032763365!5m2!1sen!2sid" 
                width="100%" 
                height="400" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
                class="w-full md:h-[450px]"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

import { Mail, Instagram, MapPin } from 'lucide-vue-next'
</script>