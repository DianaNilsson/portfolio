export default {
  build: {},

  // Modules for dev and build (recommended)
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/fontawesome',
    '@nuxtjs/google-fonts',
  ],

  // Auto import components
  components: true,

  content: {},

  // Global CSS
  css: ['@/assets/main.scss', '@/assets/default.scss'],

  // Fontawesome module
  fontawesome: {
    component: 'fa',
    icons: {
      brands: [
        'faBootstrap',
        'faCss3Alt',
        'faGit',
        'faGithub',
        'faGitlab',
        'faHtml5',
        'faLinkedin',
        'faJs',
        'faNode',
        'faPhp',
        'faReact',
        'faSass',
        'faVuejs',
        'faWordpress',
      ],
      solid: ['faArrowLeft', 'faEnvelope', 'faFeatherAlt', 'faStar'],
    },
  },

  // Google fonts module
  googleFonts: {
    families: {
      'Herr Von Muellerhoff': [400],
      Italianno: [400],
    },
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    link: [{ href: '/favicon.ico', rel: 'icon', type: 'image/x-icon' }],
    meta: [
      { charset: 'utf-8' },
      { content: 'width=device-width, initial-scale=1', name: 'viewport' },
      {
        content: 'Junior frontendutvecklare',
        hid: 'description',
        name: 'description',
      },
    ],
    title: 'Portfolio',
  },

  modules: ['@nuxtjs/pwa', '@nuxt/content', '@nuxtjs/style-resources'],

  // Plugins to run before rendering page
  plugins: ['@/plugins/facts.js', '@/plugins/utils.js'],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  styleResources: {
    scss: ['@/assets/main.scss', '@/assets/variables.scss'],
  },

  target: 'static',
}
