import { createApp } from 'vue'
import App from './App.vue'

//sweetalert configurations
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

// createApp(App).mount('#app')
//instead of this we are writting as written in sweetalert docs

const app = createApp(App)
app.use(VueSweetalert2)
app.mount('#app')
