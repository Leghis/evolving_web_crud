<template>
<div class=" w-full p-5">
  <div class="flex justify-around">
    <h3 class="text-lg">
      Mini projet Evolving Web (AYINA MAERIK)
    </h3>
    <button @click="showForm===false?showForm=true:showForm=false" class="bg-blue-500 hover:bg-blue-700 text-xs text-white font-bold py-2 px-4 rounded">
      {{showForm===false?'add new user':'Fermer'}}
    </button>
  </div>
  <div class="flex flex-col items-center w-full">
    <form-add-user v-on:dataForm="dataForm" v-if="showForm"/>
    <TableComponent v-if="data" :datas="data"/>
  </div>

</div>
</template>

<script>
import TableComponent from "../components/TableComponent";
import axios from 'axios'
import getAll from '../services/users/getAll'
import FormAddUser from "../components/FormAddUser";
export default {
  name: "indexViews",
  data(){
    return{
      data : null,
      showForm : false
    }
  },
  async mounted() {
    let localData = []
    getAll('https://jsonplaceholder.typicode.com/users')
    .then(response=>{
        console.log(response.data)
        response.data.forEach((data)=>{
          data.update = false
          console.log(data)
          localData = [...localData,data]
        })
        this.data = localData
    })
  },
  components:{
    TableComponent,
    FormAddUser
  },
  methods:{
    dataForm(e){
      this.data.push(e)
      this.showForm = false
    }
  }
}
</script>

<style scoped>

</style>