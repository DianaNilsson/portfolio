export default (_context, inject) => {
  inject('skills', {
    // Frontend skills
    frontend: [
      {
        color: '#f0db4f',
        fa: true,
        icon: 'js',
        title: 'JavaScript',
        star: true,
      },
      {
        color: '#e34c26',
        fa: true,
        icon: 'html5',
        title: 'HTML5',
        star: true,
      },
      {
        color: '#264de4',
        fa: true,
        icon: 'css3-alt',
        title: 'CSS',
        star: true,
      },

      {
        color: '#42b883',
        fa: true,
        icon: 'vuejs',
        title: 'Vue.js',
        star: true,
      },
      {
        fa: false,
        icon: require('~/assets/icons/nuxtdotjs.svg'),
        title: 'Nuxt.js',
        star: true,
      },
      {
        color: '#61dbfb',
        fa: true,
        icon: 'react',
        title: 'React',
        star: false,
      },
      {
        color: '#563d7c',
        fa: true,
        icon: 'bootstrap',
        title: 'Bootstrap-vue',
        star: true,
      },
      {
        color: '#cc6699',
        fa: true,
        icon: 'sass',
        title: 'SCSS',
        star: true,
      },
    ],

    // Backend skills
    backend: [
      {
        color: '#3c873a',
        fa: true,
        icon: 'node',
        title: 'Node.js',
        star: false,
      },
      {
        fa: false,
        icon: require('~/assets/icons/express.svg'),
        title: 'Express.js',
        star: false,
      },
      {
        fa: false,
        icon: require('~/assets/icons/socketdotio.svg'),
        title: 'Socket.io',
        star: false,
      },
      {
        fa: false,
        icon: require('~/assets/icons/firebase.svg'),
        title: 'Firebase/Firestore',
        star: false,
      },
      {
        color: '#e34c26',
        fa: true,
        icon: 'php',
        title: 'PHP',
        star: false,
      },
      {
        fa: false,
        icon: require('~/assets/icons/microsoftsqlserver.svg'),
        title: 'Microsoft SQL',
        star: false,
      },
      {
        fa: false,
        icon: require('~/assets/icons/sqlite.svg'),
        title: 'SQLite',
        star: false,
      },
    ],

    // CMS skills
    cms: [
      {
        color: '#21759B',
        fa: true,
        icon: 'wordpress',
        title: 'Wordpress',
        star: false,
      },
      {
        fa: false,
        icon: require('~/assets/icons/nuxtdotjs.svg'),
        title: 'Nuxt Content Module / Headless CMS',
        star: true,
      },
    ],

    // Workflow skills
    workflow: [
      {
        color: '#F05032',
        fa: true,
        icon: 'git',
        title: 'Git',
        star: false,
      },
      {
        color: '#181717',
        fa: true,
        icon: 'github',
        title: 'Github',
        star: false,
      },
      {
        color: '#FCA121',
        fa: true,
        icon: 'gitlab',
        title: 'Gitlab',
        star: false,
      },
      {
        fa: false,
        icon: require('~/assets/icons/nuxtdotjs.svg'),
        title: 'Nuxt Content Module / Headless CMS',
        star: true,
      },
    ],
  })
}
