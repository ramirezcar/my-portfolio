<template>
  <nav class="navbar" :class="{scrolledNav: scrolledNav}">
    <div class="nav-brand">
      <img src="https://media-exp1.licdn.com/dms/image/C4E03AQH1o64S2i-h-g/profile-displayphoto-shrink_800_800/0/1638293330730?e=1655337600&v=beta&t=EtQxQQchLytVcMKNbl8AvMXyQ3p_EQR6Un5qLeiyCz0" alt="">
      <router-link class="" to="/">
        Carlos <span class="text-gray">Ramírez</span>
      </router-link>
    </div>
    <div class="nav-links">
        <router-link class="nav-item home" to="/">{{ t('home') }}</router-link>
        <router-link class="nav-item experience" to="/experience" v-on:click="handleClick">{{ t('experience') }}</router-link>
        <!-- <router-link class="nav-item skills" to="/skills">{{ t('skills') }}</router-link> -->
        <router-link class="nav-item about" to="/about">{{ t('about') }}</router-link>
        <router-link class="nav-item contact" to="/contact">{{ t('contact') }}</router-link>
        <!-- <a class="nav-item home active" ref="home" v-on:click="handleClick">{{ t('home') }}</a>
        <a class="nav-item skills" ref="skills" v-on:click="handleClick">{{ t('skills') }}</a>
        <a class="nav-item experience" ref="experience" v-on:click="handleClick">{{ t('experience') }}</a>
        <a class="nav-item projects" ref="projects">{{ t('projects') }}</a>
        <a class="nav-item about" ref="about" v-on:click="handleClick">{{ t('about') }}</a>
        <a class="nav-item contact" ref="contact">{{ t('contact') }}</a> -->
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
  import { ref, onMounted, watch } from 'vue'
  const { t } = useI18n();

  const home = ref(null)
  const skills = ref(null)
  const experience = ref(null)
  const about = ref(null)

  const props = defineProps(['active-nav','sections'])
  const navItems = ref([home, skills, experience, about]);

  // const activeNavItem = ref(props.activeNav);

  const scrollPosition = ref(0);
  const scrolledNav = ref(null);

  const handleScroll = () => {
    scrollPosition.value =  window.scrollY;
    scrolledNav.value = scrollPosition.value > 150;
    // navItems.value.forEach(({value}) => {
    //   value?.classList.remove("active");
    //   console.log(activeNavItem.value, value?.classList.contains(activeNavItem.value));
    //   if (value?.classList.contains(activeNavItem.value)) {
    //     value?.classList.add("active");
    //   }
    // });
  }

  // hacer que un watch escuche cuando cambie el prop desde el padre y setee la referencia

  const handleClick = e => {
    const sectionName = e.target.classList[1];
    // let scrollYTarget = props.sections.filter(section => {
    //   return section.value.id === sectionName
    // })[0].value.offsetTop;
    // window.scrollTo(0, scrollYTarget);
    navItems.value.forEach(({value}) => {
      value?.classList.remove("active");
    //   console.log(activeNavItem.value, value?.classList.contains(activeNavItem.value));
    //   if (value?.classList.contains(activeNavItem.value)) {
    //     value?.classList.add("active");
    //   }
    });
    // activeNavItem.value = sectionName;
    console.log(e.target.classList);
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  })

</script>

<style lang="scss">
  nav.navbar{
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

  nav a.nav-item:hover, a.active, a.nav-item.router-link-active{
    &::before{
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

  .nav-links{
    display: flex;
    font-size: .9em;
    font-weight: 200;
  }

  .nav-brand a, .nav-item{
    text-transform: uppercase;
  }

  .nav-brand{
    font-size: 1.1rem;
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
    cursor: pointer;
    position: relative;
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