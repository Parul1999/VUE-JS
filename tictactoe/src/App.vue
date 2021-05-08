<template>
<p>Icon</p>
</template>

<script>
import Icon from "./components/Icon.vue"
import Wal from "sweetalert2/dist/sweetalert2.js"

export default {
  name: 'App',
  components:{Icon},
  data(){
    return{
      winMessage:"",
      isCross : true,
      itemArray: new Array(9).fill("empty")
    }
  },
  watch:{
    winMessage:function(message)
    {
      if(message)
      {
        //TODO:call a method to display popup
        this.showDialog();
      }
    }
  },
  methods:{
    showDialog:(
      Swal.fire({
        icon:"info",
        title:"Game Over",
        text: `${this.winMessage}`
      })
    )
  },
  handleClick(itemNumber)
  {
    if(this.winMessage)
    {
      return this.showDialog()
    }
    if(this.itemArray[itemNumber]==="empty")
    {
      this.itemArray[itemNumber]=this.Cross?"cross":"circle";
      this.isCross = !this.isCross
    }
    else
    {
      return Swal.fire("Hey ! Don't act smart")
    }
    this.checkIsWinner()
  },
  checkIsWinner(){
    //checking winner of the Game
    if (
        this.itemArray[0] === this.itemArray[1] &&
        this.itemArray[0] === this.itemArray[2] &&
        this.itemArray[0] !== "empty"
      ) {
        this.winMessage = `${this.itemArray[0]} won`;
      } else if (
        this.itemArray[3] !== "empty" &&
        this.itemArray[3] === this.itemArray[4] &&
        this.itemArray[4] === this.itemArray[5]
      ) {
        this.winMessage = `${this.itemArray[3]} won`;
      } else if (
        this.itemArray[6] !== "empty" &&
        this.itemArray[6] === this.itemArray[7] &&
        this.itemArray[7] === this.itemArray[8]
      ) {
        this.winMessage = `${this.itemArray[6]} won`;
      } else if (
        this.itemArray[0] !== "empty" &&
        this.itemArray[0] === this.itemArray[3] &&
        this.itemArray[3] === this.itemArray[6]
      ) {
        this.winMessage = `${this.itemArray[0]} won`;
      } else if (
        this.itemArray[1] !== "empty" &&
        this.itemArray[1] === this.itemArray[4] &&
        this.itemArray[4] === this.itemArray[7]
      ) {
        this.winMessage = `${this.itemArray[1]} won`;
      } else if (
        this.itemArray[2] !== "empty" &&
        this.itemArray[2] === this.itemArray[5] &&
        this.itemArray[5] === this.itemArray[8]
      ) {
        this.winMessage = `${this.itemArray[2]} won`;
      } else if (
        this.itemArray[0] !== "empty" &&
        this.itemArray[0] === this.itemArray[4] &&
        this.itemArray[4] === this.itemArray[8]
      ) {
        this.winMessage = `${this.itemArray[0]} won`;
      } else if (
        this.itemArray[2] !== "empty" &&
        this.itemArray[2] === this.itemArray[4] &&
        this.itemArray[4] === this.itemArray[6]
      ) {
        this.winMessage = `${this.itemArray[2]} won`;
      }
  },
  reloadGame(){
    this.winMessage="";
    this.isCross=true;
    itemArray: new Array(9).fill("empty")
  }
}
</script>


++++++++++++++++++  app style  +++++++++++++++++++++++++
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
++++++++++++++++++  app style  +++++++++++++++++++++++++

