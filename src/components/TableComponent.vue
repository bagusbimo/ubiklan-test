<template>
<table class="text-left w-full divide-y divide-gray-200 mt-4">
    <thead class="bg-gray-50 flex text-white w-full">
        <tr class="flex w-full mb-4">
            <th scope="col" class="px-4 pt-4 w-1/5 text-left text-xs font-extrabold text-gray-500 uppercase tracking-wider">
                Name
            </th>
            <th scope="col" class="px-4 pt-4 w-1/5 text-left text-xs font-extrabold text-gray-500 uppercase tracking-wider">
                Amount
            </th>
            <th scope="col" class="px-4 pt-4 w-1/5 text-left text-xs font-extrabold text-gray-500 uppercase tracking-wider">
                Tenor
            </th>
            <th scope="col" class="px-4 pt-4 w-1/5 text-left text-xs font-extrabold text-gray-500 uppercase tracking-wider">
                Grade
            </th>
            <th scope="col" class="px-4 pt-4 w-1/5 text-left text-xs font-extrabold text-gray-500 uppercase tracking-wider">
                Rate
            </th>
        </tr>
    </thead>
    <tbody class="bg-white flex flex-col items-center justify-between divide-y overflow-y-scroll h-72 w-full">
        <tr v-for="(content, i) in data" :key="i" class="flex w-full mb-4">
            <td class="px-4 pt-4 w-1/5 whitespace-nowrap">
                {{ content.name }}
            </td>
            <td class="px-4 pt-4 w-1/5 whitespace-nowrap font-bold">
                Rp {{ Number(content.amount).toLocaleString('id-ID') }},00
            </td>
            <td class="px-4 pt-4 w-1/5 whitespace-nowrap">
                {{ content.tenor }}
            </td>
            <td class="px-4 pt-4 w-1/5 whitespace-nowrap text-sm text-gray-500">
                {{ content.grade }}
            </td>
            <td class="px-4 pt-4 w-1/5 whitespace-nowrap text-sm text-gray-500">
                {{ content.rate }}
            </td>
        </tr>
    </tbody>
</table>
</template>

<script>
export default {
  name: 'TableComponent',
  props: {
    data: Object,
  },
}
</script>