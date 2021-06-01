<template>
  <header>
    <div class="outer-border">
      <div class="headers">
        <h1>Portfolio</h1>
        <h2>Diana Nilsson</h2>
        <h3>Junior Frontendutvecklare</h3>
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
  position: relative;
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
