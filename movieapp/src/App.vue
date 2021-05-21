<template>
<main>
 <Header title="Movie App"/>
  <div class="container mt-3">
    <div class="row">
      <div class="offset-md-3 col-lg-6 p-2">
        <div class="card card-body mb-2">
          <Form :addMovie="addMovie"></Form>
        </div>
        <!-- can write MovieList as movie-list , dash before the next uppercase letter -->
        <movie-list :movies="movies" :deleteMovie="deleteMovie" :addMovieRating="addMovieRating"></movie-list>
      </div>
    </div>
  </div>
</main>
</template>
<script>

import Form from './components/MovieForm'
import MovieList from './components/MovieList'
import Header from './layout/Header'
export default {
  name:'App',
  components:{
    Header,
    Form,
    MovieList
    },
  data(){
    return{
      movies:[]
    }
  },
  methods: {
    addMovie: function(movie)
    {
      this.movies.push(movie);
      localStorage.setItem("@movies",JSON.stringify(this.movies))
    },
    deleteMovie: function(id)
    {
      const index = this.movies.findIndex(movie => movie.id===id);
      this.movies.splice(index,1);
      localStorage.setItem("@movies",JSON.stringify(this.movies))
    },
    addMovieRating: function(id,rating)
    {
      // to get the movies
    const localStorageGetMovies =JSON.parse(localStorage.getItem("@movies"))
    //find the index of the movie, where rating is to be changed
    const index = localStorageGetMovies.findIndex(movie => movie.id===id);
    //update the rating
    localStorageGetMovies[index].movieRating = rating
	// Save back to localStorage
	localStorage.setItem("@movies", JSON.stringify(localStorageGetMovies));
    }
  },
    mounted() {
      if(localStorage.getItem("@movies"))
      {
        try{
            this.movies = JSON.parse(localStorage.getItem("@movies"))
        }
        catch(e)
        {
          localStorage.removeItem("@movies")
        }
      }
    },
}
</script>
<style>
* {
  padding: 0;
  outline: 0;
  margin: 0;
  box-sizing: border-box;
}
main {
  background-color: white;
  min-height: 100vh;
}
</style>
