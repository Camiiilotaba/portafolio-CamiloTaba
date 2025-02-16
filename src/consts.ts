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
      title: "Tienda Boxeo",
      link: "https://camiiilotaba.github.io/TiendaBoxeo/index.html",
      description: `Proyecto basico de una tienda de boxeo, donde el usuario puede ver productos`,
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
      description: `Pagina web que consume la API de valorant, donde el usuario puede ver los personajes junto a sus habilidades.`,
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
      link: "",
      description: `Pagina web que consume la API de Marvel, muestra diferentes heroes cada vez que se refresca.`,
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
  
