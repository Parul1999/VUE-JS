<template>
<!-- In script we need not , provide preventdefault separately in script tag , but can write function directly @submit.prevent will prevent default action and if we equate it to some function , that function will run instead of default function -->
  <form @submit.prevent="onSubmit" class="text-center">
     <input 
     class="form-control mb-2"
     name="movieName"
     v-model="movieName"
     placeholder="Enter Movie Name"
     type="text"
     required
     />
      <input 
     class="form-control mb-2"
     name="url"
     v-model="url"
     placeholder="Enter Movie URL"
     type="text"
     required
     />
 
  <input name="watchMovieDate" v-model="watchMovieDate"  type="date" id="example" class="form-control mb-2">
      <button type="submit" class="btn btn-info btn-block">Add Movie</button>
  </form>
</template>

<script>
import {v4 as uuidv4} from 'uuid';
export default {
name: 'Form',
data(){
    return{
      movieName:"",
      url:"",
      watchMovieDate:"",
    }
},
props:{
addMovie:Function
},
methods: {
   onSubmit:function(){
     this.addMovie({
         name:this.movieName,
         movieRating:-1,
         url:this.url,
         id:uuidv4(),
         date:Date.now(),
         watchMovieDate:this.watchMovieDate,
     })
     this.movieName="",
     this.url="",
     this.watchMovieDate=""
   }
},
}
</script>

<style>

</style>