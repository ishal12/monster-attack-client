import { createApp } from 'vue'
import Router from './routes'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

createApp(App)
  .use(Router)
  .use(vuetify)
  .mount('#app')
