// layout folder stores layout related components , 
//e.g header , FOOTER ,nav bar
<template>
  <nav class="navbar navbar-dark bg-primary">
      <a href="#" class="navbar-brand">
          <img width="30" height="30" src="../assets/logo-white.png" alt="Logo">
      </a>
      <span class="navbar-text text-white">
          {{title}}
      </span>
  </nav>
</template>

<script>
// props are passed in 2 ways 
//1) props:["title"]
//2) props:{title:String}
export default {
    name:"Header",
    props:{title:String}
}
</script>

<style>

</style>