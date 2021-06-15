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

    <transition-group
      @before-leave="beforeCardLeave"
      class="flex-container"
      name="cards"
      tag="div"
    >
      <div
        class="card"
        :key="project.title"
        :style="{ transition: `all 0.5s ease ${index / 5}s` }"
        v-for="(project, index) in filteredProjects"
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
              :href="project.code"
              target="_blank"
              v-if="project.code"
            >
              Kod
            </a>
          </div>

          <p class="description">
            {{ project.shortInfo }} ({{ project.createdAt.slice(0, 10) }})
          </p>
        </div>
        <NuxtLink :to="`/projekt/${project.slug}`">
          <h3>{{ project.title }}</h3>
        </NuxtLink>
        <p class="tag-text">
          <span v-for="(tag, i) in project.tags" :key="tag">
            {{ tag }}<span v-if="i !== project.tags.length - 1">, </span>
          </span>
        </p>
      </div>
    </transition-group>
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
  async fetch() {
    try {
      // Get tags only
      this.projectTags = await this.$content('projects').only(['tags']).fetch()
      // Get all filtered projects
      this.filteredProjects = await this.$content('projects')
        .without(['body'])
        .where({
          tags:
            this.filterTags.length === 0
              ? { $containsNone: this.filterTags }
              : { $containsAny: this.filterTags },
        })
        .fetch()
    } catch (e) {
      console.error(e)
    }
  },

  methods: {
    // Remove all cards consistently
    beforeCardLeave(el) {
      el.style.transitionDelay = '0s'
    },
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
    background-color: $light-grey;
    border-radius: 3px;
    cursor: pointer;
    margin: 0.3rem;
    padding: 0.2rem 0.6rem;
    transition: all 0.4s ease;

    &:hover {
      background-color: $white;
      box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
    }
  }

  .active {
    color: $white;
    background-color: $beige;

    &:hover {
      background-color: $light-beige;
    }
  }
}

.flex-container {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -2%;
  position: relative;

  .card {
    margin: 2%;
    width: 46%;

    .img-container {
      border-radius: 3px;
      box-shadow: $box-shadow;
      @extend .flex-center;
      position: relative;
      margin-bottom: 0.8rem;
      overflow: hidden;

      img {
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
        border-radius: 0 0 3px 3px;
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

    h3 {
      font-weight: 500;
      margin-bottom: 0.5rem;
      margin-left: 0.2rem;
    }
    .tag-text {
      color: $dark-grey;
      margin-left: 0.2rem;
    }
  }
}

/*----- Transitions -----*/
.cards-leave-active {
  position: absolute;
}
.cards-enter,
.cards-leave-to {
  opacity: 0;
  transform: translateY(50%);
}
.cards-move {
  transition: all 0.5s ease;
}
</style>
