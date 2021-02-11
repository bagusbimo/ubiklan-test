<template>
  <main>
    <header class="bg-white shadow" v-if="$route.meta.title">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <!-- <div class="flex justify-between">
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
        </div> -->
        <nav class="flex items-center justify-between flex-wrap bg-teal">
          <div class="flex items-center flex-no-shrink text-white mr-6">
            <img src="../assets/img/logo.svg" class="h-8" style="filter: grayscale(100%);" />
          </div>
          <div class="block sm:hidden">
            <button @click="toggle" class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-gray-700 hover:border-gray-700">
              <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
          </div>
          <div :class="open ? 'block': 'hidden'" class="w-full flex-grow sm:flex sm:items-center sm:w-auto">
            <div class="text-sm sm:flex-grow">
              <span class="px-1 sm:px-36" />
              <button
                class="block sm:inline-block font-bold text-gray-700 hover:text-white rounded-md transition duration-500 ease select-none hover:bg-green-400 focus:outline-none focus:shadow-outline"
              >
                About Us
              </button>
              <span class="px-1 sm:px-3" />
              <button
                class="block sm:inline-block font-bold text-gray-700 hover:text-white rounded-md transition duration-500 ease select-none hover:bg-green-400 focus:outline-none focus:shadow-outline"
              >
                <span class="inline-flex">
                  Products
                  <svg xmlns="http://www.w3.org/2000/svg" class="-mr-1 mt-0.5 ml-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </span>
              </button>
              <span class="px-1 sm:px-3" />
              <button
                class="block sm:inline-block font-bold text-gray-700 hover:text-white rounded-md transition duration-500 ease select-none hover:bg-green-400 focus:outline-none focus:shadow-outline"
              >
                Blog
              </button>
              <span class="px-1 sm:px-3" />
              <button
                class="block sm:inline-block font-bold text-gray-700 hover:text-white rounded-md transition duration-500 ease select-none hover:bg-green-400 focus:outline-none focus:shadow-outline"
              >
                FAQ
              </button>
              <span class="px-1 sm:px-3" />
              <button
                class="block sm:inline-block font-bold text-gray-700 hover:text-white rounded-md transition duration-500 ease select-none hover:bg-green-400 focus:outline-none focus:shadow-outline"
              >
                Contact
              </button>
              <span class="px-1 sm:px-3" />
              <button
                class="block sm:inline-block font-bold text-gray-700 hover:text-white rounded-md transition duration-500 ease select-none hover:bg-green-400 focus:outline-none focus:shadow-outline"
              >
                Partner
              </button>
              <span class="px-1 sm:px-3" />
              <button
                class="block sm:inline-block font-bold text-gray-700 hover:text-white rounded-md transition duration-500 ease select-none hover:bg-green-400 focus:outline-none focus:shadow-outline"
              >
                Career
              </button>
            </div>
            <span class="px-1 sm:px-3" />
            <div>
              <button
                class="font-bold text-gray-700 hover:text-white py-1 rounded-md transition duration-500 ease select-none hover:bg-gray-400 focus:outline-none focus:shadow-outline"
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
        </nav>
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

<script>
export default {
  data() {
    return {
      open: false,
    };
  },
  methods: {
    toggle() {
    	this.open = !this.open
    }
  }
}
</script>
