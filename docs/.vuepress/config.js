const path = require('path');

module.exports = {
  lang: 'zh-CN',
  title: 'soul-plus',
  description: 'Mobile UI Components built on Vue3 and Vite',

  base: '/soul-plus/',
  dest: path.resolve(__dirname, './dist'),

  alias: {
    packages: path.resolve(__dirname, '../../packages')
  },

  plugins: [
    [
      '@vuepress/register-components',
      {
        componentsDir: path.resolve(__dirname, './components')
      }
    ]
  ],

  themeConfig: {
    repo: 'https://gitee.com/jsdawn/soul-plus.git',
    editLink: false,
    navbar: [
      { text: '指南', link: '/' },
      { text: '组件', link: '/components.md' },
      { text: '青山依旧', link: 'http://www.qscoding.com/' }
    ],
    lastUpdated: false,
    contributors: false
  }
};
