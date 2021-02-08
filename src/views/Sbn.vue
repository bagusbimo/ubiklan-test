<template>
  <main>
    <div
      class="max-w-screen-xl px-4 pt-4 mx-auto sm:px-6 lg:pt-8 lg:px-8 lg:items-center lg:justify-between"
    >
        <SearchComponent :data="sbn" :isOpen="isOpen" :searchFunction="searchFilter" :filterFunction="selectFilter" :filterStringArray="filterArray" />
        <table class="text-left w-full divide-y divide-gray-200 mt-4">
            <thead class="bg-gray-50 flex text-white w-full">
                <tr class="flex w-full mb-4">
                    <th scope="col" class="px-4 pt-4 w-1/4 text-left text-xs font-extrabold text-gray-500 uppercase tracking-wider">
                        Name
                    </th>
                    <th scope="col" class="px-4 pt-4 w-1/4 text-left text-xs font-extrabold text-gray-500 uppercase tracking-wider">
                        Amount
                    </th>
                    <th scope="col" class="px-4 pt-4 w-1/4 text-left text-xs font-extrabold text-gray-500 uppercase tracking-wider">
                        Tenor
                    </th>
                    <th scope="col" class="px-4 pt-4 w-1/4 text-left text-xs font-extrabold text-gray-500 uppercase tracking-wider">
                        Rate
                    </th>
                    <th scope="col" class="px-4 pt-4 w-1/4 text-left text-xs font-extrabold text-gray-500 uppercase tracking-wider">
                        Type
                    </th>
                </tr>
            </thead>
            <tbody class="bg-white flex flex-col items-center justify-between divide-y overflow-y-scroll h-72 w-full">
                <tr v-for="(content, i) in sbn" :key="i" class="flex w-full mb-4">
                    <td class="px-4 pt-4 w-1/4 whitespace-nowrap">
                        {{ content.name }}
                    </td>
                    <td class="px-4 pt-4 w-1/4 whitespace-nowrap font-bold">
                        Rp {{ Number(content.amount).toLocaleString('id-ID') }},00
                    </td>
                    <td class="px-4 pt-4 w-1/4 whitespace-nowrap">
                        {{ content.tenor }}
                    </td>
                    <td class="px-4 pt-4 w-1/4 whitespace-nowrap text-sm text-gray-500">
                        {{ content.rate }}
                    </td>
                    <td class="px-4 pt-4 w-1/4 whitespace-nowrap text-sm text-gray-500">
                        {{ content.type }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  </main>
</template>

<script>
import SearchComponent from '@/components/SearchComponent.vue'
import Sbn from '@/data/sbn/sbn.json'

export default {
  components: { SearchComponent },
  data() {
    return {
      isOpen: false,
      sbn: [],
      filterArray: [
        {
            name: 'All',
            keyword: '',
        },
        {
            name: 'SBR',
            keyword: 'sbr',
        },
        {
            name: 'ST',
            keyword: 'st',
        },
      ],
    };
  },

  mounted() {
    for (let i = 0; i < Sbn.contents.length; i+=1) {
        this.sbn.push(Sbn.contents[i])
    }
  },

  methods: {
    searchFilter(e) {
      if (e.target.value == '') {
        this.sbn = Sbn.contents
      } else {       
        this.sbn = this.sbn.filter(inv => {
            return inv.name.toLowerCase().includes(e.target.value.toLowerCase())
        })
      }
    },
    selectFilter(keyword) {
        if (keyword == '') {
            let result = this.sbn
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
            let result = this.sbn
                .filter(o => o.type.toLowerCase() == keyword.toLowerCase())
                .sort((a, b) => a.type.toLowerCase().indexOf(keyword.toLowerCase()) - b.type.toLowerCase().indexOf(keyword.toLowerCase()))
            let difference = this.sbn.filter(x => !result.includes(x))
            this.sbn = result.concat(difference)
        }
    }
  }
}
</script>