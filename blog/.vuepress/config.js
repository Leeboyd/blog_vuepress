module.exports = {
  title: 'DEV.Boy',
  description: 'Think twice, code once.',
  head: [
    ['link', { rel: 'icon', href: '/assets/img/icon.png' }]
  ],
  port: 9898,
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    logo: '/assets/img/logo.png',
    nav: [
      { text: 'Blog', link: '/articles/' },
      { text: 'CV', link: '/CV/' },
      { 
        text: '關於我', 
        items: [
          { text: 'GitHub', link: 'https://github.com/Leeboyd' }
        ]
      }
    ],
    sidebar: {
      '/articles/': [
        '',     /* /articles/ */
        ['CH1', 'CH1'],  /* /articles/CH1.html */
        ['CH2', 'CH2'],   /* /articles/CH2.html */
      ],
      '/': [
        // '',
        // ['/articles/', '文章列表'],
        // ['contact', '聯絡我'],
        // ['about', '關於我']
      ] 
    }
  },
  evergreen: true
}