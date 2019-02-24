module.exports = {
  title: 'DEV.Boy',
  description: 'Just playing around',
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
      { text: '文章列表', link: '/' },
      { text: 'DevOps', link: '/DevOps/' },
      { 
        text: '關於我', 
        items: [
          { text: 'GitHub', link: 'https://github.com/Leeboyd' }
        ]
      }
    ],
    sidebar: {
      '/DevOps/': [
        '',     /* /DevOps/ */
        ['CH1', 'CH1'],  /* /DevOps/CH1.html */
        ['CH2', 'CH2'],   /* /DevOps/CH2.html */
      ],
      '/Container/': [
        '',
        ['CH2', '卡為標題2'],  /* /DevOps/CH1.html */
        ['CH3', '卡為標題3'],   /* /DevOps/CH2.html */
      ],
      '/': [
        '',
        ['/DevOps/', 'DevOps'],
        ['/Container/', '卡位'],
        ['contact', '聯絡我'],
        ['about', '關於我']
      ] 
    }
  },
  evergreen: true
}