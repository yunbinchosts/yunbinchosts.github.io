// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-academic-activity",
          title: "academic activity",
          description: "A list of my conference presentations, journal publications, and other scholar contributions.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/academic-activity/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "post-i-asked-sam-altman-to-consider-the-possibility-of-imperfect-ai",
        
          title: "I asked Sam Altman to consider the possibility of imperfect AI",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/samaltman/";
          
        },
      },{id: "post-co-creating-a-short-manga-on-ai-ethics-with-a-manga-artist",
        
          title: "Co-Creating a Short Manga on AI Ethics with a Manga Artist",
        
        description: "science communication for creation",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/mynameisai/";
          
        },
      },{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-sts-barometer",
          title: 'STS Barometer',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/baro/";
            },},{id: "projects-elsi-rri-amp-geoengineering",
          title: 'ELSI-RRI &amp;amp; Geoengineering',
          description: "Revisiting ELSI and RRI through the lens of geoengineering",
          section: "Projects",handler: () => {
              window.location.href = "/projects/geo/";
            },},{id: "projects-when-science-meets-manga",
          title: 'When Science Meets Manga',
          description: "Co-creating our future of AI with science communication between scientists and manga artists",
          section: "Projects",handler: () => {
              window.location.href = "/projects/manga/";
            },},{id: "projects-public-perceptions-of-ai-and-nuclear-energy-in-japan",
          title: 'Public Perceptions of AI and Nuclear Energy in Japan',
          description: "Why do older Japanese people tend to support environmentalism but oppose nuclear energy more than younger people?",
          section: "Projects",handler: () => {
              window.location.href = "/projects/nuclear/";
            },},{id: "projects-why-so-few-femain-in-stem",
          title: 'Why so few femain in STEM?',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/stem/";
            },},{id: "projects-public-engagement-in-sustainable-ai-in-east-asia",
          title: 'Public Engagement in Sustainable AI in East Asia',
          description: "How can the public be engaged in East Asia to foster a better society through Sustainable AI?",
          section: "Projects",handler: () => {
              window.location.href = "/projects/sustainableai/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%75%6E%62%69%6E%63%68%6F@%67.%65%63%63.%75-%74%6F%6B%79%6F.%61%63.%6A%70", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/yunbin-cho-687629307", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/@yun_chan0419", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
