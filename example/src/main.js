import './assets/main.css'
import h5ui from '@vmkt/h5-ui'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(h5ui)
app.mount('#app')
