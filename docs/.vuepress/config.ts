import { viteBundler } from '@vuepress/bundler-vite';
import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress';
import { path } from 'vuepress/utils';
import { version } from '../../package.json';

export default defineUserConfig({
  head: [['link', { rel: 'icon', href: `/logo.png` }]],

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

  bundler: viteBundler({
    viteOptions: {
      optimizeDeps: {
        include: ['showdown'],
      },
    },
  }),

  theme: defaultTheme({
    repo: 'meteorlxy/vue-showdown',

    docsDir: 'docs',

    locales: {
      '/': {
        // navbar
        navbar: [
          {
            text: 'Guide',
            link: '/guide/',
          },
          {
            text: 'Playground',
            link: '/playground/',
          },
          {
            text: `v${version}`,
            link: 'https://github.com/meteorlxy/vue-showdown/blob/main/CHANGELOG.md',
          },
        ],
        selectLanguageName: 'English',

        // page meta
        editLinkText: 'Edit this page on GitHub',
      },

      '/zh/': {
        // navbar
        navbar: [
          {
            text: '指南',
            link: '/zh/guide/',
          },
          {
            text: 'Playground',
            link: '/zh/playground/',
          },
          {
            text: `v${version}`,
            link: 'https://github.com/meteorlxy/vue-showdown/blob/main/CHANGELOG.md',
          },
        ],
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        selectLanguageAriaLabel: '选择语言',

        // page meta
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',

        // custom blocks
        tip: '提示',
        warning: '注意',
        danger: '警告',

        // 404 page
        notFound: [
          '这里什么都没有',
          '我们怎么到这来了？',
          '这是一个 404 页面',
          '看起来我们进入了错误的链接',
        ],
        backToHome: '返回首页',

        // other
        openInNewWindow: '在新窗口打开',
      },
    },
  }),

  alias: (_, isServer) => {
    const aliases: Record<string, string> = {
      'vue-showdown': path.resolve(__dirname, '../../src/index.ts'),
    };

    if (!isServer) {
      // enable template compiler
      aliases.vue = 'vue/dist/vue.esm-bundler.js';
    }

    return aliases;
  },
});
