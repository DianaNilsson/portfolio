<template>
  <header>
    <div class="header-border">
      <div class="header-container">
        <h1>Portfolio</h1>
        <h2>Junior Frontendutvecklare</h2>
        <h3>Diana Nilsson</h3>
        <button
          class="btn"
          @click="
            $router.push({
              path: '/projekt',
            })
          "
        >
          Visa projekt
        </button>
      </div>
    </div>
    <div class="triangle-right-corner" />
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
header {
  @extend .flex-center;
}
.header-border {
  border: 6px solid $blue;
  @extend .flex-center;
  width: 40%;
  height: 80%;
  margin: 0 20% 0 10%;
  position: relative;
}

.header-container {
  background-color: $white;
  height: 80%;
  width: 100%;
  @extend .flex-center;
  flex-direction: column;
  position: absolute;
  left: 20%;

  h1 {
    text-transform: uppercase;
    font-weight: 400;
    font-size: 3em;
    margin-bottom: 0.2em;
  }

  h2 {
    text-transform: uppercase;
    font-weight: 400;
    font-size: 1.2em;
    margin-bottom: 2.5em;
  }

  h3 {
    font-family: 'Herr Von Muellerhoff', 'Italianno', serif;
    font-weight: 400;
    font-size: 3em;
    letter-spacing: 2px;
    margin-bottom: 0.4em;
  }
}

.triangle-right-corner {
  width: 0;
  height: 0;
  border-bottom: 100px solid $dark-blue;
  border-left: 100px solid transparent;
  position: absolute;
  right: 0;
  bottom: 0;
}
</style>
