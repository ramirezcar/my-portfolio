import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import VueGtag from "vue-gtag"
import 'aos/dist/aos.css'

import App from './App.vue'
import router from './router'

// Locale

function getLocale() {
  const LSLocale = localStorage.getItem("locale")
  if (LSLocale) return LSLocale

  let locale = "es"

  // para que se utilice el idioma del navegador
  // const userLocale = navigator?.languages?.[0] || navigator?.language
  // locale = userLocale ? userLocale.split("-")?.[0] : locale

  return locale
}

const i18n = createI18n({
  legacy: false, // you must set `false`, to use Composition API
  locale: getLocale(), // set locale
  fallbackLocale: 'es', // set fallback locale
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(VueGtag, {
  config: { id: "320501362" }
})

app.mount('#app')
