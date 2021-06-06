<template>
  <main>
    <h1>Projekt</h1>

    <button class="tag" v-for="tag in tags" :key="tag">{{ tag }}</button>

    <div class="flex-container">
      <div class="card" v-for="project in projects" :key="project.title">
        <NuxtLink :to="`/projekt/${project.slug}`">
          <img
            :src="require(`~/assets/project-resources/${project.img}`)"
            :alt="`${project.title} bild`"
          />
          <h3>{{ project.title }}</h3>
        </NuxtLink>

        <span v-for="(tag, index) in project.tags" :key="tag">
          {{ tag }}<span v-if="index !== project.tags.length - 1">, </span>
        </span>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  computed: {
    tags() {
      let tags = []
      this.projects.forEach((project) => {
        // Merge arrays without duplicates
        tags = [...new Set([...tags, ...project.tags])]
      })
      return tags
    },
  },
  data() {
    return {
      filterTags: ['react', 'nuxt'],
      projects: [],
    }
  },
  async fetch() {
    // https://github.com/techfort/LokiJS/wiki/Query-Examples#find-queries
    this.projects = await this.$content('projects')
      .without(['body'])
      // .where({ tags: { $containsAny: this.filterTags } })
      .fetch()
  },
}
</script>

<style lang="scss" scoped>
.tag {
  border-radius: 3px;
  cursor: pointer;
  margin: 0.3rem;
  padding: 0.2rem 0.6rem;
}
.flex-container {
  display: flex;
  flex-wrap: wrap;

  .card {
    width: 46%;
    margin: 2%;

    img {
      width: 100%;
      border-radius: 3px;
      box-shadow: $box-shadow;
      margin-bottom: 0.8rem;
    }
  }
}
</style>
