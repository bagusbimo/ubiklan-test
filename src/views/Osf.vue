<template>
  <main>
    <div
      class="max-w-screen-xl px-4 pt-4 mx-auto sm:px-6 lg:pt-8 lg:px-8 lg:items-center lg:justify-between"
    >
        <div class="flex rounded-md">
            <button class="bg-gray-200 rounded-md w-auto flex justify-end items-center text-blue-500 p-3 hover:text-blue-400">
               <svg version="1.1" class="h-4 stroke-current text-dark" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 52.966 52.966" style="enable-background:new 0 0 52.966 52.966;" xml:space="preserve">
                        <path d="M51.704,51.273L36.845,35.82c3.79-3.801,6.138-9.041,6.138-14.82c0-11.58-9.42-21-21-21s-21,9.42-21,21s9.42,21,21,21
                        c5.083,0,9.748-1.817,13.384-4.832l14.895,15.491c0.196,0.205,0.458,0.307,0.721,0.307c0.25,0,0.499-0.093,0.693-0.279
                        C52.074,52.304,52.086,51.671,51.704,51.273z M21.983,40c-10.477,0-19-8.523-19-19s8.523-19,19-19s19,8.523,19,19
                        S32.459,40,21.983,40z"/>
                </svg>
            </button>
            <input class="w-full border rounded p-2 mx-2" type="text" placeholder="Search...">
            <div class="relative inline-block text-left">
                <div>
                    <button
                        type="button"
                        class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                        id="options-menu"
                        aria-haspopup="true"
                        aria-expanded="true"
                        @click="isOpen = !isOpen"
                    >
                        SORT
                        <svg v-if="!isOpen" class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                        <svg v-else class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
                <transition
                    enter-active-class="transition-opacity duration-300 ease-linear"
                    enter-from-class="opacity-0"
                    enter-to-class="opacity-100"
                    leave-active-class="transition-opacity duration-300 ease-linear"
                    leave-from-class="opacity-100"
                    leave-to-class="opacity-0"
                >
                    <div v-show="isOpen" class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Account settings</a>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Support</a>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">License</a>
                            <form method="POST" action="#">
                                <button
                                    type="submit"
                                    class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                                    role="menuitem"
                                >
                                    Sign out
                                </button>
                            </form>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
        <TableComponent :data="osf" />
    </div>
  </main>
</template>

<script>
import TableComponent from '@/components/TableComponent.vue'
import ConventionalOsf from '@/data/osf/conventional_osf.json'
import ProductiveOsf from '@/data/osf/productive_osf.json'

export default {
  components: { TableComponent },
  props: ['type'],
  data() {
    return {
      isOpen: false,
      osf: [],
    };
  },

  mounted() {
      if (this.type == 'conventional_osf') {
          this.osf = ConventionalOsf
      } else if (this.type == 'productive_osf') {
          this.osf = ProductiveOsf
      }
  },

  methods: {}
}
</script>