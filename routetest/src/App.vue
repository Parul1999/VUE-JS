<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <!-- Here we can use js  -->
    <router-link :to="{path:`/account/${course.id}`,query:{token:'123'}}">Account</router-link> |
    <!-- Syntax 3 -->
    <router-link :to="`/account/${course.id2}`">Account Syntax 2</router-link>
      <router-view/>
  </div>


</template>

<script>
export default{
data(){
  return{
  course:{
name:"React",
id:1224,
id2:1334
  }
  }
}
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
