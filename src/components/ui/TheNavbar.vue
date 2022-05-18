<script setup>
  import BaseLocaleSwitcher from './SwitchLanguageInput.vue'
  import { useI18n } from 'vue-i18n'
  import { ref, onMounted } from 'vue'
  const { t } = useI18n()

  const home = ref(null)
  const skills = ref(null)
  const experience = ref(null)
  const about = ref(null)

  const navbar = ref()
  const togglerBtn = ref()

  const navItems = ref([home, skills, experience, about])

  const scrollPosition = ref(0)
  const scrolledNav = ref(null)

  const handleScroll = () => {
    scrollPosition.value = window.scrollY
    scrolledNav.value = scrollPosition.value > 150
  }

  const CLOSE_ICON = `<svg
        id="close"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        class="bi bi-x-lg"
        viewBox="0 0 16 16"
      >
        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
      </svg>`
  const OPEN_ICON = `<svg
        id="open"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        class="bi bi-list"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
        />
      </svg>`

  const toggle = () => {
    let navClasses = navbar.value.classList
    let toggler = togglerBtn.value
    if (!navClasses.contains('active')) {
      toggler.innerHTML = CLOSE_ICON
      toggler.classList.add('right')
    } else {
      toggler.innerHTML = OPEN_ICON
      toggler.classList.remove('right')
    }
    !navClasses.contains('active') ? navClasses.add('active') : navClasses.remove('active')
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })
</script>

<template>
  <header>
    <a
      ref="togglerBtn"
      class="toggle-btn"
      @click="toggle"
    >
      <svg
        id="open"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        class="bi bi-list"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
        />
      </svg>
    </a>
    <nav
      ref="navbar"
      class="navbar"
      :class="{ scrolledNav: scrolledNav }"
    >
      <div class="nav-brand">
        <div class="brand">
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
      </div>
      <div class="nav-links">
        <router-link
          class="nav-item home"
          :to="{ name: 'home' }"
          @click="toggle"
        >
          {{ t('home') }}
        </router-link>
        <router-link
          class="nav-item experience"
          :to="{ name: 'experience' }"
          @click="toggle"
        >
          {{ t('experience') }}
        </router-link>
        <router-link
          class="nav-item about"
          :to="{ name: 'about' }"
          @click="toggle"
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
  </header>
</template>

<style lang="scss">
$duration: .4s;

@media (min-width: 640px){
  header{
    padding-top: .5em;
    position: absolute;
  }
}


nav {
  display: flex;
  font-family: 'Viga', sans-serif;
  min-height: 7vh;
  position: fixed;
  text-transform: uppercase;
  z-index: 1;
  .nav-links {
    display: flex;
    font-size: .9em;
    font-weight: 200;
  }
  .nav-links,
  .nav-brand {
    align-items: center;
    display: flex;
  }
}

.toggle-btn{
  align-items: center;
  justify-content: end;
  margin: 1.6em 1.6em 0 0;
  order: 1;
  position: absolute;
  right: calc(100vw - 5.5em);
  transition: $duration ease-out;
  -webkit-transition: $duration;
  -moz-transition: $duration;
  width: 2em;
  z-index: 2;
  svg{
    fill: var(--color-light-gray);
    height: 32px;
    width: 32px;
    filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.8));
  }
}

@media (min-width: 640px) {
  nav{
    width: -webkit-fill-available;
    justify-content: space-between;
    padding: 0 2em;
    .nav-brand{
      font-size: 1.1em;
    }
    .nav-item,
    .nav-brand a {
      margin: 0 1rem;
      margin-bottom: -3px;
      padding: 6px 6px;
      cursor: pointer;
      position: relative;
    }
  }
}

@media (min-width: 640px) and (max-width: 860px)
{
  nav{
    font-size: .8em;
    .nav-item{
      margin: 0 .5rem;
    }
  }
}

@media (max-width: 640px) {
  nav{
    background-color: rgba(29, 29, 29, 0.983);
    box-shadow: 0 -2px 20px 20px rgba(20, 20, 20, 0.449);
    font-size: 2.7ch;
    flex-direction: column;
    height: 100%;
    opacity: 0;
    padding: 1em;
    transition: all $duration ease-in-out;
    transform: translateX(-100%);
    width: 80vw;
    .nav-brand{
      justify-content: space-between;
      font-size: .7em;
      margin-bottom: 1rem;
      .brand img{
        width: 32px;
        height: 32px;
      }
    }
    .nav-links{
      border-top: 1px solid #393939;
      text-align: center;
      flex-direction: column;
      .nav-item{
        padding: .6em 0;
      }
      a{
        width: 100%;
      }
    }
  }
  .right{
    right: 7vw !important;
    transition:1s;
  }
  .active{
    opacity: 1;
    transform: translateX(0);
  }

  header{
    width: 100%;
  }
}

nav a.nav-item:hover,
a.nav-item.router-link-active {
  &::before {
    /*content: "";
      background: linear-gradient(90deg, #3B9FA6 0%, #21B08E 100%);
      border-radius: 3px;
      position: absolute;
      border-bottom: 5px solid  linear-gradient(90deg, #3B9FA6 0%, #21B08E 100%);*/
    content: "";
    box-shadow: 0px -3px 10px #21b08e;
    position: absolute;
    margin-top: 1.8em;
    // top: 90%;
    width: 1.5rem;
    height: 5px;
    border-radius: 3px;
    background: linear-gradient(90deg, #3B9FA6 0%, #21B08E 100%);
    @media screen and (max-width: 640px) {
      margin-top: 1.4em;
    }
  }
}

.nav-brand {
  .brand{
    display: inherit;
    align-items: center;
    a {
      margin-left: 6px !important;
    }
    img {
      width: 36px;
      border: 3px solid var(--color-black);
      border-radius: 50px;
      z-index: 1;
    }
  }
}

.scrolledNav {
  background-color: rgba(14, 19, 15, 0.9);
  backdrop-filter: blur(5px);
  border-radius: .5rem;
  transition: all .5s;
}

nav a:link,
a:visited {
  text-decoration: none;
  color: var(--color-text);
  transition: .5s;
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