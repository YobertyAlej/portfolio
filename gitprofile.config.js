// gitprofile.config.js

const config = {
  github: {
    username: 'yobertyalej', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: [
        'gatsby-netlify-cms',
        'order-api-ts',
        'github-email',
        'this-portfolio'
      ], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'yobertyalej',
    twitter: 'yobertyalej',
    facebook: 'yobertyalej',
    instagram: 'yobertyalej',
    medium: 'yobertyalej',
    telegram: 'jelaytreboy',
    phone: '🇻🇪 +584120510619',
    email: 'gyoberty@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.dropbox.com/s/nefhed4pgbs1x8j/Resume%20YobertyAlej%20%281%29.pdf?dl=1', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'Laravel',
    'JavaScript',
    'React.js',
    'Vue',
    'Node.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'PHPUnit',
    'CSS',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'CIFES',
      position: 'Senior Fullstack Engineer',
      from: 'January 2022',
      to: 'Present',
      companyLink: 'https://app.cifesonline.com/',
    },
    {
      company: 'NativApps Inc',
      position: 'Senior Fullstack Engineer',
      from: 'November 2022',
      to: 'Present',
      companyLink: 'https://nativapps.com/',
    },
    {
      company: 'APPYWEB',
      position: 'Senior Full Stack Engineer',
      from: 'June 2021',
      to: 'August 2022',
      companyLink: 'https://www.appyweb.es/',
    },
    {
      company: 'Rootstack',
      position: 'Full Stack Engineer',
      from: 'August 2019',
      to: 'January 2021',
      companyLink: 'https://rootstack.com/',
    },
    {
      company: 'SECREA',
      position: 'Full Stack Engineer',
      from: 'May 2017',
      to: 'December 2017',
      companyLink: 'https://secundariacreativa.com/',
    },
    {
      company: 'Pixeloide Studios',
      position: 'Full Stack Engineer',
      from: 'April 2016',
      to: 'January 2017',
      companyLink: 'https://secundariacreativa.com/',
    },
  ],
  education: [
    {
      institution:
        'Universidad politécnica Territorial de Yaracuy Aristides Bastidas',
      degree: 'Informatics Engineering',
      from: '2011',
      to: '2016',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [],
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'night',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,
    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
};

export default config;
