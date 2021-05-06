<template>
<div class="container">
<div class="card card-body text-center p-4 mt-5  border-primary">
<div>
<h5 class="mt-1 mb-4">Would You like to give a Rating ?</h5>
<i 
v-for="(star,index) in maxStars"
:class="index>rating?unselectedColor:selectedColor"
@click="setRating(index)"

:key="star"
></i>
</div>

<h4 v-if="rating==0" class="text-success mt-4">
Sorry to hear that rating😌
</h4>
<h4 v-if="rating==1" class="text-success mt-4">
We will Improve!🙂
</h4>
<h4 v-if="rating==2" class="text-success mt-4">
Hope next time we will get more!!
</h4>
<h4 v-if="rating==3" class="text-success mt-4">
Almost there to 5👍
</h4>
<h4 v-if="rating==4" class="text-success mt-4">
Thank you so much
</h4>
</div>
</div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      rating:-1,
      maxStars:5,
      selectedColor:"fa fa-star text-warning fa-3x",
      unselectedColor:"fa fa-star fa-3x"
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
