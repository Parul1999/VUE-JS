Vue.createApp({
    data(){
        return{
            heroSelect :"",
            avengerSelect:[],
            myDynamic:"",
            myBonds:[
                {
                    text:'James Bond',
                    value:7
                },
                {
                    text:'Jammy Bond',
                    value:8
                },
                {
                    text:'Velry Bond',
                    value:9
                }]
        }
    }
}).mount('#vapp')