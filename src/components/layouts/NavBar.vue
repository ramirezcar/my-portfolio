
<script setup>
  import { useI18n } from 'vue-i18n'
  import BaseLocaleSwitcher from './languageInput/BaseLocaleSwitcher.vue'
  import { ref, onMounted } from 'vue'

  const { t } = useI18n();

  const scrollPosition = ref(0);
  const scrolledNav = ref(null);

  const handlerScroll = () => {
    scrollPosition.value =  window.scrollY;
    scrolledNav.value = scrollPosition.value > 150;
  }

  onMounted(() => {
    window.addEventListener('scroll', handlerScroll)
  })

</script>

<template>
  <nav class="navbar" :class="{scrolledNav: scrolledNav}">
    <div class="nav-brand">
      <img src="https://media-exp1.licdn.com/dms/image/C4E03AQH1o64S2i-h-g/profile-displayphoto-shrink_800_800/0/1638293330730?e=1655337600&v=beta&t=EtQxQQchLytVcMKNbl8AvMXyQ3p_EQR6Un5qLeiyCz0" alt="">
      <router-link class="" to="/">
        Carlos <span class="text-gray">Ramírez</span>
      </router-link>
    </div>
    <div class="nav-links">
      <!-- <router-link class="nav-item" to="/">{{ t('home') }}</router-link>
      <router-link class="nav-item" to="/">{{ t('skills') }}</router-link>
      <router-link class="nav-item" to="/">{{ t('experience') }}</router-link> -->
      <a class="nav-item" href="#home">{{ t('home') }}</a>
      <a class="nav-item" href="#skills">{{ t('skills') }}</a>
      <a class="nav-item" href="#projects">{{ t('projects') }}</a>
      <a class="nav-item" href="#about">{{ t('about') }}</a>
      <!-- <router-link class="nav-item" to="/about">{{ t('about_me') }}</router-link> -->
      <a class="nav-item active" href="#">{{ t('contact') }}</a>
      <span class="nav-item">
        <BaseLocaleSwitcher />
      </span>
    </div>
  </nav>
</template>

<style lang="scss">
  nav.navbar{
    font-family: 'Viga', sans-serif;
    min-height: 7vh;
    /* max-width: 1280px; */
    width: -webkit-fill-available;
    display: flex;
    margin: .5em 1em;
    padding: 0 1em;
    justify-content: space-between;
    position: fixed;
    z-index: 1;
  }

  nav a:hover{
    &::before{
      content: "";
      background: linear-gradient(90deg, #3B9FA6 0%, #21B08E 100%);
      box-shadow: 0px -3px 10px #21b08e;
      border-radius: 3px;
      width: 1.5rem;
      position: absolute;
      top: 50px;
      border-bottom: 5px solid var(--color-primary);
    }
  }

  .nav-links{
    display: flex;
  }

  .nav-brand a, .nav-item{
    text-transform: uppercase;
  }

  .nav-brand{
    font-size: 20px;
    img{
      width: 36px;
      border: 3px solid var(--color-black);
      border-radius: 50px;
      // margin-right: -24px;
      // margin-left: 40px;
      z-index: 1;
    }
  }

  // .nav-brand a:before{
  //   content: '<';
  //   opacity: 0;
  //   transition: .5s;
  // }
  // .nav-brand a:after{
  //   content: '>';
  //   opacity: 0;
  //   transition: .5s;
  // }

  .nav-brand a:hover:before, .nav-brand a:hover:after{
    color: #bebebe;
    opacity: 100;
  }

  .nav-brand a:hover{
    color: #FFFFFF !important;
  }

  nav a:hover{
    // border-bottom: 3px solid #2F2F2F;
    // color: #ffffff !important;
    // background-color: #848484;
  }

  nav a:link, a:visited{
    text-decoration: none;
    color: var(--color-text);
    /* transition: .5s; */
  }
  .nav-item, .nav-brand a{
    margin: 0 1rem;
    margin-bottom: -3px;
    padding: 6px 6px;
  }
  .nav-links, .nav-brand{
    align-items: center;
    display: flex;
  }

  .scrolledNav{
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
    "projects": "Projects",
    "about": "About Me",
    "contact": "Contact Me"
  },
  "es": {
    "home": "Inicio",
    "skills": "Skills",
    "projects": "Proyectos",
    "about": "Sobre mí",
    "contact": "Contáctame"
  }
}
</i18n>