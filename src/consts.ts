// 🌐 Datos globales del sitio
export const SITE_TITLE = "Camilo Taba";
export const SITE_DESCRIPTION = "Portafolio personal y proyectos de desarrollo web.";
export const GIT = "https://github.com/Camiiilotaba/portafolio-CamiloTaba";

// 🧩 Icon Keys (coinciden con los componentes en /icons/)
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

  // 🔥 Nuevos iconos agregados
  laravel: "laravel",
  php: "php",
  mysql: "mysql",
  websocket: "websocket",
};

// 💪 Habilidades principales
export const skills = [
  { title: "HTML", icon: IconKeys.html },
  { title: "CSS", icon: IconKeys.css },
  { title: "JavaScript", icon: IconKeys.javaScript },
  { title: "TypeScript", icon: IconKeys.typeScript },
  { title: "Laravel", icon: IconKeys.laravel },
  { title: "PHP", icon: IconKeys.php },
  { title: "Node.js", icon: IconKeys.nodejs },
  { title: "TailwindCSS", icon: IconKeys.tailwind },
  { title: "Astro", icon: IconKeys.astro },
  { title: "React", icon: IconKeys.react },
  { title: "Next.js", icon: IconKeys.nextjs },
  { title: "Material UI", icon: IconKeys.materialUi },
  { title: "Git", icon: IconKeys.git },
  { title: "GitHub", icon: IconKeys.github },
  { title: "MySQL", icon: IconKeys.mysql },
  { title: "MongoDB", icon: IconKeys.mongodb },
  { title: "WebSockets", icon: IconKeys.websocket },
];

// 🚀 Proyectos destacados
export const projects = [
  {
    img: "/img/web/Truekapp3.png",
    title: "Truekapp",
    link: "https://youtu.be/c9yIp8mPonM",
    description: `Truekapp es una aplicación web completa desarrollada con Laravel que permite a los usuarios intercambiar objetos mediante un sistema de trueques en tiempo real. 
  Incluye gestión de ofertas, chat instantáneo con WebSockets y un panel de administración para el control de publicaciones. 
  El proyecto fue desarrollado en colaboración con otros programadores, donde me especialicé en la integración del sistema de mensajería en tiempo real y la lógica de notificaciones.`,
    technologies: [
      { icon: IconKeys.laravel },
      { icon: IconKeys.tailwind },
      { icon: IconKeys.javaScript },
    ],
  },

  {
    img: "/img/web/valorant.jpg",
    title: "Valorant API",
    link: "https://camiiilotaba.github.io/API-Valorant/",
    description: `Uno de mis primeros proyectos trabajando con APIs externas. 
  Desarrollé una página web que consume la API de Valorant, donde el usuario puede ver los personajes junto a sus habilidades, 
  e incorporé un botón de cambio de tema (modo claro/oscuro) para mejorar la experiencia visual.`,
    technologies: [
      { icon: IconKeys.html },
      { icon: IconKeys.javaScript },
      { icon: IconKeys.tailwind },
    ],
  },
  {
    img: "/img/web/MPlogo.png", 
    title: "ManagePoint",
    link: "https://youtu.be/IrdCjjE65Q8", 
    description: `ManagePoint es una plataforma web profesional desarrollada para la gestión de salones y personal, optimizando procesos internos y facilitando el seguimiento de históricos y reportes. 
Por motivos de privacidad, todos los nombres y datos mostrados en este video son ficticios. 
Incluye panel administrativo, gestión de usuarios, control de versiones y generación de informes PDF, todo desarrollado de forma completa y funcional.`,
    technologies: [
      { icon: IconKeys.laravel },
      { icon: IconKeys.tailwind },
      { icon: IconKeys.javaScript },
    ],
  }

];
