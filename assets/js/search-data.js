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
            },},{id: "news-为了在xr领域进一步推动技术创新与知识共享-我撰写了-vr光学测量手册-一书-全书共分为9章-内容全面覆盖国际标准-测量设备-测量方法及实际案例-系统性地阐述了如何利用光学测量技术对增强现实-ar-虚拟现实-vr-和混合现实-mr-设备及其组件进行精准测量-本书旨在帮助公司内部团队-包括研发-销售-服务-以及合作伙伴深入理解xr技术-同时统一相关术语与技术认知-为行业发展提供有力支持-除实体书外-我将其核心内容同步发布在知乎专栏和csdn专栏",
          title: '为了在XR领域进一步推动技术创新与知识共享，我撰写了《VR光学测量手册》一书。全书共分为9章，内容全面覆盖国际标准、测量设备、测量方法及实际案例，系统性地阐述了如何利用光学测量技术对增强现实（AR）、虚拟现实（VR）和混合现实（MR）设备及其组件进行精准测量。本书旨在帮助公司内部团队（包括研发、销售、服务）以及合作伙伴深入理解XR技术，同时统一相关术语与技术认知，为行业发展提供有力支持。除实体书外，我将其核心内容同步发布在知乎专栏和CSDN专栏。',
          description: "",
          section: "News",},{id: "news-i-was-honored-to-represent-instrument-systems-as-an-invited-speaker-at-the-2025-international-conference-on-display-technology-icdt-2025-where-i-presented-our-research-titled-measurement-of-near-eye-displays-using-a-goniophotometer-and-imaging-light-measurement-device",
          title: 'I was honored to represent Instrument Systems as an invited speaker at the...',
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
