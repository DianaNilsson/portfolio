<template>
  <div class="nuxt-app">
    <transition appear name="background-fade">
      <div class="home-bg" key="home" v-if="homePage" />
      <div class="main-bg" key="main" v-else />
    </transition>
    <nav :class="navbarCollapsed && 'navbar-collapsed'" class="navbar">
      <button
        class="btn collapse-btn"
        @click="navbarCollapsed = !navbarCollapsed"
      >
        <span v-if="navbarCollapsed">&gt;&gt;</span><span v-else>&lt;&lt;</span>
      </button>

      <transition name="navbar-fade">
        <div class="presentation" v-show="!navbarCollapsed">
          <p class="name">Diana Nilsson</p>
          <img class="portrait" src="~assets/portrait.jpg" alt="porträtt" />
          <p class="contact-icons">
            <NuxtLink to="/kontakt">
              <fa icon="envelope" />
            </NuxtLink>
            <a
              href="https://github.com/DianaNilsson"
              rel="noopener"
              target="_blank"
            >
              <fa :icon="['fab', 'github']" />
            </a>
            <a
              href="https://linkedin.com/in/diana-nilsson"
              rel="noopener"
              target="_blank"
            >
              <fa :icon="['fab', 'linkedin']" />
            </a>
          </p>
        </div>
      </transition>

      <transition name="navbar-fade">
        <div class="router-links" v-show="!navbarCollapsed">
          <NuxtLink exact to="/"><span class="vertical-bar" />Hem</NuxtLink>
          <NuxtLink to="/om"><span class="vertical-bar" />Om mig</NuxtLink>
          <NuxtLink to="/projekt">
            <span class="vertical-bar" />Projekt</NuxtLink
          >
          <NuxtLink to="/skills"><span class="vertical-bar" />Skills</NuxtLink>
          <NuxtLink to="/kontakt">
            <span class="vertical-bar" />Kontakt</NuxtLink
          >
        </div>
      </transition>
    </nav>
    <Nuxt class="route-view" />
  </div>
</template>

<script>
export default {
  computed: {
    homePage() {
      return this.$nuxt.$route.path === '/'
    },
  },
  data() {
    return {
      navbarCollapsed: false,
    }
  },
}
</script>

<style lang="scss">
/*----- Layout -----*/
.nuxt-app {
  background: $grey url('~assets/portfolio.jpg') repeat-y;
  background-size: cover;
  display: flex;
  height: 100vh;
  margin: auto;
  max-width: 1800px;
  overflow: hidden;
  position: relative;
}

.route-view {
  flex-grow: 1;
  position: relative;
}

.home-bg {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.main-bg {
  @extend .home-bg;
  background-color: rgba(242, 242, 242, 0.6);
}

.navbar {
  position: relative;
  transition: all 0.6s ease;
  z-index: 1;
  min-width: 12.5rem;
}

.navbar-collapsed {
  width: 2rem !important;
  min-width: 2rem !important;
}

/*----- Navbar -----*/
.navbar {
  background-color: $dark-blue;
  display: flex;
  flex-direction: column;
  padding: 2rem 0 1rem;
  text-align: center;

  * {
    color: $white;
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
    width: 8rem;
    height: 8rem;
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
      &:active {
        transform: scale(1.2);
      }
    }
  }

  .router-links {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    max-height: 32rem;

    .nuxt-link-active {
      background-color: $blue !important;
      box-shadow: 0px 0px 0px 1px $blue-shadow;
      transition: background-color 0.6s ease;

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
    transition: background-color 0.4s ease;
    &:hover {
      background-color: $dark-overlay;
    }
    &:active {
      background-color: $dark-overlay2;
      box-shadow: 0px 0px 0px 3px $blue-shadow;
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

/*----- Transitions -----*/
.background-fade-leave-active,
.background-fade-enter-active {
  transition: opacity 0.8s;
}
.background-fade-enter,
.background-fade-leave-to {
  opacity: 0;
}

.navbar-fade-enter-active {
  transition: opacity 0.4s;
  transition-delay: 0.2s;
}

.navbar-fade-leave-active {
  transition: opacity 0.2s;
}

.navbar-fade-enter,
.navbar-fade-leave-to {
  opacity: 0;
}
</style>
