module.exports = {
  title: 'DEV.Boy',
  description: 'Think twice, code once.',
  head: [
    ['link', { rel: 'icon', href: '/assets/img/icon.png' }]
  ],
  base: "/blog_vuepress/",
  port: 9898,
  markdown: {
    lineNumbers: true,
    config: md => {
      // md.use(require('markdown-it-abbr')),
      // md.use(require('markdown-it-attrs')),
      md.use(require('markdown-it-checkbox')),
      // md.use(require('markdown-it-fontawesome')),
      md.use(require('markdown-it-footnote')),
      // md.use(require('markdown-it-katex')),
      // md.use(require('markdown-it-kbd')),
      // md.use(require('markdown-it-imsize')),
      md.use(require('markdown-it-mark')),
      // md.use(require('markdown-it-plantuml')),
      // md.use(require('markdown-it-sup')),
      // md.use(require('markdown-it-sub')),
      md.use(require('markdown-it-task-checkbox'))
    }
  },
  themeConfig: {
    logo: '/assets/img/logo.png',
    nav: [
      { text: 'Articles', link: '/articles/' },
      { text: 'Journal', link: '/journal' },
      { text: 'About', link: '/about' },
//      {
//        text: '關於我',
//        items: [
//          { text: 'GitHub', link: 'https://github.com/Leeboyd' }
//        ]
//      }
    ],

    sidebarDepth: 2,
    displayAllHeaders: true,
    sidebar: {
      // '/journal': [
      //   ['/journal', '2019'],
      //   ['/journal#_2018', '2018']
      // ],

      '/articles/2018-12-08': [
        ['/articles/2018-12-08', 'Table of Content'],
      ],

      '/articles/2019-01-20': [
        ['/articles/2019-01-20', 'Table of Content'],
      ],

//      '/': [
        // '',
        // ['/articles/', '文章列表'],
        // ['contact', '聯絡我'],
        // ['about', '關於我']
//      ]
    },
  },
  evergreen: true
}