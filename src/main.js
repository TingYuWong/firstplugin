import { createApp } from 'vue'
import App from './App.vue'
import FirstPlugin from './plugins'

const app = createApp(App)
app.use(FirstPlugin)

app.mount('#app')
