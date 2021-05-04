
const App={
    data(){
        return{
            holdMyItem:[],
            courseList :[
                {
                    id:"lco1",
                    courseName :"Django Full Stack",
                    subTitle:"Learn Django woith postgres",
                    price:199,
                    courseImage:"django.png",
               },
                {
                    id:"lco2",
                    courseName :"Interview Preparation",
                    subTitle:"Crack the FAANG interview",
                    price:1999,
                    courseImage:"interview.png",
            
                },
                {
                    id:"lco3",
                    courseName :"React Native",
                    subTitle:"Build Mobile Apps",
                    price:299,
                    courseImage:"rn.png",
        
                }]
        }
    },
    // Computed and methods store functions
    // The functions defined in computed could not have parameters bt functions in methods couldd have
    computed:{
         finalBill(){
            //  (course,accumulator) would give an error
            //there is 18% tax , so its added
            return this.holdMyItem.reduce((accumulator,course)=>(Number(course.price)+Math.ceil(0.18 * Number(course.price) ))+ accumulator,0) 
         }
    },
    //computed is not actually a function , it the value
    //when the value in holdMyItem changes , computed method wil re-run
    //methods doesnt rerun automatically
    methods:{
       addToHolder(course)
       {
           //if condition if remove from cart wa'snt there
           if(this.holdMyItem.indexOf(course)==-1)
           {
           this.holdMyItem.push(course);
           }
       },
       removeFromHolder(course)
       {
           this.holdMyItem.pop(course)
       }
    }
}
//we dont use => in functions cuz we use this too, so it can create a mess

Vue.createApp(App).mount('#vapp')