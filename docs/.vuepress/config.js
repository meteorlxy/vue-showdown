module.exports = {
  dest: 'docs-dist',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Vue Showdown',
      description: 'Use showdown.js in Vue',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'Vue Showdown',
      description: '在 Vue 中快速使用 showdown.js',
    },
  },
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
  ],
  serviceWorker: true,
  themeConfig: {
    repo: 'meteorlxy/vue-showdown',
    editLinks: true,
    docsDir: 'docs',
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: [
          {
            text: 'Guide',
            link: '/guide/',
          },
          {
            text: 'Playground',
            link: '/playground/',
          },
        ],
      },
      '/zh/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        nav: [
          {
            text: '指南',
            link: '/zh/guide/',
          },
          {
            text: 'Playground',
            link: '/zh/playground/',
          },
        ],
      },
    },
  },
}
