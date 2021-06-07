<template>
  <main>
    <h1>Projekt</h1>
    <div class="tags">
      <button
        class="tag"
        :class="filterTags.includes(tag) && 'active'"
        @click="toggleTag($event.target.innerText)"
        v-for="tag in tags"
        :key="tag"
      >
        {{ tag }}
      </button>
    </div>

    <div class="flex-container">
      <div
        class="card"
        v-for="project in filteredProjects"
        :key="project.title"
      >
        <div class="img-container">
          <img
            :src="require(`~/assets/project-resources/${project.img}`)"
            :alt="`${project.title} bild`"
          />
          <NuxtLink class="overlay" :to="`/projekt/${project.slug}`" />

          <div class="links">
            <a
              class="btn"
              :href="project.website"
              target="_blank"
              v-if="project.website"
            >
              Webbsida
            </a>
            <a
              class="btn"
              :href="project.github"
              target="_blank"
              v-if="project.github"
            >
              Github
            </a>
          </div>

          <p class="description">{{ project.description }}</p>
        </div>
        <NuxtLink :to="`/projekt/${project.slug}`">
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
      this.projectTags.forEach((row) => {
        // Merge arrays without duplicates
        tags = [...new Set([...tags, ...row.tags])]
      })
      return tags
    },
  },
  data() {
    return {
      filterTags: [],
      filteredProjects: [],
      projectTags: [],
    }
  },
  // eslint-disable-next-line vue/order-in-components
  async fetch() {
    // https://github.com/techfort/LokiJS/wiki/Query-Examples#find-queries

    this.projectTags = await this.$content('projects').only(['tags']).fetch()
    this.filteredProjects = await this.$content('projects')
      .without(['body'])
      .where({
        tags:
          this.filterTags.length === 0
            ? { $containsNone: this.filterTags }
            : { $containsAny: this.filterTags },
      })
      .fetch()
  },

  methods: {
    toggleTag(e) {
      !this.filterTags.includes(e)
        ? this.filterTags.push(e)
        : this.filterTags.splice(this.filterTags.indexOf(e), 1)
    },
  },
  watch: {
    filterTags() {
      this.$fetch()
    },
  },
}
</script>

<style lang="scss" scoped>
.tags {
  margin-bottom: 3rem;

  .tag {
    border-radius: 3px;
    cursor: pointer;
    margin: 0.3rem;
    padding: 0.2rem 0.6rem;
    transition: background-color 0.4s ease;
  }

  .active {
    color: #fff;
    background-color: $dark-beige;
  }
}

.flex-container {
  display: flex;
  flex-wrap: wrap;

  .card {
    margin: 2%;
    width: 46%;

    .img-container {
      box-shadow: $box-shadow;
      @extend .flex-center;
      position: relative;
      margin-bottom: 0.8rem;
      overflow: hidden;

      img {
        border-radius: 3px;
        width: 100%;
        //  Provides a placement different from the browser's default
        vertical-align: top;
      }

      .links {
        margin-bottom: 1rem;
        opacity: 0;
        position: absolute;
        transition: all 0.3s ease;
        visibility: hidden;

        a {
          margin: 0.3rem;
        }
      }

      .description {
        background-color: $blue;
        color: $white;
        bottom: 0;
        padding: 1rem;
        position: absolute;
        text-align: center;
        visibility: hidden;
        width: 100%;
        transform: translateY(100%);
        transition: all 0.3s ease;
      }

      .overlay {
        // background-color: rgba(255, 255, 255, 0.8);
        border-radius: 3px;
        height: 100%;
        width: 100%;
        position: absolute;
      }

      &:hover,
      &:focus,
      &:focus-within {
        .overlay {
          background-color: rgba(255, 255, 255, 0.75);
        }

        .links,
        .description {
          opacity: 1;
          transform: translateY(0);
          visibility: visible;
        }
      }
    }
  }
}
</style>
