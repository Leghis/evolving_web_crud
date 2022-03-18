<template>
<div class="w-full p-5">
  <h3 class="text-lg">
    Information utilisateur
  </h3>
<!--  <TableComponent :datas="data"/>-->
</div>
</template>

<script>
// import TableComponent from "../components/TableComponent";
import axios from 'axios'
export default {
  name: "indexViews",
  data(){
    return{
      data : null
    }
  },
  async mounted() {
    this.data =  await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(this.data.data)
  },
  components:{
    // TableComponent
  }
}
</script>

<style scoped>

</style>