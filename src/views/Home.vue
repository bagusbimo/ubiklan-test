<template>
  <main>
    <div
      class="max-w-screen-xl px-4 pt-4 mx-auto sm:px-6 lg:pt-8 lg:px-8 lg:items-center lg:justify-between"
    >
      <div class="space-y-4">
        <div v-for="(main, i) in mainData.contents" :key="i" @click="showOptions(i)" style="cursor: pointer;">
          <div class="block border p-4" :class="{ 'bg-red-700': optionsStatus[i] }">
            <div class="grid grid-rows-3 grid-flow-col gap-4">
              <div class="row-span-3">             
                <svg class="h-28 w-28 lg:h-36 lg:w-36 stroke-current text-red-700" :class="{ 'stroke-current text-yellow-50': optionsStatus[i] }" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div class="col-span-2">
                <div
                  class="flex justify-between"
                >
                  <div class="text-2xl lg:text-3xl font-extrabold text-red-700" :class="{ 'text-yellow-50': optionsStatus[i] }">      
                    {{ main.name }}
                  </div>
                  <div class="text-base font-extrabold text-red-700" :class="{ 'text-yellow-50': optionsStatus[i] }">      
                    {{ main.count }}
                  </div>
                </div>
              </div>
              <div class="row-span-2 col-span-2">
                <div class="text-sm lg:text-base" :class="{ 'text-yellow-50': optionsStatus[i] }">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                </div>
              </div>
            </div>
          </div>
          <transition
              enter-active-class="transition-opacity duration-300 ease-linear"
              enter-from-class="opacity-0"
              enter-to-class="opacity-100"
              leave-active-class="transition-opacity duration-300 ease-linear"
              leave-from-class="opacity-100"
              leave-to-class="opacity-0"
          >
            <div v-show="optionsStatus[i]" class="flex justify-between"> 
              <div v-for="(option, j) in options.contents" :key="j" class="block border p-4 mt-4" @click="toDetails(i, j)" style="cursor: pointer;">
                <div class="grid grid-rows-3 grid-flow-col gap-4">
                  <div class="row-span-3">             
                    <svg class="h-28 w-28 lg:h-36 lg:w-36 stroke-current text-red-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div class="col-span-2">
                    <div
                      class="flex justify-between"
                    >
                      <div class="text-2xl lg:text-3xl font-extrabold text-red-700">      
                        {{ option.name }}
                      </div>
                      <div class="text-base font-extrabold text-red-700">      
                        {{ option.count }}
                      </div>
                    </div>
                  </div>
                  <div class="row-span-2 col-span-2">
                    <div class="text-sm lg:text-base">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import MainData from '@/data/main.json'
import InvoiceOptions from '@/data/invoice/invoice.json'
import OsfOptions from '@/data/osf/osf.json'

export default {
  data() {
    return {
      mainData: MainData,
      options: [],
      invoiceOptions: InvoiceOptions,
      osfOptions: OsfOptions,
      optionsStatus: {},
    };
  },

  methods: {
    showOptions(index) {
      if (this.optionsStatus[index]) {
        this.optionsStatus[index] = false
      } else {       
        if (this.filterSub(index) == 'invoice') {
          this.optionsStatus[index] = true
          this.options = this.invoiceOptions
        } else if (this.filterSub(index) == 'osf') {
          this.optionsStatus[index] = true
          this.options = this.osfOptions
        } else {
          this.$router.push(this.filterSub(index))
        }
      }
    },
    toDetails(indexOne, indexTwo) {
      this.$router.push(this.filterSub(indexOne) + '?type=' + this.filterOptionsSub(indexTwo))
    },
    filterSub(index) {
      return this.mainData.contents[index].sub.split('/')[1].split('.')[0]
    },
    filterOptionsSub(index) {
      return this.options.contents[index].sub.split('/')[1].split('.')[0]
    }
  }
}
</script>