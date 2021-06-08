<template>
  <main>
    <h1>Skills</h1>

    <p class="skills-text">
      Även om jag är en frontendutvecklare så har jag ett stort intresse för
      helheten och arbetar hela tiden på att bredda mina kunskaper inom såväl
      <strong>frontend</strong> som <strong>backend</strong> och
      <strong>design/användarvänlighet</strong>. Nedan följer de tekniker som
      jag arbetat med hittills under mina
      <strong>{{ experience }} år</strong> som programmerare.
    </p>

    <!-- Toggle grading -->
    <div class="grading-container">
      <p class="toggle-grading">
        <SwitchCheckbox @input="showGrading = $event" /> Visa gradering
      </p>

      <transition name="grading-info">
        <div class="grading-description" v-if="showGrading">
          <div class="gradings">
            <p>
              <fa icon="star" :key="number" v-for="number in 3" />
              = har arbetat till stor del med
            </p>
            <p>
              <fa icon="star" :key="number" v-for="number in 2" />
              = har arbetat till viss del med
            </p>
            <p>
              <fa icon="star" />
              = har arbetat litegrann med
            </p>
          </div>

          <p class="info">
            Detta ska enbart ses som ett relativt mått på hur mycket jag har
            arbetat med de olika teknikerna under mina
            <strong>{{ experience }} år</strong> som programmerare.
          </p>
        </div>
      </transition>
    </div>

    <!-- Skill sections -->
    <section v-for="(skillType, key) in $skills" :key="key">
      <h2>
        <span v-if="key === 'frontend'">Frontendrelaterat</span>
        <span v-else-if="key === 'backend'">Backendrelaterat</span>
        <span v-else-if="key === 'cms'">CMS</span>
        <span v-else-if="key === 'design'">Designrelaterat</span>
        <span v-else-if="key === 'workflow'">Workflow</span>
      </h2>

      <transition-group
        appear
        class="skill-card-container"
        name="skill-cards"
        tag="div"
      >
        <div
          class="skill-card"
          :key="skill.title"
          :style="{ transition: `all 0.5s ease ${index / 10}s` }"
          v-for="(skill, index) in skillType"
        >
          <transition name="grading">
            <div class="grading-stars" v-if="showGrading">
              <fa icon="star" :key="star" v-for="star in skill.star" />
            </div>
          </transition>
          <fa
            class="skill-icon"
            :icon="['fab', skill.icon]"
            :style="{ color: skill.color }"
            v-if="skill.fa"
          />
          <img
            class="skill-icon"
            :src="skill.icon"
            :alt="`${skill.title} ikon`"
            v-else
          />
          <p class="skill-title">{{ skill.title }}</p>
        </div>
      </transition-group>
    </section>
  </main>
</template>

<script>
export default {
  computed: {
    experience() {
      const years = new Date().getFullYear() - this.$careerStarted.getFullYear()
      const months = new Date().getMonth() - this.$careerStarted.getMonth()
      let preWord = ''

      if (months < -2) {
        preWord = years === 1 ? 'knappt' : 'knappa'
      } else if (months > 2) {
        preWord = years === 1 ? 'drygt' : 'dryga'
      }

      return `${preWord} ${this.$numberToWordString(years)}`
    },
  },
  data() {
    return {
      showGrading: false,
    }
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
/*----- Skills text -----*/
.skills-text {
  margin-bottom: 2rem;
}

.grading-container {
  margin-bottom: 4rem;
}

.toggle-grading {
  margin-bottom: 2rem;
}

.grading-description {
  display: flex;
  align-items: center;

  .gradings {
    background-color: $blue;
    border-radius: 3px;
    color: $white;
    padding: 0.6rem 1.2rem;
    margin-right: 2rem;

    p {
      white-space: nowrap;
      * {
        color: $light-beige;
        font-size: 0.8rem;
        margin-right: 0.2em;
      }
    }
  }

  .info {
    font-size: 0.9rem;
  }
}

/*----- Skills section------*/
section {
  margin-bottom: 4rem;
}
h2 {
  text-transform: uppercase;
  font-weight: 300;
  font-size: 1.7rem;
  letter-spacing: 0.5px;
  margin-bottom: 1em;
}

.skill-card-container {
  display: flex;
  flex-wrap: wrap;
}

.skill-card {
  position: relative;
  background-color: $white;
  border-radius: 3px;
  box-shadow: $box-shadow;
  position: relative;

  margin: 1%;
  height: 8rem;
  width: calc(92% / 4);

  @extend .flex-center;
  flex-direction: column;

  .skill-title {
    position: absolute;
    bottom: 0.5rem;
  }

  .skill-icon {
    font-size: 3rem;
    height: 3rem;
    margin-bottom: 1rem;
    transition: all 0.5s ease;

    &:hover {
      height: 5rem;
      font-size: 5rem;
    }
  }

  .grading-stars {
    * {
      color: $light-beige;
      font-size: 0.7rem;
      margin-right: 0.1em;
    }

    position: absolute;
    top: 0.2rem;
    left: 0.5rem;
  }
}

/*----- Transitions -----*/
.skill-cards-enter,
.skill-cards-leave-to {
  opacity: 0;
  transform: translateY(100%);
}

.grading-info-leave-active,
.grading-info-enter-active {
  transition: all 0.5s;
}
.grading-info-enter,
.grading-info-leave-to {
  opacity: 0;
  transform: translateY(-20%);
}

.grading-leave-active,
.grading-enter-active {
  transition: opacity 0.5s;
}
.grading-enter,
.grading-leave-to {
  opacity: 0;
}
</style>
