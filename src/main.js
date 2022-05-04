import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import 'aos/dist/aos.css'

import App from './App.vue'
import router from './router'

function getLocale() {
  const LSLocale = localStorage.getItem("locale")
  if (LSLocale) return LSLocale

  let locale = "en"

  // para que se utilice el idioma del navegador
  // const userLocale = navigator?.languages?.[0] || navigator?.language
  // locale = userLocale ? userLocale.split("-")?.[0] : locale

  return locale
}

const messages = {
  en: {
    message: {
      hello: 'hello world'
    }
  },
  es: {
    message: {
      hello: 'Hola Mundo'
    }
  }
}

const i18n = createI18n({
  legacy: false, // you must set `false`, to use Composition API
  locale: getLocale(), // set locale
  fallbackLocale: 'en', // set fallback locale
  messages,
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
