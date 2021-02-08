<template>
  <main>
    <div
      class="max-w-screen-xl px-4 pt-4 mx-auto sm:px-6 lg:pt-8 lg:px-8 lg:items-center lg:justify-between"
    >
        <SearchComponent :data="osf" :isOpen="isOpen" :searchFunction="searchFilter" :filterFunction="selectFilter" :filterStringArray="filterArray" />
        <TableComponent :data="osf" />
    </div>
  </main>
</template>

<script>
import SearchComponent from '@/components/SearchComponent.vue'
import TableComponent from '@/components/TableComponent.vue'
import ConventionalOsf from '@/data/osf/conventional_osf.json'
import ProductiveOsf from '@/data/osf/productive_osf.json'

export default {
  components: { SearchComponent, TableComponent },
  props: ['type'],
  data() {
    return {
      isOpen: false,
      osf: [],
      filterArray: [
          {
              name: 'All',
              keyword: '',
          },
          {
              name: 'A',
              keyword: 'A',
          },
          {
              name: 'B+',
              keyword: 'B+',
          },
          {
              name: 'B',
              keyword: 'B',
          },
      ],
    };
  },

  mounted() {
      if (this.type == 'conventional_osf') {
          for (let i = 0; i < ConventionalOsf.contents.length; i+=1) {
            this.osf.push(ConventionalOsf.contents[i])
          }
      } else if (this.type == 'productive_osf') {
          for (let i = 0; i < ProductiveOsf.contents.length; i+=1) {
            this.osf.push(ProductiveOsf.contents[i])
          }
      }
  },

  methods: {
    selectOsfType() {
        if (this.type == 'conventional_osf') {
            this.osf = ConventionalOsf.contents
        } else if (this.type == 'productive_osf') {
            this.osf = ProductiveOsf.contents
        }
    },
    searchFilter(e) {
      if (e.target.value == '') {
        this.selectOsfType()
      } else {       
        this.invoices = this.osf.filter(inv => {
            return inv.name.toLowerCase().includes(e.target.value.toLowerCase())
        })
      }
    },
    selectFilter(keyword) {
    if (keyword == '') {
        let result = this.osf
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
        let result = this.osf
            .filter(o => o.grade.toLowerCase() == keyword.toLowerCase())
            .sort((a, b) => a.grade.toLowerCase().indexOf(keyword.toLowerCase()) - b.grade.toLowerCase().indexOf(keyword.toLowerCase()))
        let difference = this.osf.filter(x => !result.includes(x))
        this.osf = result.concat(difference)
    }
    }
  }
}
</script>