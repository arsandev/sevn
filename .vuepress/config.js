module.exports = {
    title: 'Arsan Dev',
    base: '/sevn/',
    theme: 'yuu',
    themeConfig: {
      repo: 'arsandev/sevn',
      repoLabel: 'Kontribusi!',
      docsBranch: 'docs',
      editLinks: true,
      editLinkText: 'Edit halaman ini!',
      nav: [
          { text: 'Home', link: '/' },
          { text: 'About', link: '/about/' },
          { text: 'Github', link: 'https://github.com/arsandev/sevn' }
      ],
      sidebar: [
          '/',
          '/server/',
          '/client/',
          '/deploy/'
      ],
      yuu: {
			   defaultColorTheme: 'blue'
		  }
    }
}
