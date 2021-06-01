<template>
  <div class="nuxt-app">
    <div class="bg-image" />
    <nav :class="navbarCollapsed && 'navbar-collapsed'" class="navbar">
      <div class="presentation" v-if="!navbarCollapsed">
        <p class="name">Diana Nilsson</p>
        <img class="portrait" src="~assets/portrait.jpg" alt="porträtt" />
        <p class="contact-icons">
          <NuxtLink to="/kontakt">
            <fa icon="envelope" />
          </NuxtLink>
          <a href="https://github.com/DianaNilsson" target="_blank">
            <fa :icon="['fab', 'github']" />
          </a>
          <a href="www.linkedin.com/in/diana-nilsson" target="_blank">
            <fa :icon="['fab', 'linkedin']" />
          </a>
        </p>
      </div>

      <div class="router-links" v-if="!navbarCollapsed">
        <NuxtLink to="/"><span class="vertical-bar" />Hem</NuxtLink>
        <NuxtLink to="/om"><span class="vertical-bar" />Om mig</NuxtLink>
        <NuxtLink to="/projekt"> <span class="vertical-bar" />Projekt</NuxtLink>
        <NuxtLink to="/skills"><span class="vertical-bar" />Skills</NuxtLink>
        <NuxtLink to="/kontakt"> <span class="vertical-bar" />Kontakt</NuxtLink>
      </div>

      <button
        class="btn collapse-btn"
        @click="navbarCollapsed = navbarCollapsed ? false : true"
      >
        <span v-if="navbarCollapsed">&gt;&gt;</span><span v-else>&lt;&lt;</span>
      </button>
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
  data() {
    return {
      navbarCollapsed: true,
    }
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
  min-width: 12rem;
  position: relative;
  transition: width 0.5s ease-in-out;
  width: 14%;
}

.navbar-collapsed {
  width: 2rem !important;
  min-width: 2rem !important;
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
    margin-bottom: 1.5rem;
  }

  .name {
    font-weight: 400;
    letter-spacing: 0.5px;
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  .portrait {
    border: 1px solid $white;
    border-radius: 50%;
    margin-bottom: 1rem;
    width: 60%;
  }

  .contact-icons {
    font-size: 1.2rem;
    a {
      margin: 0 0.5rem;
      display: inline-block;
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.4);
      }
    }
  }

  .router-links {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    max-height: 36rem;

    .nuxt-link-exact-active {
      background-color: $blue !important;
      box-shadow: 0px 0px 0px 1px $blue-shadow;
      transition: background-color 0.4s ease;

      .vertical-bar {
        width: 4px;
        background-color: $light-blue;
        border: 1px solid $light-blue;
        border-radius: 3px;
        height: 84%;
        position: absolute;
        left: 0.4rem;
      }
    }
  }

  .router-links > * {
    flex-grow: 1;
    position: relative;
    @extend .flex-center;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: $dark-overlay;
    }
  }

  /*----- Collapse button -----*/
  .collapse-btn {
    position: absolute;
    top: 4rem;
    right: -1.5rem;
    z-index: 1;
  }
}
</style>
