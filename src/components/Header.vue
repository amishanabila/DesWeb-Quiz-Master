<template>
  <header class="bg-white py-4 shadow font-[Poppins] hidden md:block">
    <div class="flex justify-between items-center px-4 md:px-8">
      <RouterLink to="/" class="flex items-center">
        <img
          src="@/assets/logo2.png"
          alt="Logo QuizMaster"
          class="w-[150px] md:w-[200px] object-contain"
        />
      </RouterLink>

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
              to="/profile"
              class="px-4 py-8 rounded text-gray-700 font-semibold transition duration-300 ease-in-out hover:bg-gray-700 hover:text-white"
              active-class="bg-gray-700 text-white"
            >
              Profile
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

      <div class="w-[150px] md:w-[200px] hidden md:block"></div>
    </div>
  </header>

  <HeaderMobile />
</template>

<script setup>
import { RouterLink } from 'vue-router'
import HeaderMobile from './HeaderMobile.vue'

defineOptions({ name: 'Header' })
</script>