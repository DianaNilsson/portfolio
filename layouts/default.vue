<template>
  <div class="nuxt-app">
    <div class="bg-image" />
    <nav class="navbar">
      <div class="presentation">
        <img class="portrait" src="~assets/portrait.jpg" alt="porträtt" />
        <p class="name">Diana Nilsson</p>
        <p>
          <fa icon="envelope" />
          <fa :icon="['fab', 'github']" />
          <fa :icon="['fab', 'linkedin']" />
        </p>
      </div>

      <div class="router-links">
        <div class="" :class="currentPath === '/' && 'active'">
          <div class="vertical-bar" />
          <NuxtLink to="/">Hem</NuxtLink>
        </div>
        <div :class="currentPath === '/om' && 'active'">
          <div class="vertical-bar" />
          <NuxtLink to="/om">Om mig</NuxtLink>
        </div>
        <div :class="currentPath === '/projekt' && 'active'">
          <div class="vertical-bar" />
          <NuxtLink to="/projekt">Projekt</NuxtLink>
        </div>
        <div :class="currentPath === '/skills' && 'active'">
          <div class="vertical-bar" />
          <NuxtLink to="/skills">Skills</NuxtLink>
        </div>
        <div :class="currentPath === '/kontakt' && 'active'">
          <div class="vertical-bar" />
          <NuxtLink to="/kontakt">Kontakt</NuxtLink>
        </div>
      </div>

      <button class="collapse-btn">>></button>
    </nav>
    <Nuxt class="route-view" />
  </div>
</template>

<script>
export default {
  computed: {
    currentPath() {
      return this.$nuxt.$route.path
    },
  },
}
</script>

<style lang="scss">
/*----- Layout -----*/
.nuxt-app {
  display: flex;
  height: 100vh;
  overflow: hidden;
}

.route-view {
  flex-grow: 1;
  overflow: hidden;
  position: relative;
}

.navbar {
  width: 14%;
  min-width: 12rem;
  position: relative;
}

.bg-image {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: $light-grey url('~assets/portfolio1.jpg') no-repeat;
  background-size: cover;
}

/*----- Navbar -----*/
.navbar {
  background-color: $dark-blue;
  display: flex;
  flex-direction: column;
  padding: 2rem 0 1rem;
  text-align: center;

  * {
    color: #fff;
    text-align: center;
  }

  .presentation {
    margin-bottom: 2rem;
  }

  .name {
    font-size: 1rem;
    font-weight: 300;
  }

  .portrait {
    width: 55%;
    border: 1px solid $white;
    border-radius: 50%;
  }

  .router-links {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    max-height: 36rem;
  }

  .router-links > * {
    flex-grow: 1;
    position: relative;
    @extend .flex-center;
  }

  .router-links > .active {
    background-color: $light-blue;
  }

  .router-links > .active > .vertical-bar {
    width: 4px;
    background-color: $red;
    border: 1px solid $red;
    border-radius: 3px;
    height: 84%;
    position: absolute;
    left: 0.3rem;
  }

  /*----- Collapse button -----*/
  .collapse-btn {
    background-color: $red;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    position: absolute;
    top: 1rem;
    right: -1.5rem;
    z-index: 1;
    display: block;
  }
}
</style>
