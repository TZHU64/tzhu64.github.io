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
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "中文简历下载 | English CV Download",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-winner-of-two-excellence-awards-in-the-2023-konica-minolta-group-global-improvement-competition",
          title: 'Winner of Two Excellence Awards in the 2023 Konica Minolta Group Global Improvement...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2023-10-01/";
            },},{id: "news-我代表instrument-systems受邀出席第四届深圳国际mini-micro-led产业链创新发展高峰论坛-并发表题为-晶圆上µled和微型显示器的快速测试-的演讲",
          title: '我代表Instrument Systems受邀出席第四届深圳国际Mini/Micro LED产业链创新发展高峰论坛，并发表题为《晶圆上µLED和微型显示器的快速测试》的演讲。',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2023-10-12/";
            },},{id: "news-我的新书-vr光学测量手册-分为九个章节-全面涵盖了国际标准-测量设备-测量方法以及实际案例研究-书中系统地讲解了如何利用光学测量技术精确测量增强现实-ar-虚拟现实-vr-和混合现实-mr-设备及其组件-本书旨在帮助感兴趣的人士更深入地理解xr技术-同时规范相关术语和技术知识-为行业发展提供有力支持-除实体书外-我将其核心内容同步发布在了github-知乎专栏和csdn专栏",
          title: '我的新书《VR光学测量手册》分为九个章节，全面涵盖了国际标准、测量设备、测量方法以及实际案例研究。书中系统地讲解了如何利用光学测量技术精确测量增强现实（AR）、虚拟现实（VR）和混合现实（MR）设备及其组件。本书旨在帮助感兴趣的人士更深入地理解XR技术，同时规范相关术语和技术知识，为行业发展提供有力支持。除实体书外，我将其核心内容同步发布在了Github，知乎专栏和CSDN专栏。',
          description: "",
          section: "News",},{id: "news-i-authored-the-book-handbook-of-vr-optical-measurement-the-book-is-divided-into-nine-chapters-comprehensively-covering-international-standards-measurement-equipment-measurement-methods-and-real-world-case-studies-it-systematically-explains-how-to-use-optical-measurement-technology-to-precisely-measure-augmented-reality-ar-virtual-reality-vr-and-mixed-reality-mr-devices-and-their-components-this-book-aims-to-help-interested-people-gain-a-deeper-understanding-of-xr-technologies-while-standardizing-related-terminology-and-technical-knowledge-to-provide-strong-support-for-industry-development-in-addition-to-the-physical-book-i-have-also-published-its-core-content-on-github",
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
          section: "News",},{id: "projects-hsi-classification",
          title: 'HSI Classification',
          description: "Adaptive Atrous Spatial Pyramid Pooling Network for Hyperspectral Classification",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Adaptive%20Atrous%20Spatial%20Pyramid%20Pooling%20Network%20for%20Hyperspectral%20Classification/";
            },},{id: "projects-end-to-end-spectrometer-automatic-calibration-assistance-platform",
          title: 'End-to-End Spectrometer Automatic Calibration Assistance Platform',
          description: "Excellence Award at the 2023 Konica Minolta Group Global Improvement Competition",
          section: "Projects",handler: () => {
              window.location.href = "/projects/End-to-End%20Spectrometer%20Automatic%20Calibration%20Assistance%20Platform/";
            },},{id: "projects-hsi-msi-fusion",
          title: 'HSI - MSI Fusion',
          description: "Hierarchical Spectral-Spatial Transformer for Hyperspectral and Multispectral Image Fusion",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Hierarchical%20Spectral-Spatial%20Transformer%20for%20Hyperspectral%20and%20Multispectral%20Image%20Fusion/";
            },},{id: "projects-hsi-hypergraph-network",
          title: 'HSI Hypergraph Network',
          description: "Hyperspectral Image Classification Using Multi-Feature Fusion Residual Hypergraph Convolution Network",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Hyperspectral%20Image%20Classification%20Using%20Multi-Feature%20Fusion%20Residual%20Hypergraph%20Convolution%20Network/";
            },},{id: "projects-local-ai-enhanced-knowledge-base-support-web-system",
          title: 'Local AI Enhanced Knowledge-Base Support Web System',
          description: "Excellence Award at the 2023 Konica Minolta Group Global Improvement Competition",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Local%20AI%20Enhanced%20Knowledge-Base%20Support%20Web%20System/";
            },},{id: "projects-measurement-of-ned-using-a-goniophotometer-and-imaging-light-measurement-device",
          title: 'Measurement of NED Using a Goniophotometer and Imaging Light Measurement Device',
          description: "2025 International Conference on Display Technology (ICDT 2025)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Measurement%20of%20Near-Eye%20Displays%20Using%20a%20Goniophotometer%20and%20Imaging%20Light%20Measurement%20Device/";
            },},{id: "projects-晶圆上-μled-和微型显示器的快速测试",
          title: '晶圆上 μLED 和微型显示器的快速测试',
          description: "第四届深圳国际 Mini/Micro LED 产业链创新发展高峰论坛",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Rapid%20Testing%20of%20%C2%B5LEDs%20and%20Microdisplays%20on%20Wafer/";
            },},{id: "projects-vr光学测量手册",
          title: 'VR光学测量手册',
          description: "Handbook for Optical Measurement in VR",
          section: "Projects",handler: () => {
              window.location.href = "/projects/VR%20Handbook/";
            },},{
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
