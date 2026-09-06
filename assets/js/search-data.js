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
  },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-resume",
          title: "resume",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/resume/";
          },
        },{id: "news-winner-of-two-excellence-awards-in-the-2023-konica-minolta-group-global-improvement-competition",
          title: 'Winner of Two Excellence Awards in the 2023 Konica Minolta Group Global Improvement...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2023-10-01/";
            },},{id: "news-i-represented-instrument-systems-at-the-4th-shenzhen-international-mini-micro-led-industry-chain-innovation-and-development-summit-forum-giving-a-presentation-titled-quot-rapid-testing-of-µleds-and-microdisplays-on-wafer-quot",
          title: 'I represented Instrument Systems at the 4th Shenzhen International Mini/Micro LED Industry Chain...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2023-10-12/";
            },},{id: "news-i-authored-the-book-handbook-of-vr-optical-measurement-the-book-is-divided-into-nine-chapters-comprehensively-covering-international-standards-measurement-equipment-measurement-methods-and-real-world-case-studies-it-systematically-explains-how-to-use-optical-measurement-technology-to-precisely-measure-augmented-reality-ar-virtual-reality-vr-and-mixed-reality-mr-devices-and-their-components-this-book-aims-to-help-interested-people-gain-a-deeper-understanding-of-xr-technologies-while-standardizing-related-terminology-and-technical-knowledge-to-provide-strong-support-for-industry-development-in-addition-to-the-physical-book-i-have-also-published-its-core-content-on-github",
          title: 'I authored the book Handbook of VR Optical Measurement. The book is divided...',
          description: "",
          section: "News",},{id: "news-i-was-honored-to-represent-instrument-systems-as-an-invited-speaker-at-the-2025-international-conference-on-display-technology-icdt-2025-where-i-presented-our-research-titled-measurement-of-near-eye-displays-using-a-goniophotometer-and-imaging-light-measurement-device",
          title: 'I was honored to represent Instrument Systems as an invited speaker at the...',
          description: "",
          section: "News",},{id: "news-i-successfully-defended-my-phd-dissertation-titled-research-on-hyperspectral-fusion-methods-and-applications-in-spectral-and-spatial-classification-based-on-machine-learning-on-july-4-2025-in-early-october-i-officially-received-my-full-time-doctoral-diploma-along-with-my-formal-graduation-certificate-after-nearly-five-years-of-intense-dedication-perseverance-and-growth-through-this-full-time-work-study-journey-i-m-proud-to-say-my-mission-is-accomplished-i-am-now-officially-dr-zhu",
          title: 'I successfully defended my PhD dissertation, titled “Research on Hyperspectral Fusion Methods and...',
          description: "",
          section: "News",},{id: "news-i-am-honored-to-announce-that-i-have-been-appointed-as-a-committee-member-of-the-international-committee-for-display-metrology-icdm-the-official-definitions-and-standards-committee-of-the-society-for-information-display-sid-in-this-role-i-will-contribute-to-developing-and-refining-international-standards-for-display-metrology-helping-shape-the-scientific-and-industrial-benchmarks-that-define-how-displays-are-measured-and-evaluated-worldwide",
          title: 'I am honored to announce that I have been appointed as a Committee...',
          description: "",
          section: "News",},{id: "news-i-m-honored-to-share-that-i-have-been-appointed-as-a-technical-committee-member-of-the-society-for-information-display-sid-beijing-chapter-in-this-capacity-i-will-actively-contribute-to-two-key-sub-committees-vr-amp-amp-ar-and-display-measurement-this-role-offers-a-valuable-opportunity-to-collaborate-with-industry-and-academic-leaders-in-advancing-display-technologies-i-look-forward-to-helping-shape-innovation-at-the-intersection-of-science-engineering-and-real-world-applications",
          title: 'I’m honored to share that I have been appointed as a Technical Committee...',
          description: "",
          section: "News",},{id: "news-i-am-excited-to-announce-the-official-publication-of-the-xr-optical-testing-handbook-isbn-978-7-89569-660-0-this-release-is-a-massive-update-and-complete-rewrite-of-my-2024-book-the-handbook-of-vr-optical-measurement-greatly-expanding-on-the-original-content-to-reflect-the-latest-testing-methodologies-and-advancements-across-the-xr-industry",
          title: 'I am excited to announce the official publication of the XR Optical Testing...',
          description: "",
          section: "News",},{id: "news-i-was-honored-to-represent-instrument-systems-at-the-2026-international-conference-on-display-technology-icdt-2026-where-i-presented-our-three-recently-published-papers-advancing-ar-optics-and-near-eye-display-measurement-our-presented-research-includes-gaze-vs-view-a-framework-for-correlating-dynamic-and-static-measurements-in-ar-optics-colorimetric-characterization-of-see-through-near-eye-displays-and-the-impact-of-waveguide-spectral-filtering-on-ar-color-fidelity",
          title: 'I was honored to represent Instrument Systems at the 2026 International Conference on...',
          description: "",
          section: "News",},{id: "news-i-was-honored-to-be-invited-to-speak-at-the-2026-sid-display-week-review-workshop-in-qingdao-on-august-31-where-i-presented-advances-in-xr-visual-perception-quality-and-evaluation-my-talk-reviewed-advances-highlighted-at-display-week-2026-and-shared-insights-from-my-own-xr-research-including-my-understanding-of-how-optical-performance-human-visual-perception-and-real-world-viewing-conditions-shape-xr-visual-quality-and-its-evaluation",
          title: 'I was honored to be invited to speak at the 2026 SID Display...',
          description: "",
          section: "News",},{id: "news-i-am-honored-to-represent-instrument-systems-at-epic-techwatch-at-cioe-2026-in-shenzhen-on-september-9-where-i-will-present-spectral-trade-offs-in-diffractive-ar-waveguides-sharing-our-research-on-ar-waveguide-optics-with-the-photonics-community",
          title: 'I am honored to represent Instrument Systems at EPIC TechWatch at CIOE 2026...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%74%7A%68%75%36%34@%6F%75%74%6C%6F%6F%6B.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/tzhu64", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=cQCS4YAAAAJ", "_blank");
        },
      },{
        id: 'social-wechat_qr',
        title: 'Wechat_qr',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
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
