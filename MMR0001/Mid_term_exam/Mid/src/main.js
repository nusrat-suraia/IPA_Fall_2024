
import './style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from '../src/router/index'
import 'font-awesome/css/font-awesome.min.css'

const app = createApp(App)
app.use(router)
app.mount('#app')

