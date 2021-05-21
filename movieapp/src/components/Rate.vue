<template>
<div class="text-center">
<i 
v-for="(star,index) in maxStars"
:class="index>rating?unselectedColor:selectedColor"
@click="setRating(index),addMovieRating(this.movie.id,index)"
:key="star"
></i>
</div>

</template>

<script>

export default {
  name: 'Rate',
   props:["movie","addMovieRating"],
  data(){
    return{
      rating:this.movie.movieRating,
      maxStars:5,
      selectedColor:"fa fa-star text-warning ",
      unselectedColor:"fa fa-star ",
      id:this.movie.id
    }
  },
  methods:{
    setRating(rating)
    {
      this.rating = rating
    },
  },
  mounted() {
    this.rating=this.movie.movieRating
  },
  
}
</script>

<style>
body{
  background-color:#333;
}
</style>
