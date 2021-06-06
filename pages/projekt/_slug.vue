<template>
  <main>
    <h1>{{ project.title }}</h1>
    <nuxt-content :document="project" />
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const project = await $content('projects', params.slug).fetch()

    return {
      project,
    }
  },
}
</script>

<style lang="scss" scoped></style>
