<template>
  <main>
    <div
      class="max-w-screen-xl px-4 pt-4 mx-auto sm:px-6 lg:pt-8 lg:px-8 lg:items-center lg:justify-between"
    >
        <SearchComponent :data="invoices" :isOpen="isOpen" :searchFunction="searchFilter" :filterFunction="selectFilter" :filterStringArray="filterArray" />
        <TableComponent :data="invoices" />
    </div>
  </main>
</template>

<script>
import SearchComponent from '@/components/SearchComponent.vue'
import TableComponent from '@/components/TableComponent.vue'
import ConventionalInvoice from '@/data/invoice/conventional_invoice.json'
import ProductiveInvoice from '@/data/invoice/productive_invoice.json'

export default {
  components: { SearchComponent, TableComponent },
  props: ['type'],
  data() {
    return {
      isOpen: false,
      invoices: [],
      searchQuery: '',
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
    if (this.type == 'conventional_invoice') {
        for (let i = 0; i < ConventionalInvoice.contents.length; i+=1) {
            this.invoices.push(ConventionalInvoice.contents[i])
        }
    } else if (this.type == 'productive_invoice') {
        for (let i = 0; i < ProductiveInvoice.contents.length; i+=1) {
            this.invoices.push(ProductiveInvoice.contents[i])
        }
    }
  },

  methods: {
    selectInvoiceType() {
        if (this.type == 'conventional_invoice') {
            this.invoices = ConventionalInvoice.contents
        } else if (this.type == 'productive_invoice') {
            this.invoices = ProductiveInvoice.contents
        }
    },
    searchFilter(e) {
      if (e.target.value == '') {
        this.selectInvoiceType()
      } else {       
        this.invoices = this.invoices.filter(inv => {
            return inv.name.toLowerCase().includes(e.target.value.toLowerCase())
        })
      }
    },
    selectFilter(keyword) {
        if (keyword == '') {
            let result = this.invoices
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
            let result = this.invoices
                .filter(o => o.grade.toLowerCase() == keyword.toLowerCase())
                .sort((a, b) => a.grade.toLowerCase().indexOf(keyword.toLowerCase()) - b.grade.toLowerCase().indexOf(keyword.toLowerCase()))
            let difference = this.invoices.filter(x => !result.includes(x))
            this.invoices = result.concat(difference)
        }
    }
  }
}
</script>