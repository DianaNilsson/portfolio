export default (_context, inject) => {
  inject('skills', {
    // Frontend skills
    frontend: [
      {
        color: '#f0db4f',
        fa: true,
        icon: 'js',
        star: 3,
        title: 'JavaScript',
      },
      {
        color: '#e34c26',
        fa: true,
        icon: 'html5',
        star: 3,
        title: 'HTML5',
      },
      {
        color: '#264de4',
        fa: true,
        icon: 'css3-alt',
        star: 3,
        title: 'CSS',
      },

      {
        color: '#42b883',
        fa: true,
        icon: 'vuejs',
        star: 3,
        title: 'Vue.js',
      },
      {
        fa: false,
        icon: require('~/assets/icons/nuxtdotjs.svg'),
        star: 3,
        title: 'Nuxt.js',
      },
      {
        color: '#61dbfb',
        fa: true,
        icon: 'react',
        star: 1,
        title: 'React',
      },
      {
        color: '#563d7c',
        fa: true,
        icon: 'bootstrap',
        star: 3,
        title: 'Bootstrap-vue',
      },
      {
        color: '#cc6699',
        fa: true,
        icon: 'sass',
        star: 2,
        title: 'SCSS',
      },
    ],

    // Backend skills
    backend: [
      {
        color: '#3c873a',
        fa: true,
        icon: 'node',
        star: 2,
        title: 'Node.js',
      },
      {
        fa: false,
        icon: require('~/assets/icons/express.svg'),
        star: 1,
        title: 'Express.js',
      },
      {
        fa: false,
        icon: require('~/assets/icons/socketdotio.svg'),
        star: 1,
        title: 'Socket.io',
      },
      {
        fa: false,
        icon: require('~/assets/icons/firebase.svg'),
        star: 1,
        title: 'Firebase/Firestore',
      },
      {
        color: '#e34c26',
        fa: true,
        icon: 'php',
        star: 1,
        title: 'PHP',
      },
      {
        fa: false,
        icon: require('~/assets/icons/microsoftsqlserver.svg'),
        star: 1,
        title: 'Microsoft SQL',
      },
      {
        fa: false,
        icon: require('~/assets/icons/sqlite.svg'),
        star: 1,
        title: 'SQLite',
      },
    ],

    // CMS skills
    cms: [
      {
        color: '#21759B',
        fa: true,
        icon: 'wordpress',
        star: 1,
        title: 'Wordpress',
      },
      {
        fa: false,
        icon: require('~/assets/icons/nuxtdotjs.svg'),
        star: 1,
        title: 'Nuxt Content Module',
      },
    ],

    // Design skills
    design: [
      {
        fa: false,
        icon: require('~/assets/icons/figma.svg'),
        star: 2,
        title: 'Figma',
      },
    ],

    // Workflow skills
    workflow: [
      {
        color: '#F05032',
        fa: true,
        icon: 'git',
        star: 2,
        title: 'Git',
      },
      {
        color: '#181717',
        fa: true,
        icon: 'github',
        star: 2,
        title: 'Github',
      },
      {
        color: '#FCA121',
        fa: true,
        icon: 'gitlab',
        star: 2,
        title: 'Gitlab',
      },
    ],
  })
}
