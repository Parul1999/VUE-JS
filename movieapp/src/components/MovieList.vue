<template>
<ul class="list-unstyled">
    <li class="mb-2" v-for="movie in movies" :key="movie.id">
        <div class="card text-center">
            <div class="card-body row">
                <div class="col-8 d-flex justify-content-center flex-column">
                    <h5 class="card-subtitle mb-1">
                        {{movie.name}}
                    </h5>
                    <h6 v-if="movie.watchMovieDate!=''" class=" text-secondary">
                        Watch on : {{movie.watchMovieDate}}
                    </h6>
                    <p class="card-subtitle mb-2 text-muted">
                       Added on {{formatedDate(movie.date)}}
                    </p>
                   <Rate :movieRating="movie.movieRating"></Rate>
                </div>
                <div class="col col-4">
                    <a :href="movie.url"
                      target="_blank"
                     class="btn btn-outline-primary btn-block">
                     View Movie
                     </a>
                       <button :href="movie.url"
                      @click="deleteMovie(movie.id)"
                     class="btn btn-outline-danger btn-block">
                     Delete Movie
                     </button>
                </div>
            </div>
        </div>
    </li>
</ul>
</template>
<script>
import moment from "moment"
import Rate from './Rate'
export default {
   name:"MovieList" ,
   //movies is a list , deletemovie is a method
   props:["movies","deleteMovie"],
 
   methods:{
       formatedDate: function(date)
       {
           return moment(date).format("DD/MM/YYYY [at] hh:mm a");
       }
   },
   components:{
       Rate
   }
}
</script>
<style lang="">
    
</style>