<template>
  <nav class="navbar" :class="{scrolledNav: scrolledNav}">
    <div class="nav-brand">
      <img src="https://media-exp1.licdn.com/dms/image/C4E03AQH1o64S2i-h-g/profile-displayphoto-shrink_800_800/0/1638293330730?e=1655337600&v=beta&t=EtQxQQchLytVcMKNbl8AvMXyQ3p_EQR6Un5qLeiyCz0" alt="">
      <router-link class="" to="/">
        Carlos <span class="text-gray">Ramírez</span>
      </router-link>
    </div>
    <!-- <h2>Y {{ activeNav }}</h2> -->
    <div class="nav-links">
      <!-- <scrollactive ref="scrollactive" class="my-nav" active-class="active"> -->
        <!-- <router-link class="nav-item" to="/">{{ t('home') }}</router-link> -->
        <a class="nav-item home active" ref="home" href="#home">{{ t('home') }}</a>
        <a class="nav-item skills" ref="skills" href="#skills" v-on:click="handleClick">{{ t('skills') }}</a>
        <a class="nav-item experience" ref="experience" href="#experience">{{ t('experience') }}</a>
        <a class="nav-item projects" ref="projects" href="#projects" aria-disabled="true" role="link" >{{ t('projects') }}</a>
        <a class="nav-item about" ref="about" href="#about">{{ t('about') }}</a>
        <a class="nav-item " ref="" href="#" aria-disabled="true" role="link" >{{ t('contact') }}</a>
      <!-- </scrollactive> -->
      <span class="nav-item">
        <BaseLocaleSwitcher />
      </span>
    </div>
  </nav>
  <slot></slot>
</template>

<script setup>
  import BaseLocaleSwitcher from './languageInput/BaseLocaleSwitcher.vue'
  import { useI18n } from 'vue-i18n'
  import { ref, onMounted } from 'vue'

  const home = ref(null)
  const skills = ref(null)
  const experience = ref(null)
  const about = ref(null)

  const navItems = ref([home, skills, experience, about]);

  const { t } = useI18n();
  const props = defineProps(['active-nav'])

  const clicking = ref(false)

  const scrollPosition = ref(0);
  const scrolledNav = ref(null);

  const handleClick = async (e) => {
    // clicking.value = true;
    // const itemClicked = e.target.classList[1];
    // console.log("clic en ", itemClicked);
    // navItems.value.map(item => {
    //   if (item.value?.classList[1] !== item)
    //     item.value?.classList.remove('active')
    // });
    // let selector = navItems.value.filter(item => {
    //   return item.value?.classList[1] === itemClicked
    // })[0].value;

    // selector.classList.add("active");
    // clicking.value = false;
  }

  const handleScroll = () => {
    scrollPosition.value =  window.scrollY;
    scrolledNav.value = scrollPosition.value > 150;
    console.log(navItems.value);
    navItems.value.forEach(({value}) => {
      value?.classList.remove("active");
      if (value?.classList.contains(props.activeNav)) {
        value?.classList.add("active");
        console.log('setted.');
      }
    });
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  })

</script>

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

  nav a:hover, a.active{
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
    font-size: 1.2rem;
    a{
      margin-left: .2em !important;
    }
    img{
      width: 36px;
      border: 3px solid var(--color-black);
      border-radius: 50px;
      z-index: 1;
    }
  }

  nav a:link, a:visited{
    text-decoration: none;
    color: var(--color-text);
    transition: .5s;
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