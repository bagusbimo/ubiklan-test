<template>
  <main>
    <div
      class="max-w-screen-xl px-4 pt-4 mx-auto sm:px-6 lg:pt-8 lg:px-8 lg:items-center lg:justify-between"
    >
        <SearchComponent :data="reksadana" :isOpen="isOpen" :searchFunction="searchFilter" :filterFunction="selectFilter" :filterStringArray="filterArray" />
        <table class="text-left w-full divide-y divide-gray-200 mt-4">
            <thead class="bg-gray-50 flex text-white w-full">
                <tr class="flex w-full mb-4">
                    <th scope="col" class="px-4 pt-4 w-1/3 text-left text-xs font-extrabold text-gray-500 uppercase tracking-wider">
                        Name
                    </th>
                    <th scope="col" class="px-4 pt-4 w-1/3 text-left text-xs font-extrabold text-gray-500 uppercase tracking-wider">
                        Amount
                    </th>
                    <th scope="col" class="px-4 pt-4 w-1/3 text-left text-xs font-extrabold text-gray-500 uppercase tracking-wider">
                        Return
                    </th>
                </tr>
            </thead>
            <tbody class="bg-white flex flex-col items-center justify-between divide-y overflow-y-scroll h-72 w-full">
                <tr v-for="(content, i) in reksadana" :key="i" class="flex w-full mb-4">
                    <td class="px-4 pt-4 w-1/3 whitespace-nowrap">
                        {{ content.name }}
                    </td>
                    <td class="px-4 pt-4 w-1/3 whitespace-nowrap font-bold">
                        Rp {{ Number(content.amount).toLocaleString('id-ID') }},00
                    </td>
                    <td class="px-4 pt-4 w-1/3 whitespace-nowrap">
                        {{ content.return }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  </main>
</template>

<script>
import SearchComponent from '@/components/SearchComponent.vue'
import Reksadana from '@/data/reksadana/reksadana.json'

export default {
  components: { SearchComponent },
  data() {
    return {
      isOpen: false,
      reksadana: [],
      filterArray: [
          {
              name: 'All',
              keyword: '',
          },
          {
              name: 'Positif',
              keyword: 'positive',
          },
          {
              name: 'Negatif',
              keyword: 'negative',
          },
      ],
    };
  },

  mounted() {
    for (let i = 0; i < Reksadana.contents.length; i+=1) {
        this.reksadana.push(Reksadana.contents[i])
    }
  },

  methods: {
    searchFilter(e) {
      if (e.target.value == '') {
        this.reksadana = Reksadana.contents
      } else {       
        this.reksadana = this.reksadana.filter(inv => {
            return inv.name.toLowerCase().includes(e.target.value.toLowerCase())
        })
      }
    },
    selectFilter(keyword) {
        if (keyword == '') {
            let result = this.reksadana
                .sort((a, b) => {
                    if (a.name < b.name) {
                        return -1
                    }
                    if (a.name > b.name) {
                        return 1
                    }
                    return 0;
                })
        } else {
            if (keyword == 'positive') {  
                let result = this.reksadana
                    .filter(o => o.return >= 0)
                    .sort((a, b) => a.return >= 0 - b.return >= 0)            
                let difference = this.reksadanas.filter(x => !result.includes(x))
                this.reksadana = result.concat(difference)
            } else {              
                let result = this.reksadana
                    .filter(o => o.return < 0)
                    .sort((a, b) => a.return >= 0 - b.return >= 0)     
                let difference = this.reksadana.filter(x => !result.includes(x))
                this.reksadana = result.concat(difference)
            }
        }
    }
  }
}
</script>