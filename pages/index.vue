<template>
  <header>
    <div class="outer-border">
      <div class="headers">
        <h1>Portfolio</h1>
        <h3>Junior Frontendutvecklare</h3>
        <h2 class="name">Diana Nilsson</h2>
        <button>Visa projekt</button>
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
.outer-border {
  border: 6px solid $light-blue;
  @extend .flex-center;
  width: 40%;
  height: 80%;
  margin: 0 20% 0 10%;
  position: relative;
}

h1 {
  text-transform: uppercase;
  font-weight: 400;
  font-size: 3em;
  margin-bottom: 0.2em;
}

h2 {
  font-family: 'Herr Von Muellerhoff', 'Italianno', serif;
  font-weight: 400;
  font-size: 3em;
  letter-spacing: 2px;
  margin-bottom: 0.2em;
}

h3 {
  text-transform: uppercase;
  font-weight: 400;
  font-size: 1.2em;
  margin-bottom: 2em;
}

.headers {
  background-color: $white;
  height: 80%;
  width: 100%;
  @extend .flex-center;
  flex-direction: column;
  position: absolute;
  left: 20%;
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
