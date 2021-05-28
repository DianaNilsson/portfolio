<template>
  <div>
    <div class="bg-image" />
    <nav class="navbar">
      <p>Diana Nilsson</p>
      <img class="portrait" src="~assets/portrait.jpg" alt="porträtt" />
      <p>Frontendutvecklare</p>
      <p>Symboler</p>

      <div class="router-links">
        <div class="" :class="currentPath === '/' && 'active'">
          <div class="vertical-bar" />
          <NuxtLink to="/">Hem</NuxtLink>
        </div>
        <div :class="currentPath === '/portfolio' && 'active'">
          <div class="vertical-bar" />
          <NuxtLink to="/portfolio">Portfolio</NuxtLink>
        </div>
        <div :class="currentPath === '/skills' && 'active'">
          <div class="vertical-bar" />
          <NuxtLink to="/skills">Skills</NuxtLink>
        </div>
        <div :class="currentPath === '/om' && 'active'">
          <div class="vertical-bar" />
          <NuxtLink to="/om">Om</NuxtLink>
        </div>
        <div :class="currentPath === '/kontakt' && 'active'">
          <div class="vertical-bar" />
          <NuxtLink to="/kontakt">Kontakt</NuxtLink>
        </div>
      </div>

      <button class="collapse">>></button>
    </nav>
    <main>
      <Nuxt />
    </main>
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

<style>
/* Reset */
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.bg-image {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
    grey url('~assets/portfolio1.jpg') no-repeat;
  background-size: cover;
}

.navbar {
  background-color: #233f50;
  height: 100vh;
  width: 11rem;
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
  overflow: visible;
  /* overflow-y: scroll; */
}

.navbar::-webkit-scrollbar {
  display: none;
}

.navbar * {
  color: #fff;
}

.navbar > * {
  text-align: center;
}

.router-links > * {
  height: 4rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.router-links > .active {
  background-color: #8babbd;
}

.router-links > .active > .vertical-bar {
  width: 6px;
  background-color: #a4484e;
  border: 2px solid #a4484e;
  border-radius: 3px;
  height: 3rem;

  position: absolute;
  left: 0.5rem;
  top: 0.5rem;
}

a {
  text-decoration: none;
}

.portrait {
  width: 50%;
  border-radius: 2px;
}

.collapse {
  background-color: #a4484e;
  border-radius: 5px;
  border: none;
  padding: 0.5rem 1rem;

  position: absolute;
  top: 1rem;
  right: -1.5rem;
  display: block;
}
</style>
