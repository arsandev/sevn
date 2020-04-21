module.exports = {
    title: 'Arsan Dev',
    base: '/sevn/',
    theme: 'yuu',
    themeConfig: {
      repo: 'arsandev/sevn',
      docsBranch: 'docs',
      editLinks: true,
      editLinkText: 'Edit halaman ini!',
      nav: [
          { text: 'Home', link: '/' },
          { text: 'About', link: '/about/' }
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
