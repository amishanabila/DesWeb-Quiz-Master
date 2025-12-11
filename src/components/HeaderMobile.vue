<template>
  <header class="bg-white py-4 shadow font-[Poppins] relative md:hidden">
    <div class="flex justify-between items-center px-4">
      <RouterLink to="/" class="flex items-center">
        <img
          src="@/assets/logo2.png"
          alt="Logo QuizMaster"
          class="w-[150px] object-contain"
        />
      </RouterLink>

      <button
        @click="toggleMenu"
        class="flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none"
        aria-label="Toggle menu"
      >
        <span
          :class="['block h-0.5 w-6 bg-gray-700 transition-all duration-300', isMenuOpen ? 'rotate-45 translate-y-2' : '']"
        ></span>
        <span
          :class="['block h-0.5 w-6 bg-gray-700 transition-all duration-300', isMenuOpen ? 'opacity-0' : '']"
        ></span>
        <span
          :class="['block h-0.5 w-6 bg-gray-700 transition-all duration-300', isMenuOpen ? '-rotate-45 -translate-y-2' : '']"
        ></span>
      </button>
    </div>

    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <nav v-if="isMenuOpen" class="bg-white shadow absolute top-full left-0 right-0 z-50">
        <ul class="flex flex-col">
          <li>
            <RouterLink
              to="/"
              @click="closeMenu"
              class="block px-6 py-4 text-gray-700 font-semibold hover:bg-gray-100 transition duration-300"
              active-class="bg-gray-700 text-white hover:bg-gray-700"
            >
              Home
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/profile"
              @click="closeMenu"
              class="block px-6 py-4 text-gray-700 font-semibold hover:bg-gray-100 transition duration-300"
              active-class="bg-gray-700 text-white hover:bg-gray-700"
            >
              Profile
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/about"
              @click="closeMenu"
              class="block px-6 py-4 text-gray-700 font-semibold hover:bg-gray-100 transition duration-300"
              active-class="bg-gray-700 text-white hover:bg-gray-700"
            >
              About
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/leaderboard"
              @click="closeMenu"
              class="block px-6 py-4 text-gray-700 font-semibold hover:bg-gray-100 transition duration-300"
              active-class="bg-gray-700 text-white hover:bg-gray-700"
            >
              Leaderboard
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/contact"
              @click="closeMenu"
              class="block px-6 py-4 text-gray-700 font-semibold hover:bg-gray-100 transition duration-300"
              active-class="bg-gray-700 text-white hover:bg-gray-700"
            >
              Contact
            </RouterLink>
          </li>
        </ul>
      </nav>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

defineOptions({ name: 'HeaderMobile' })
</script>
