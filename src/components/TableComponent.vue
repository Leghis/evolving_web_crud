<template>
  <div class="flex flex-col">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-4 inline-block min-w-full sm:px-6 lg:px-8">
        <div class="overflow-hidden">
          <table class="min-w-full text-center">
            <thead   class="border-b bg-gray-800">
            <tr>
              <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                id
              </th>
              <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                name
              </th>
              <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                username
              </th>
              <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                email
              </th>
              <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                Ville
              </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="data in datas" :key="data.id" class="bg-white border-b ">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {{data.id}}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {{data.name}}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {{data.username}}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {{data.email}}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {{data.city}}
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TableComponent",
  props : ['datas']
}
</script>

<style scoped>

</style>