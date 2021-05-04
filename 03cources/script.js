
const App={
    data(){
        return{
            courseList :[
                {
                    id:"lco1",
                    courseName :"Django Full Stack",
                    subTitle:"Learn Django woith postgres",
                    price:"199",
                    courseImage:"django.png",
                    url:"https://github.com/fesdm/LCO"
               },
                {
                    id:"lco2",
                    courseName :"Interview Preparation",
                    subTitle:"Crack the FAANG interview",
                    price:"1999",
                    courseImage:"interview.png",
                    url:"https://courses.learncodeonline.in/learn/Cracking-the-Tech-Interview"
                },
                {
                    id:"lco3",
                    courseName :"React Native",
                    subTitle:"Build Mobile Apps",
                    price:"299",
                    courseImage:"rn.png",
                    url:"https://www.youtube.com/watch?v=0-S5a0eXPoc&ab_channel=ProgrammingwithMosh"
                }]
        }
    }
}

Vue.createApp(App).mount('#vapp')