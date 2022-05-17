<script setup>
  import BaseLocaleSwitcher from './SwitchLanguageInput.vue'
  import { useI18n } from 'vue-i18n'
  import { ref, onMounted } from 'vue'
  const { t } = useI18n()

  const home = ref(null)
  const skills = ref(null)
  const experience = ref(null)
  const about = ref(null)

  const navItems = ref([home, skills, experience, about])

  const scrollPosition = ref(0)
  const scrolledNav = ref(null)

  const handleScroll = () => {
    scrollPosition.value = window.scrollY
    scrolledNav.value = scrollPosition.value > 150
  }

  const handleClick = () => {
    navItems.value.forEach(({ value }) => {
      value?.classList.remove("active")
    })
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })
</script>

<template>
  <nav
    class="navbar"
    :class="{ scrolledNav: scrolledNav }"
  >
    <div class="nav-brand">
      <img
        src="https://media-exp1.licdn.com/dms/image/C4E03AQH1o64S2i-h-g/profile-displayphoto-shrink_800_800/0/1638293330730?e=1655337600&v=beta&t=EtQxQQchLytVcMKNbl8AvMXyQ3p_EQR6Un5qLeiyCz0"
        alt=""
      >
      <router-link
        class=""
        to="/"
      >
        Carlos <span class="text-gray">Ramírez</span>
      </router-link>
    </div>
    <div class="nav-links">
      <router-link
        class="nav-item home"
        :to="{ name: 'home' }"
      >
        {{ t('home') }}
      </router-link>
      <router-link
        class="nav-item experience"
        :to="{ name: 'experience' }"
        @click="handleClick"
      >
        {{ t('experience') }}
      </router-link>
      <router-link
        class="nav-item about"
        :to="{ name: 'about' }"
      >
        {{ t('about') }}
      </router-link>
      <!-- <router-link
        class="nav-item contact"
        :to="{ name: 'contact' }"
      >
        {{ t('contact') }}
      </router-link> -->
      <span class="nav-item">
        <BaseLocaleSwitcher />
      </span>
    </div>
  </nav>
</template>

<style lang="scss">
nav.navbar {
  display: flex;
  font-family: 'Viga', sans-serif;
  /* max-width: 1280px; */
  justify-content: space-between;
  margin: .5em 1em;
  min-height: 7vh;
  padding: 0 1em;
  position: fixed;
  width: -webkit-fill-available;
  z-index: 1;
}

nav a.nav-item:hover,
a.active,
a.nav-item.router-link-active {
  &::before {
    /*content: "";
      background: linear-gradient(90deg, #3B9FA6 0%, #21B08E 100%);
      border-radius: 3px;
      position: absolute;
      border-bottom: 5px solid  linear-gradient(90deg, #3B9FA6 0%, #21B08E 100%);*/
    top: 50px;
    content: "";
    box-shadow: 0px -3px 10px #21b08e;
    position: absolute;
    top: 90%;
    width: 1.5rem;
    height: 5px;
    border-radius: 3px;
    background: linear-gradient(90deg, #3B9FA6 0%, #21B08E 100%);
  }
}

.nav-links {
  display: flex;
  font-size: .9em;
  font-weight: 200;
}

.nav-brand a,
.nav-item {
  text-transform: uppercase;
}

.nav-brand {
  font-size: 1.1rem;

  a {
    margin-left: .2em !important;
  }

  img {
    width: 36px;
    border: 3px solid var(--color-black);
    border-radius: 50px;
    z-index: 1;
  }
}

nav a:link,
a:visited {
  text-decoration: none;
  color: var(--color-text);
  transition: .5s;
}

.nav-item,
.nav-brand a {
  margin: 0 1rem;
  margin-bottom: -3px;
  padding: 6px 6px;
  cursor: pointer;
  position: relative;
}

.nav-links,
.nav-brand {
  align-items: center;
  display: flex;
}

.scrolledNav {
  background-color: rgba(14, 19, 15, 0.9);
  backdrop-filter: blur(5px);
  border-radius: .5rem;
  // box-shadow: 0px -4px 20px rgb(16, 24, 20);
  transition: all .5s;
}
</style>

<i18n>
{
  "en": {
    "home": "Home",
    "skills": "Skills",
    "experience": "Experience",
    "projects": "Projects",
    "about": "About Me",
    "contact": "Contact Me"
  },
  "es": {
    "home": "Inicio",
    "skills": "Skills",
    "experience": "Experiencia",
    "projects": "Proyectos",
    "about": "Sobre mí",
    "contact": "Contáctame"
  }
}
</i18n>