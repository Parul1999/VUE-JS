<template>
<!-- In script we need not , provide preventdefault separately in script tag , but can write function directly @submit.prevent will prevent default action and if we equate it to some function , that function will run instead of default function -->
  <form @submit.prevent="onSubmit" class="text-center">
      <input 
      class="form-control mb-2"
      placeholder="Movie Name"
      name="movieName"
      v-model="movieName"
      type="text"/>
       <input 
      class="form-control mb-2"
      placeholder="Movie URL"
      name="url"
      v-model="url"
      type="text"/>
      <button type="submit" class="btn btn-info btn-block">Add Movie</button>
  </form>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
export default {
name: 'Form',
props:{
    addMovie: Function,
},
data(){
    return{
        movieName:"",
        url:""
    }
},
methods: {
    onSubmit:function(){
        // addmovie , where it's called can be stored to local db , sql ec
        this.addMovie({
            name:this.movieName,
            url:this.url,
            id:uuidv4(),
            date:Date.now()
        });
        this.movieName="";
        this.url="";
    }
},
}
</script>

<style>

</style>