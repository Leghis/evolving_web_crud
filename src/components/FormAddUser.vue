<template>
  <div>
    <form class="w-full border border-1 border-blue-50 p-5 shadow-md">
      <div class="flex items-center justify-around mb-6">
        <div class="">
          <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
            Nom
          </label>
        </div>
        <div class="">
          <input v-model="dataForm.name"
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="Nom" name="Nom" type="text" value="" placeholder="Evolving">
        </div>
      </div>
      <div class="flex items-center justify-around mb-6">
        <div class="">
          <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="Username">
            Username
          </label>
        </div>
        <div class="">
          <input v-model="dataForm.username"
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="Username" name="Username" type="text" placeholder="maerik">
        </div>
      </div>
      <div class="flex items-center justify-around mb-6">
        <div class="">
          <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="Email">
            Email
          </label>
        </div>
        <div class="">
          <input v-model="dataForm.email"
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="email" name="Email" type="email" placeholder="maerik.ayina@evolving.com">
        </div>
      </div>

      <div class="flex justify-end">
          <button @click="submit"
              class="shadow text-xs bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit">
            ajouter
          </button>
        </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "FormAddUser",
  data(){
    return{
      dataForm : {
        id:null,
        name : null,
        username : null,
        email : null
      }
    }
  },
  methods:{
    submit(e){
      e.preventDefault()
      this.dataForm.id = Math.ceil(Math.random()*100)
      this.$emit("dataForm",this.dataForm)
    }
  }
}
</script>

<style scoped>

</style>