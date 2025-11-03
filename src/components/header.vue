<template>
  <header class="bg-white py-4 shadow font-[Poppins]">
    <div class="flex justify-between items-center px-8">
      <!-- ✅ Logo -->
      <RouterLink to="/" class="flex items-center">
        <img
          src="@/assets/logo2.png"
          alt="Logo QuizMaster"
          class="w-[200px] object-contain"
        />
      </RouterLink>

      <!-- ✅ Navigasi -->
      <nav class="hidden md:block">
        <ul class="flex space-x-4">
          <li>
            <RouterLink
              to="/"
              class="px-4 py-8 rounded text-gray-700 font-semibold transition duration-300 ease-in-out hover:bg-gray-700 hover:text-white"
              active-class="bg-gray-700 text-white"
            >
              Home
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/about"
              class="px-4 py-8 rounded text-gray-700 font-semibold transition duration-300 ease-in-out hover:bg-gray-700 hover:text-white"
              active-class="bg-gray-700 text-white"
            >
              About
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/leaderboard"
              class="px-4 py-8 rounded text-gray-700 font-semibold transition duration-300 ease-in-out hover:bg-gray-700 hover:text-white"
              active-class="bg-gray-700 text-white"
            >
              Leaderboard
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/contact"
              class="px-4 py-8 rounded text-gray-700 font-semibold transition duration-300 ease-in-out hover:bg-gray-700 hover:text-white"
              active-class="bg-gray-700 text-white"
            >
              Contact
            </RouterLink>
          </li>
        </ul>
      </nav>

      <!-- Spacer kanan -->
      <div class="w-[200px] hidden md:block"></div>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
defineOptions({ name: 'Header' })
</script>
