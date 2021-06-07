<template>
  <article>
    <NuxtLink class="nav-back" to="/projekt">
      <fa class="arrow-icon" icon="arrow-left" />Tillbaka
    </NuxtLink>
    <h1>{{ project.title }}</h1>
    <p class="summary">{{ project.summary }}</p>

    <div class="info-container">
      <table>
        <tr>
          <td>Datum</td>
          <td>2020-07-08</td>
        </tr>
        <tr v-if="project.type">
          <td>Projekttyp</td>
          <td>{{ project.type }}</td>
        </tr>
        <tr v-if="project.size">
          <td>Projektstorlek</td>
          <td>{{ project.size }}</td>
        </tr>
        <tr v-if="project.website">
          <td>Webb</td>
          <td>
            <a class="web-link" :href="project.website" target="_blank">
              {{ project.website }}
            </a>
          </td>
        </tr>
        <tr v-if="project.code">
          <td>Kod</td>
          <td>
            <a :href="project.code" target="_blank">
              <fa class="github-icon" :icon="['fab', 'github']" />
            </a>
          </td>
        </tr>
        <tr v-if="project.tags">
          <td>Tekniker</td>
          <td>
            <span v-for="(tag, index) in project.tags" :key="tag">
              {{ tag }}<span v-if="index !== project.tags.length - 1">, </span>
            </span>
          </td>
        </tr>
      </table>
    </div>

    <div class="flex-container">
      <img
        class="project-img"
        :src="require(`~/assets/project-resources/${project.img}`)"
        :alt="`${project.title} bild`"
      />
      <div class="info">
        <p>hej</p>
      </div>
    </div>

    <nuxt-content :document="project" />
  </article>
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

<style lang="scss" scoped>
.nav-back {
  position: absolute;
  top: 1rem;
  left: 1rem;

  .arrow-icon {
    font-size: 0.8rem;
    margin-right: 0.4rem;
  }
}
.summary {
  margin-bottom: 3rem;
}

.info-container {
  border-bottom: 2px solid transparent;
  border-top: 2px solid transparent;
  border-image: linear-gradient(to left, transparent 10%, $dark-beige 100%) 1;
  margin-bottom: 3rem;
  padding: 1rem 0.5rem;

  table {
    tr {
      td {
        padding-bottom: 0.5rem;
        vertical-align: top;

        .web-link {
          color: $milk-red;
        }

        .github-icon {
          font-size: 1.2rem;
        }
      }
      td:first-child {
        letter-spacing: 1px;
        padding-right: 2.5rem;
        text-transform: uppercase;
      }
    }
  }
}
.flex-container {
  display: flex;

  .project-img {
    border-radius: 3px;
    box-shadow: $box-shadow;
    width: 70%;
  }
}
</style>
