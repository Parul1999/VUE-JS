<template>
<main 
class="d-flex flex-column justify-content-center align-items-center bg-dark">
<div class="container">
<div class="row justify-content-center mt-3">
<div class="col col-6">
<div class="text-center">
<div v-if="!winMessage">
<h1 class="text-info" v-show="isCross">
{{player1}} Turn
</h1>
<h1 class="text-info" v-show="!isCross">
{{player2}} Turn
</h1>
</div>
<div v-else>
<h1 class="text-warning">
{{winMessage}}
</h1>
</div>
</div>
<div class="grid">
  <div v-for="(item,i) in itemArray" :key="i" 
  @click="handleClick(i)"
  class="card card-body box justify-content-center align-items-center bg-light ">

    <Icon :iconname="item"></Icon>
    </div>
</div>
</div>
</div>

  <div class="text center mt-3"> 
<button  class="button btn btn-danger btn-block pl-5 pr-5" @click="reloadGame" v-show="winMessage">
  Reset Game
</button>
</div>
</div>
</main>
</template>


<script>
import Icon from './components/Icon'
import Swal from 'sweetalert2/dist/sweetalert2.js'

export default{
  name:'App',
  components:{Icon},
  data(){
    return{
      winMessage:"",
      isCross:true,
      itemArray: new Array(9).fill("empty"),
      player1:"",
      player2:"",
    }
  },
  watch:{winMessage:function(message){
    if(message)
    {
      this.showDialog()
    }
  }},
  methods:{
    showDialog(){
      Swal.fire({
        icon:"info",
        title:"Game Over",
        text:`${this.winMessage}`
      })
    },
    handleClick(itemNumber){
      if(this.winMessage)
      {
        return this.showDialog()
      }
     if(this.itemArray[itemNumber] === "empty")
      {
        //if this cross is true , in the itemarray at that index , the respective string is stored
         this.itemArray[itemNumber] = this.isCross ? "cross" : "circle";
        this.isCross = !this.isCross
      }
      else
      {
        Swal.fire("It's occupied already !")
      }
      this.checkIsWinner()
    },
    checkIsWinner(){
     //  checking  winner of the game
      if (
        this.itemArray[0] === this.itemArray[1] &&
        this.itemArray[0] === this.itemArray[2] &&
        this.itemArray[0] !== "empty"
      ) {
        if(this.itemArray[0]=="cross")
        {
        this.winMessage = `${this.player1} won`;
        }
        else
        {
          this.winMessage = `${this.player2} won`;
        }
      } else if (
        this.itemArray[3] !== "empty" &&
        this.itemArray[3] === this.itemArray[4] &&
        this.itemArray[4] === this.itemArray[5]
      ) {
         if(this.itemArray[3]=="cross")
        {
        this.winMessage = `${this.player1} won`;
        }
        else
        {
          this.winMessage = `${this.player2} won`;
        }
      } else if (
        this.itemArray[6] !== "empty" &&
        this.itemArray[6] === this.itemArray[7] &&
        this.itemArray[7] === this.itemArray[8]
      ) {
         if(this.itemArray[6]=="cross")
        {
        this.winMessage = `${this.player1} won`;
        }
        else
        {
          this.winMessage = `${this.player2} won`;
        }
      } else if (
        this.itemArray[0] !== "empty" &&
        this.itemArray[0] === this.itemArray[3] &&
        this.itemArray[3] === this.itemArray[6]
      ) {
         if(this.itemArray[0]=="cross")
        {
        this.winMessage = `${this.player1} won`;
        }
        else
        {
          this.winMessage = `${this.player2} won`;
        }
      } else if (
        this.itemArray[1] !== "empty" &&
        this.itemArray[1] === this.itemArray[4] &&
        this.itemArray[4] === this.itemArray[7]
      ) {
         if(this.itemArray[1]=="cross")
        {
        this.winMessage = `${this.player1} won`;
        }
        else
        {
          this.winMessage = `${this.player2} won`;
        }
      } else if (
        this.itemArray[2] !== "empty" &&
        this.itemArray[2] === this.itemArray[5] &&
        this.itemArray[5] === this.itemArray[8]
      ) {
         if(this.itemArray[2]=="cross")
        {
        this.winMessage = `${this.player1} won`;
        }
        else
        {
          this.winMessage = `${this.player2} won`;
        }
      } else if (
        this.itemArray[0] !== "empty" &&
        this.itemArray[0] === this.itemArray[4] &&
        this.itemArray[4] === this.itemArray[8]
      ) {
         if(this.itemArray[0]=="cross")
        {
        this.winMessage = `${this.player1} won`;
        }
        else
        {
          this.winMessage = `${this.player2} won`;
        }
      } else if (
        this.itemArray[2] !== "empty" &&
        this.itemArray[2] === this.itemArray[4] &&
        this.itemArray[4] === this.itemArray[6]
      ) {
         if(this.itemArray[2]=="cross")
        {
        this.winMessage = `${this.player1} won`;
        }
        else
        {
          this.winMessage = `${this.player2} won`;
        }
      }
      else if(this.itemArray[0]!=="empty" && 
      this.itemArray[1]!=="empty" && 
      this.itemArray[2]!=="empty" && 
      this.itemArray[3]!=="empty" && 
      this.itemArray[4]!=="empty" && 
      this.itemArray[5]!=="empty" && 
      this.itemArray[6]!=="empty" && 
      this.itemArray[8]!=="empty" && 
      this.itemArray[9]!=="empty"
      ){ 
        this.winMessage="It's a Tie. Play once More"
      }
    },
    enterplayerName()
    {
 Swal.fire({
      title:"Enter Players Name's",
      html:'<input id="player1" class="swal2-input" placeholder="Enter the Name of Player1(cross) ">' +
      '<input id="player2" class="swal2-input" placeholder="Enter the Name of Player2(circle)">',
      preConfirm:()=>{
        this.player1 = document.getElementById('player1').value;
     this.player2 = document.getElementById('player2').value;
      }
    })
    
    },
    reloadGame(){
      this.winMessage="",
      this.isCross=true,
      this.itemArray= new Array(9).fill("empty"),
       this.player1="",
      this.player2="",
       this.enterplayerName()
    }
  },
   mounted() {
   this.enterplayerName()
  },
}
</script>

<style>
main {
  height: 100vh;
}
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 5px;
}

.box {
  height: 150px;
}
</style>