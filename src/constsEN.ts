// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Camilo Taba';
export const SITE_DESCRIPTION = 'Welcome to my website!';

  
  export const IconKeys = {
    html: "html",
    css: "css",
    javaScript: "javaScript",
    react: "react",
    astro: "astro",
    materialUi: "materialUi",
    nextjs: "nextjs",
    redux: "redux",
    styled: "styled",
    tailwind: "tailwind",
    radix: "radix",
    reactQuery: "reactQuery",
    typeScript: "typeScript",
    zustand: "zustand",
    git: "git",
    github: "github",
    stripe: "stripe",
    shadcn: "shadcn",
    nodejs: "nodejs",
    mongodb: "mongodb",
    
    // here add more icon keys
  };
  
  export const skills = [
    {
      title: "Html",
      icon: IconKeys.html,
    },
    {
      title: "Css",
      icon: IconKeys.css,
    },
    {
      title: "JavaScript",
      icon: IconKeys.javaScript,
    },
    {
      title: "Astro",
      icon: IconKeys.astro,
    },
    {
      title: "Tailwindcss",
      icon: IconKeys.tailwind,
    },
    {
      title: "Angular",
      icon: IconKeys.react,
    },
    {
      title: "",
      icon: IconKeys.nextjs,
    },
    {
      title: "Git",
      icon: IconKeys.git,
    },
  
    {
      title: "Github",
      icon: IconKeys.github,
    },
    {
      title: "Material UI",
      icon: IconKeys.materialUi,
    },
  
  
    {
      title: "Node Js",
      icon: IconKeys.nodejs,
    },
    {
      title: "TypeScript",
      icon: IconKeys.typeScript,
    },
  ];
  
  export const projects = [
    {
      img: "/img/web/TiendaBoxeo.png",
      title: "Boxing Ecoomerce",
      link: "https://camiiilotaba.github.io/TiendaBoxeo/index.html",
      description: `Basic project of a boxing shop, where the user can view products and see product details.`,
      technologies: [
        {
          icon: IconKeys.html,
        },
        {
          icon: IconKeys.css,
        },
      ],
    },
    {
      img: "/img/web/valorant.jpg",
      title: "Valorant API",
      link: "https://camiiilotaba.github.io/API-Valorant/",
      description: `Website that consumes the valorant API, where the user can see the characters along with their skills. `,
      technologies: [
        {
          icon: IconKeys.html,
        },
        {
          icon: IconKeys.javaScript,
        },
        {
          icon: IconKeys.tailwind,
        },
      ],
    },
    {
      img: "/img/web/marvel.jpg",
      title: "Marvel API",
      link: "https://camiiilotaba.github.io/API-Marvel/",
      description: `Website that consumes the Marvel API, it shows different heroes every time you refresh the main page`,
      technologies: [
        {
          icon: IconKeys.html,
        },
        {
          icon: IconKeys.css,
        },
        {
          icon: IconKeys.javaScript,
        },
      ],
    }
  ];
  
