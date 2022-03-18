<template>
<div class="w-full p-5">
  <h3 class="text-lg">
    Mini projet Evolving Web (AYINA MAERIK)
  </h3>
<TableComponent v-if="data" :datas="data"/>
</div>
</template>

<script>
import TableComponent from "../components/TableComponent";
import axios from 'axios'
export default {
  name: "indexViews",
  data(){
    return{
      data : null
    }
  },
  async mounted() {
    let localData = []
    await axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
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
    TableComponent
  }
}
</script>

<style scoped>

</style>