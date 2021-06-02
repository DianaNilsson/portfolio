<template>
  <header>
    <div class="header-border">
      <div class="header-container">
        <h1>Portfolio</h1>
        <h2>Junior Frontendutvecklare</h2>
        <transition appear name="name">
          <h3>Diana Nilsson</h3>
        </transition>

        <transition appear name="button">
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
        </transition>
      </div>
    </div>
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

//Transitions
.name-leave-active,
.name-enter-active {
  transition: all 0.5s;
}
.name-enter,
.name-leave-to {
  opacity: 0;
  transform: scale(0);
}

.button-leave-active,
.button-enter-active {
  transition: opacity 1s;
}
.button-enter,
.button-leave-to {
  opacity: 0;
}
</style>
