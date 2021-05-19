<template>
<div class="text-center">
<i 
v-for="(star,index) in maxStars"
:class="index>rating?unselectedColor:selectedColor"
@click="setRating(index)"

:key="star"
></i>
</div>

</template>

<script>

export default {
  name: 'Rate',
   props:["movieRating"],
  data(){
    return{
      rating:this.movieRating,
      maxStars:5,
      selectedColor:"fa fa-star text-warning ",
      unselectedColor:"fa fa-star "
    }
  },
  methods:{
    setRating(rating)
    {
      this.rating = rating
      // this.movieRating=rating
    }
  },
  mounted() {
    this.rating=this.movieRating
  },
  
}
</script>

<style>
body{
  background-color:#333;
}
</style>
