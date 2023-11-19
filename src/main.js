import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.js"
//Bootstrap Icon
import "bootstrap-icons/font/bootstrap-icons.css"
//Sweet Alert2
import 'sweetalert2/dist/sweetalert2.min.css'


import './assets/main.css'

const app = createApp(App)
//Use Bootstrap (js file)
app.use(bootstrap)
app.use(createPinia())
app.use(router)

app.mount('#app')
