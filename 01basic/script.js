/* Syntax 1 */
//const variable
const App=
{
    //data function from vue , which cannot be a arrow function and it will return an object
    data(){
        //the object that is to be returned is key,value pair
        return{
            name:'Parul Kohli'
        }
    }
}

//when the cdn is written , the script file that is loaded gets the access of the word Vue
//create App is the function of vue which will allow to mount the variable to any place.
Vue.createApp(App).mount('#app');

/* Syntax 2 */
Vue.createApp({
    data(){
        return{
            name : 'Let\'s Begin'
        }
    }
}).mount('#anotherapp')