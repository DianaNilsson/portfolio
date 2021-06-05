<template>
  <label class="switch" label-for="checkbox-switch">
    <input
      id="checkbox-switch"
      @input="$emit('input', $event.target.checked)"
      type="checkbox"
      v-model="checked"
    />
    <span class="slider" />
  </label>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
    }
  },
}
</script>

<style lang="scss" scoped>
// Component scale to match the size of the immediate parent element by using em units.
.switch {
  display: inline-block;
  height: 1.2em;
  line-height: 1em;
  margin-right: 0.5em;
  position: relative;
  width: 2.4em;
}

.switch input {
  height: 0;
  width: 0;
  opacity: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: $light-beige;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: '';
  height: 1em;
  width: 1em;
  left: 0.1em;
  bottom: 0.1em;
  background-color: white;
  -webkit-transition: 0.3s;
  transition: 0.3s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 0 0.1em rgb(157 135 123 / 70%);
}

input:focus:checked + .slider {
  box-shadow: 0 0 0 0.1em rgb(0 123 255 / 50%);
}

input:checked + .slider:before {
  -webkit-transform: translateX(1.2em);
  -ms-transform: translateX(1.2em);
  transform: translateX(1.2em);
}

.slider {
  border-radius: 2em;
}

.slider:before {
  border-radius: 50%;
}
</style>
