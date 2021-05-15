<template>
<main>
  <Header title="Movie App"></Header>
<h2>Movie App</h2>
</main>
</template>
<script>
import Header from './layout/Header'
export default {
  name:'App',
  components:{
    Header
    }
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
  background-image: url("./assets/bgc.jpg");
  background-position: center;
  background-size: cover;
  min-height: 100vh;
}
</style>
