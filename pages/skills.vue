<template>
  <main>
    <h1>Skills</h1>

    <section v-for="(skillType, key) in $skills" :key="key">
      <h2>
        <span v-if="key === 'frontend'">Frontendrelaterat</span>
        <span v-else-if="key === 'backend'">Backendrelaterat</span>
        <span v-else-if="key === 'cms'">CMS</span>
        <span v-else-if="key === 'workflow'">Workflow</span>
      </h2>

      <div class="card-container">
        <div class="card" :key="skill.title" v-for="skill in skillType">
          <fa
            :icon="['fab', skill.icon]"
            :style="{ color: skill.color }"
            v-if="skill.fa"
          />
          <img :src="skill.icon" alt="nuxt icon" v-else />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
h2 {
  text-transform: uppercase;
  font-weight: 300;
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
}

.card {
  position: relative;
  background-color: $white;
  border-radius: 3px;
  box-shadow: $box-shadow;
  margin: 0.5rem;

  height: 8rem;
  width: 22%;

  @extend .flex-center;
}
</style>
