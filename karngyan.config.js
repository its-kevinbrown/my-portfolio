// Upload files in static/ So any file static/file.pdf -> /file.pdf is accessible at root

export default {
  name: 'Chinedu Kevin Ogonda',
  domain: 'kevinog.com', // add without https:// , used in meta tags and share urls
  image: '/images/bigheadkarngyan.png',
  email: 'kevin.ogonda05@gmail.com',
  googleAnalyticsV4: {
    enabled: false,
    id: ''
  },
  plausibleAnalytics: {
    enabled: true,
    domain: 'kevinog.com',
    trackLocalhost: false,
    // leave it empty if plausible is not self hosted
    apiHost: 'https://analytics.lookatx.dev' // default: https://plausible.io
  },
  // enable if you want comments and likes on posts
  // see how it looks on karngyan.com
  firebase: {
    enabled: false
  },
  social: {
    github: 'its-kevinbrown',
    linkedin: 'chinedu-ogonda-404920204',
    facebook: 'kelvin.ogonda',
    twitter: 'D_realkelvin',
    instagram: 'its_kevinbrown',
    codestats: '' // https://codestats.net make a profile if you dont already have one.
  },
  buyMeACoffee: {
    enabled: true,
    url: 'https://www.buymeacoffee.com/kevinog'
  },
  projects: {
    enabled: true,
  },
  blog: {
    enabled: false,
  },
  resume: {
    enabled: true,
    pdfUrl: '/kevinOg resume.pdf' // add files in static folder
  },
  uses: {
    enabled: false,
    meta: [
      {title: 'OS', value: 'macOS Catalina'},
      {title: 'Memory', value: '16 GB 2667 MHz DDR4'},
      {title: 'Keyboard', value: 'Keychron K2 - Gateron Brown Keys'},
      {title: 'Mouse', value: 'Logitech Silent Pebble'},
      {title: 'Monitor', value: 'LG QHD (2560 x 1440) 27 Inch IPS Display'},
      {title: 'Laptop • Processor • Graphics', value: 'MacBook Pro (16-inch, 2019) • 2.6 GHz 6-Core Intel Core i7 • AMD Radeon Pro 5300M 4 GB + Intel UHD Graphics 630 1536 MB'}
    ]
  },
  workedAt: {
    // add logos in static and at max add 3/4
    enabled: false,
    meta: [
      { name: 'SendPost', src: '/images/sendpost.png', url: 'https://sendpost.io' },
      { name: 'Amazon', src: '/images/amazon.png', url: 'https://amazon.in' },
      { name: 'InterviewReady', src: '/images/interviewready-io.png', url: 'https://get.interviewready.io' },
      { name: 'CrioDo', src: '/images/crio.png', url: 'https://crio.do' },
    ]
  },
  recommendations: {
    enabled: true,
    meta: [
      { name: 'Oyetunji Abioye', designation: 'Founder, SirusLabs & Software Engineer, PushPress', image: '/images/Tunji.jpeg', linkedin: 'https://www.linkedin.com/in/tunji-abioye-6625a2103/', content: 'Kevin interned with SirusLabs for around 3 months. He is a very strong software developer who can create pixel perfect frontend while being able to work on backend pieces. He is a quick learner, a great team player and, has a very strong work ethic. You can rely on him that things will be done with utmost quality. He also has pretty good product instincts and can think from the user\'s perspective.' },
      { name: 'Kifen Aseme', designation: 'Solidity Engineer, dcSpark', image: '/images/Aseme.jpeg', linkedin: 'https://www.linkedin.com/in/asemekifen/', content: 'Chinedu is an extraordinarily talented, diligent and foresighted individual. He is gifted at building products from paper to code, and has a knack of finding efficient solutions to complex problems. In my experience, I have rarely seen such a mixture of talent and passion put together. If you are considering working with him: congratulations, you are going to have a great time!' },
    ]
  },
  loadingIndicator: {
    name: 'pulse'
    // https://tobiasahlin.com/spinkit/
    // circle
    // cube-grid
    // fading-circle
    // folding-cube
    // chasing-dots
    // nuxt
    // pulse
    // rectangle-bounce
    // rotating-plane
    // three-bounce
    // wandering-cubes
  },
  laguageSwitcher: {
    enabled: true,
  },
  strings: {
    en_US: {
      download: 'download',
      nav: {
        home: 'home',
        blog: 'blog',
        projects: 'projects',
        uses: 'uses',
        resume: 'résumé',
        buyMeACoffee: 'buy me a beer',
        signIn: 'sign in',
        signOut: 'sign out'
      },
      hero: {
        iBlogTech: 'i blog tech',
        haveALook: 'have a look',
        friendlyNeighborhood: `Hi, i'm Kevin your friendly neighborhood`,
        description: 'i am a software engineer and a part time freelancer. i blog tech, write a weekend newsletter called software shots, and tinker with side projects every now n then.',
        words: ['Developer', 'Designer', 'Engineer', 'Programmer',],
      },
      githubCalendar: {
        header: 'contributions',
        subtext: 'github calendar heatmap'
      },
      blog: {
        header: 'blog',
        subtext: 'i try to write once in a while. let me know your thoughts in comments or mail@karngyan.com'
      },
      recentBlog: {
        header: 'recent blogs',
        subtext: 'it takes a lot of time to write man'
      },
      uses: {
        header: 'uses',
        subtext: 'a quick summary of what I use on a daily basis to code and some codestats.net flex'
      },
      projects: {
        header: 'projects',
        subtext: 'this page lists some of my personal and work projects. every project has some story, click on the title to read'
      },
      recommendations: {
        header: 'recommendations',
        subtext: 'what do my mentors say'
      }
    }
  }
}
