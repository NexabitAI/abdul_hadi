export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Sophia Blake',
    position: 'Marketing Director at EcoSphere',
    img: 'assets/review1.png',
    review:
      'Collaborating with Hadi was an excellent choice. He revamped our website into a sleek, engaging, and easy-to-navigate platform. His dedication to high standards and his meticulous approach truly set him apart. I highly recommend him for any web development needs.',
  },
  {
    id: 2,
    name: 'Liam Carter',
    position: 'CEO of GadgetHive',
    img: 'assets/review2.png',
    review:
      'Hadi’s skill in web development exceeded our expectations. He created a reliable and scalable platform for our online store, leading to a substantial boost in sales. His professionalism and expertise are outstanding. Highly recommended!',
  },
];

export const myProjects = [
  {
    title: 'DocSta - Real-Time Google Docs Clone',
    desc: 'DocSta is an advanced collaborative app that redefines real-time document editing. Building on the functionality of Google Docs, it supports millions of users working together seamlessly, capturing every update instantly and precisely to ensure a smooth and reliable editing experience for all.',
    subdesc:
      'With DocSta, users can experience the future of collaboration, where multiple contributors work together in real time without any lag, by using Next.js and Liveblocks newest features.',
    href: 'https://www.abdulhadi.life',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Oblivion - Online Banking Platform',
    desc: 'Oblivion is an all-in-one online banking platform designed to give users complete control over their finances. With a centralized dashboard, users can link multiple bank accounts, track transactions in real time, and effortlessly transfer funds to other users, all in one secure and intuitive platform.',
    subdesc:
      'Built with Next.js 14, Oblivion ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.',
    href: 'https://www.abdulhadi.life',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Next.js',
    pos: 'Web Developer',
    duration: '2022 - Present',
    title:
      'Next.js enables me to build powerful, server-rendered applications with ease. I use it to enhance performance, manage routing, and improve SEO, making it ideal for high-quality web projects.',
    icon: '/assets/next.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'React',
    pos: 'Frontend Developer',
    duration: '2020 - 2022',
    title:
      'React is my go-to library for building user interfaces. I utilize it to create fast, responsive, and reusable components, making it easier to maintain and scale applications effectively.',
    icon: '/assets/react.png',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'JavaScript',
    pos: 'Junior Web Developer',
    duration: '2019 - 2020',
    title:
      'JavaScript is my core programming language for building dynamic and interactive web applications. I rely on it for everything from DOM manipulation to creating complex functionality across different projects.',
    icon: '/assets/javascript.png',
    animation: 'salute',
  },
];
