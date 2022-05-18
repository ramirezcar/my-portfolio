<template>
  <Animation
    aos-animation="fade-down"
    duration="2500"
    delay="200"
  >
    <section class="container content">
      <SectionHeader :text="t('about-me')" />
      <div class="two-columns">
        <div
          class="my-photos"
          style="height: 100%"
        >
          <img
            src="@/assets/img/photos.png"
            alt=""
          >
        </div>
      
        <div class="my-info text-right ">
          <div class="py-5">
            <h2 v-html="t('description')" />
            <p v-html="t('paragraph')" />
          <!-- <h4 class='text-primary'>{{t('music.title')}}</h4>
            <p>{{t('music.paragraph')}}</p> -->
          </div>
          <div class="button-group">
            <!-- <Button class="primary" :href="linksJson.music.youtube">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
              </svg>
              YouTube 
            </Button> -->
            <Button
              class="secondary"
              :href="linksJson.music.spotify"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                class="bi bi-spotify"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z" />
              </svg>
              Spotify
            </Button>
          </div>
        </div>
      </div>
    </section>
  </Animation>
</template>

<script setup>
  import linksJson from "../resources/links.json"
  import Button from '@/components/ui/Button.vue'
  import Animation from "@/components/utils/Animation.vue"
  import { useI18n } from 'vue-i18n'
  import SectionHeader from "../components/ui/SectionHeader.vue"

  const { t } = useI18n()
</script>

<style lang="scss" scoped>
  @import '@/assets/variables.scss';

  section{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  // .avatar{
    // -webkit-mask-image: url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDE4NyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8bWFzayBpZD0ibWFzazAiIG1hc2stdHlwZT0iYWxwaGEiPgogICAgICAgIDxwYXRoIGQ9Ik0xOTAuMzEyIDM2LjQ4NzlDMjA2LjU4MiA2Mi4xMTg3IDIwMS4zMDkgMTAyLjgyNiAxODIuMzI4IDEzNC4xODZDMTYzLjM0NiAxNjUuNTQ3IAogICAgICAgIDEzMC44MDcgMTg3LjU1OSAxMDAuMjI2IDE4Ni4zNTNDNjkuNjQ1NCAxODUuMjk3IDQxLjAyMjggMTYxLjAyMyAyMS43NDAzIDEyOS4zNjJDMi40NTc3NSAKICAgICAgICA5Ny44NTExIC03LjQ4NDgxIDU5LjEwMzMgNi42NzU4MSAzNC41Mjc5QzIwLjk4NzEgMTAuMTAzMiA1OS43MDI4IC0wLjE0OTEzMiA5Ny45NjY2IAogICAgICAgIDAuMDAxNjM3MzdDMTM2LjIzIDAuMzAzMTc2IDE3NC4xOTMgMTAuODU3IDE5MC4zMTIgMzYuNDg3OVoiLz4KICAgIDwvbWFzaz4KICAgIDxnIG1hc2s9InVybCgjbWFzazApIj4KICAgICAgICA8cGF0aCBkPSJNMTkwLjMxMiAzNi40ODc5QzIwNi41ODIgNjIuMTE4NyAyMDEuMzA5IDEwMi44MjYgMTgyLjMyOCAxMzQuMTg2QzE2My4zNDYgCiAgICAgICAgMTY1LjU0NyAxMzAuODA3IDE4Ny41NTkgMTAwLjIyNiAxODYuMzUzQzY5LjY0NTQgMTg1LjI5NyA0MS4wMjI4IDE2MS4wMjMgMjEuNzQwMyAKICAgICAgICAxMjkuMzYyQzIuNDU3NzUgOTcuODUxMSAtNy40ODQ4MSA1OS4xMDMzIDYuNjc1ODEgMzQuNTI3OUMyMC45ODcxIDEwLjEwMzIgNTkuNzAyOCAKICAgICAgICAtMC4xNDkxMzIgOTcuOTY2NiAwLjAwMTYzNzM3QzEzNi4yMyAwLjMwMzE3NiAxNzQuMTkzIDEwLjg1NyAxOTAuMzEyIDM2LjQ4NzlaIi8+CiAgICAgICAgPGltYWdlIGhyZWY9IiIvPgogICAgPC9nPgo8L3N2Zz4K");
    // -webkit-mask-repeat: no-repeat;
  // }

  .button-group{
    display: block;
    margin-top: 1em;
  }

  a.button + a.button{
    margin-left: 1em;
  }

  h1{
    text-align: right;
  }

  h2{
    font-family: 'Viga';
    font-size: 2.3em;
    font-weight: 100;
    letter-spacing: 2px;
    margin-bottom: .6em;
  }

  p{
    /* color: #555555; */
    text-align: justify;
    margin-top: .5em;
    margin-bottom: 2em;
    text-shadow: 2px 4px 40px rgb(0, 0, 0);
  }

  .my-info{
    display: block;
    width: 65%;
  }

  /*.bordered{
    background-color: rgba(173, 171, 171, 0.144);
    border: 3px solid var(--color-primary);
    border-style:dotted;
    padding: 3em;
  }*/

  .my-photos{
    display: flex;
    justify-content: center;
    margin-right: 3em;
    margin-top: auto;
    margin-bottom: auto;
    img{
      width: 320px;
    }
  }

  .two-columns{
    display: flex;
    justify-content: space-around;
  }

  @media (max-width: 960px) {
    section{
      flex-direction: column;
      // min-height: auto;
    }

    h1{
      text-align: center;
    }

    h2{
      font-size: 2em;
      margin-top: 0;
      text-align: center;
    }

    .my-info{
      width: auto;
      // margin: 1em 0;
    }

    .my-photos{
      margin: 1em 0;
      img{
        width: 160px;
      }
    }

    .two-columns{
      flex-direction: column;
      justify-content: space-around;
    } 
  }
</style>

<i18n>
{
  "es": {
    "about-me": "Sobre mí",
    "description": "Mi nombre es <span class='text-primary'>Carlos Ramírez</span> y soy desarrollador Frontend",
    "paragraph": "Del sur de Chile, apasionado, dedicado y desde siempre encantado por la tecnología, aprendiendo por mi cuenta en estos 2 cortos pero intensos años de experiencia. 
      <br/><br/>Me considero un autodidacta, lo
      que no sé, lo estudio y lo indago. Ambicioso,
      siempre aprendiendo y buscándome un lugar. Partidario de las buenas
      practicas laborales. Creo que compartir buenos
      valores de forma individual y colectiva es
      imprescindible para superarnos  como
      personas y profesionales.",
    "discover": "descúbrelo tú mismo...",
    "music": {
      "title": "La música 🎹",
      "paragraph": "En el pasado también he hecho algo de música. Una de mis mayores pasiones en la vida.",
      "listen": "Escucha mi música en: "
    }
  },
  "en": {
    "about-me": "About me",
     "description": "My name is <span class='text-primary'>Carlos Ramírez</span> and I am a Frontend developer",
     "paragraph": "From the south of Chile, passionate, dedicated and always enchanted by technology, learning on my own in these 2 short but intense years of experience.
       <br/><br/>I consider myself self-taught,
       I don't know, I study it and investigate it. Ambitious,
       always learning and looking for a place. supporter of the good
       labor practices. I think sharing good
       values individually and collectively
       essential to overcome
       people and professionals.",
     "discover": "discover it yourself...",
     "music": {
       "title": "The music 🎹",
       "paragraph": "I've also done some music in the past. One of my biggest passions in life.",
       "listen": "Listen to my music on: "
     }
  }
}
</i18n>