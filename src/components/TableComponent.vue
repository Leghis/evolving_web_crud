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
                #
              </th>
              <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                #
              </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(data,index) in datas" :key="index" class="bg-white border-b ">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                <span>{{data.id}}</span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                <span v-if="!data.update">{{data.name}}</span>
                <input v-if="data.update" type="text" v-model="datas[index].name" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" >
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                <span v-if="!data.update">{{data.username}}</span>
                <input v-if="data.update" type="text" v-model="datas[index].username" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" >
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                <span v-if="!data.update">{{data.email}}</span>
                <input v-if="data.update" type="text" v-model="datas[index].email" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" >
              </td>
              <td>
                <button  @click="!data.update?data.update=true:data.update=false" class="flex bg-transparent text-sm hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-2 border border-blue-500 hover:border-transparent rounded">
                  {{!data.update?'Modifier':'Fermer'}}
                </button>
              </td>
              <td>
                <button   @click="detele(index)" class="flex bg-transparent text-sm hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-2 border border-red-500 hover:border-transparent rounded">
                  supprimer
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                  </svg>
                </button>
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
  props : ['datas'],
  data(){
    return{
    }
  },
  methods:{
    detele(id){
      this.datas.splice(id,1)
    }
  }
}
</script>

<style scoped>

</style>