<template>
<div class="container">
<div class="card card-body text-center p-5 mt-5 border-primary">
<div>
<i 
class="fa fa-star text-warning fa-6x"
@click="setRating(1)"
></i><i 
class="fa fa-star text-warning fa-6x"
@click="setRating(2)"
></i><i 
class="fa fa-star text-warning fa-6x"
@click="setRating(3)"
></i><i 
class="fa fa-star text-warning fa-6x"
@click="setRating(4)"
></i><i 
class="fa fa-star text-warning fa-6x"
@click="setRating(5)"
></i>
</div>

<h1 v-if="rating==1" class="text-success mt-4">
Sorry to hear that rating😌
</h1>
<h1 v-if="rating==2" class="text-success mt-4">
We will Improve!🙂
</h1>
<h1 v-if="rating==3" class="text-success mt-4">
Hope next time we will get more!!
</h1>
<h1 v-if="rating==4" class="text-success mt-4">
Almost there to 5👍
</h1>
<h1 v-if="rating==5" class="text-success mt-4">
So happy , to make you happy
</h1>
</div>
</div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      rating:null
    }
  },
  methods:{
    setRating(rating)
    {
      this.rating = rating
    }
  }
}
</script>

<style>
body{
  background-color:#333;
}
</style>
