<template>
<table class="min-w-full divide-y divide-gray-200 mt-4">
    <thead class="bg-gray-50">
        <tr>
            <th scope="col" class="px-6 py-3 text-left text-xs font-extrabold text-gray-500 uppercase tracking-wider">
                Name
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-extrabold text-gray-500 uppercase tracking-wider">
                Amount
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-extrabold text-gray-500 uppercase tracking-wider">
                Tenor
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-extrabold text-gray-500 uppercase tracking-wider">
                Grade
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-extrabold text-gray-500 uppercase tracking-wider">
                Rate
            </th>
        </tr>
    </thead>
    <tbody v-for="(content, i) in data.contents" class="bg-white divide-y divide-gray-200">
        <tr>
        <td class="px-6 py-4 whitespace-nowrap">
            {{ content.name }}
        </td>
        <td class="px-6 py-4 whitespace-nowrap font-bold">
            Rp {{ Number(content.amount).toLocaleString('id-ID') }},00
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
            {{ content.tenor }}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {{ content.grade }}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
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
    data: Array,
  },
}
</script>