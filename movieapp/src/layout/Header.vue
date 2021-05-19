// layout folder stores layout related components , 
//e.g header , FOOTER ,nav bar
<template>
  <nav class="navbar navbar-dark bg-info">
      <span class="navbar-text text-white ">
       {{title}}
      </span>
  </nav>
</template>

<script>
// props are passed in 2 ways 
//1) props:["title"]
//2) props:{title:String}
export default {
    name: 'Header',
    props: {
        title:String
    }
}
</script>

<style>

</style>