<template>
  <div>
    <header>
      <nav>Navbar</nav>
      <div class="header-bg">
        <div class="bg-image" />
        <div class="triangle" />
        <div class="header-content-container">
          <div class="header-content">
            <h1>Portfolio</h1>
            <h3>Junior frontendutvecklare</h3>
            <p>Diana Nilsson</p>
          </div>
        </div>
      </div>
    </header>
    <Nuxt />
  </div>
</template>

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

/* Header */
header {
  background-color: #4b4b4b;
  height: 100vh;
}
/* Navbar */
nav {
  background-color: #4b4b4b;
  color: white;
  height: 2rem;
}

.header-bg {
  background-color: #fff;
  /* Minus margin header-bg and nav height*/
  height: calc(100vh - 4rem);
  margin: 1rem;
  padding: 2rem 2rem 2rem 0;
  position: relative;
}

.bg-image {
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
    grey url('~assets/portfolio1.jpg') no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
}

.header-content-container {
  background-color: transparent;
  border: 5px solid #8dcdf1;
  height: calc(100vh - 4rem - 6rem);
  width: calc(100vh - 4rem - 6rem);
  position: absolute;
  bottom: 3rem;
  left: 6rem;
}

.header-content {
  background-color: white;
  height: calc((100vh - 4rem - 6rem) * 0.8);
  width: calc((100vh - 4rem - 6rem) * 0.8);
  position: absolute;
  /* Vertical align */
  top: calc(((100vh - 4rem - 6rem) - (100vh - 4rem - 6rem) * 0.8) / 2);
  right: -4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.triangle {
  width: 0;
  height: 0;
  border-bottom: calc(85vh - 2rem) solid #344e5c;
  border-right: calc(70vw - 2rem) solid transparent;
  position: absolute;
  left: 0;
  bottom: 0;
}
</style>
