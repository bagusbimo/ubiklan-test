<template>
  <main>
    <header class="bg-white shadow" v-if="$route.meta.title">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between">
          <img src="../assets/img/logo.svg" class="h-8" style="filter: grayscale(100%);" />
          <div>
            <span class="pr-10">
              <button
                class="font-bold text-gray-700 hover:text-white px-1 py-1 rounded-md transition duration-500 ease select-none hover:bg-green-400 focus:outline-none focus:shadow-outline"
              >
                <span class="px-3">About Us</span>
              </button>
              <span class="px-1" />
              <button
                class="font-bold text-gray-700 hover:text-white px-1 py-1 rounded-md transition duration-500 ease select-none hover:bg-green-400 focus:outline-none focus:shadow-outline"
              >
                <span class="px-3 inline-flex">
                  Products
                  <svg xmlns="http://www.w3.org/2000/svg" class="-mr-1 mt-0.5 ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </span>
              </button>
              <span class="px-1" />
              <button
                class="font-bold text-gray-700 hover:text-white px-1 py-1 rounded-md transition duration-500 ease select-none hover:bg-green-400 focus:outline-none focus:shadow-outline"
              >
                <span class="px-3">Blog</span>
              </button>
              <span class="px-1" />
              <button
                class="font-bold text-gray-700 hover:text-white px-1 py-1 rounded-md transition duration-500 ease select-none hover:bg-green-400 focus:outline-none focus:shadow-outline"
              >
                <span class="px-3">FAQ</span>
              </button>
              <span class="px-1" />
              <button
                class="font-bold text-gray-700 hover:text-white px-1 py-1 rounded-md transition duration-500 ease select-none hover:bg-green-400 focus:outline-none focus:shadow-outline"
              >
                <span class="px-3">Contact</span>
              </button>
              <span class="px-1" />
              <button
                class="font-bold text-gray-700 hover:text-white px-1 py-1 rounded-md transition duration-500 ease select-none hover:bg-green-400 focus:outline-none focus:shadow-outline"
              >
                <span class="px-3">Partner</span>
              </button>
              <span class="px-1" />
              <button
                class="font-bold text-gray-700 hover:text-white px-1 py-1 rounded-md transition duration-500 ease select-none hover:bg-green-400 focus:outline-none focus:shadow-outline"
              >
                <span class="px-3">Career</span>
              </button>
              <span class="px-1" />
            </span>
            <button
              class="font-bold text-gray-700 hover:text-white px-3 py-1 rounded-md transition duration-500 ease select-none hover:bg-gray-400 focus:outline-none focus:shadow-outline"
            >
              <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://upload.wikimedia.org/wikipedia/commons/b/b3/Solid_gray.png" alt="">
              <span class="px-3">Login</span>
            </button>
            <span class="px-1" />
            <button
              type="button"
              class="border border-gray-500 bg-gray-500 text-white rounded-md px-10 py-1 transition duration-500 ease select-none hover:bg-gray-600 focus:outline-none focus:shadow-outline"
            >
              <span class="font-bold">Sign Up</span>
            </button>
          </div>
        </div>
      </div>
    </header>
    <router-view />
    <div class="h-auto border">
      <div class="mx-auto max-w-screen-xl">
        <div class="flex flex-col py-4">
          <div class="text-gray-700 text-sm text-center">
            Copyright &copy; 2019 Ubiklan Technologies. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
