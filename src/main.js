import { createApp } from 'vue'
import App from '@/App.vue'
import store from '@/store'
import router from '@/router'
import vuetify from '@/plugins/vuetify'


const app = createApp(App)

app
  .use(vuetify)
  .use(store)
  .use(router)
  .mount('#app')
