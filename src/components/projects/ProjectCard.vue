<script setup>
  defineProps({
    project: Object,
  })
</script>
<template>
  <a
    :href="project.url ? project.url : '#'"
    :target="project.url ? '_blank' : null"
    class="card focus-anim"
  >
    <div class="info">
      <div class="">
        <h2>
          <span class="text-primary-gradient">
            {{ project.title }}
          </span>
        </h2>
        <p>
          <small>
            <b>{{ project.type }}</b> • <span class="text-muted">{{ project.period }}</span>
          </small>
        </p>
        <p>{{ project.description }}</p>
      </div>
      <b>Tecnologías</b>
      <div class="technologies">
        <!-- Tooltip -->
        <div 
          v-for="tech in project.technologies"
          :key="tech.name"
          class="tooltip"
        >
          <img
            :src="`/img/projects/techs/${tech}.png`"
          >
          <div class="top">
            <span>{{ tech }}</span>
            <i />
          </div>
        </div>
      </div>
    </div>
    <img
      :src="project.images[0]"
      alt=""
    >
  </a>
</template>
<style lang="scss" scoped>
.card{
  background: rgba(0, 0, 0, 0.19);
  backdrop-filter: blur(20px);
  border-radius: 3px;
  color: rgb(202, 202, 202);
  min-height: 144px;
  padding: 3rem;
  display: flex;
  justify-content: space-between;
  grid-gap: 3em;
  text-align: justify;
  cursor: pointer;
  .info{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 1em;
    h2{
      margin: .5em 0;
    }
    img{
      //filter: invert(100%) sepia(0%) saturate(100%) hue-rotate(45deg) brightness(0%) contrast(0%);
      width: fit-content;
      height: 24px;
    }
    .technologies{
      display: flex;
      grid-gap: 1em;
    }
  }
  >img{
    border-radius: .4em;
    min-width: 240px;
    max-height: 140px;
    object-fit: cover;
    margin: auto 0;
  }
  &:hover{
    background: linear-gradient(102.46deg, rgba(24, 24, 22, 0.56) 17.01%, rgba(27, 35, 28, 0.56) 100.78%);
    color: rgb(234, 234, 234);
  }
}

.tooltip {
  display:inline-block;
  position:relative;
  text-align:left;
}

.tooltip .top {
  background-color: #238c74;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 12px;
  min-width: 100px;
  left: 50%;
  top: -15px;
  padding: .6em;
  position: absolute;
  text-transform: capitalize;
  transform: translate(-50%, -100%);
  visibility: hidden; opacity:0; transition:opacity 0.4s;
  z-index: 5;
  &:hover .top {
    visibility: visible; opacity: 1;
  }
  .top i {
    position: absolute;
    top: 94%;
    left: 50%;
    margin-left: -12px;
    width: 24px;
    height: 12px;
    overflow: hidden;
  }
  .top i::after {
    content:'';
    position:absolute;
    width:12px;
    height:12px;
    left:50%;
    transform: translate(-50%,-50%) rotate(45deg);
    background-color: #238c74;
  }
}

@media (max-width: 640px){
  .card{
    padding: 1em;
    min-height: auto;
    grid-gap: 2em;
    flex-wrap: wrap;
    background: transparent;
    border-bottom: 1px solid #383838;
    border-radius: 0;
    padding-bottom: 4em;
    .info{
      gap: .5em;
    }
    img{
      width: 100%;
      height: auto;
    }
  }
}

@media (min-width: 640px) and (max-width: 960px){
  .card{
    padding: 1.5rem;
  }
}
</style>