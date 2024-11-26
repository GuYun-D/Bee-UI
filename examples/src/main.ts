import { createApp } from 'vue'
import App from './App.vue'
import './styles.css'
import BeeUI from '@bee-ui/components'
import '@bee-ui/theme-chalk/index.scss'

createApp(App).use(BeeUI).mount('#app')
