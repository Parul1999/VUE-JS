<template>
<div>
<i class="fa fa-circle fa-4x zoomIn text-primary" 
v-if="iconname==='circle'"></i>
<i class="fa fa-times fa-4x zoomIn text-info" 
v-else-if="iconname==='cross'"/></i>
<img src="../assets/logo.png" class="img-fluid-zoomIn"
v-else-if="iconname==='empty'"
/>
</div>
</template>

//put required as a condition , as we havent handled  //the case user enter anything except , circle,       //cross, empty
<script>
export default{
    props:{
        iconname:{
            type:String,
            required:true
        }
    }
    name:'Icon'
}

</script>

++++++++++++++++++  component style  +++++++++++++++++++++++++

<style>
img {
  width: 80px;
}

@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
}

.zoomIn {
  animation-name: zoomIn;
  animation-duration: 1s;
}
</style>

++++++++++++++++++  component style  +++++++++++++++++++++++++