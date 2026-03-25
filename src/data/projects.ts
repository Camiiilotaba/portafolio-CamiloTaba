export interface TechWithIcon {
  name: string;
  icon?: string;
}

export interface Project {
  id: string;
  img: string;
  title: string;
  link: string;
  categoryKey: string;
  headlineKey: string;
  problemKey: string;
  solutionKey: string;
  impactTags: string[];
  technologies: TechWithIcon[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'truekapp',
    img: '/img/web/Truekapp3.png',
    title: 'Truekapp',
    link: 'https://youtu.be/c9yIp8mPonM',
    categoryKey: 'projects.truekapp.category',
    headlineKey: 'projects.truekapp.headline',
    problemKey: 'projects.truekapp.problem',
    solutionKey: 'projects.truekapp.solution',
    impactTags: ['Real-time chat', 'Private channels', 'Admin panel', 'Collaborative dev'],
    technologies: [
      { name: 'Laravel', icon: 'laravel' },
      { name: 'WebSockets', icon: 'websocket' },
      { name: 'MySQL', icon: 'mysql' },
      { name: 'Tailwind CSS', icon: 'tailwind' },
    ],
    featured: true,
  },
  {
    id: 'managepoint',
    img: '/img/web/MPlogo.png',
    title: 'ManagePoint',
    link: 'https://youtu.be/IrdCjjE65Q8',
    categoryKey: 'projects.managepoint.category',
    headlineKey: 'projects.managepoint.headline',
    problemKey: 'projects.managepoint.problem',
    solutionKey: 'projects.managepoint.solution',
    impactTags: ['RBAC auth', 'PDF automation', 'Query optimization'],
    technologies: [
      { name: 'Laravel', icon: 'laravel' },
      { name: 'PHP', icon: 'php' },
      { name: 'MySQL', icon: 'mysql' },
      { name: 'Tailwind CSS', icon: 'tailwind' },
    ],
    featured: false,
  },
  {
    id: 'valorant',
    img: '/img/web/valorant.jpg',
    title: 'Valorant API',
    link: 'https://camiiilotaba.github.io/API-Valorant/',
    categoryKey: 'projects.valorant.category',
    headlineKey: 'projects.valorant.headline',
    problemKey: 'projects.valorant.problem',
    solutionKey: 'projects.valorant.solution',
    impactTags: ['REST API', 'Dynamic rendering', 'Theme toggle'],
    technologies: [
      { name: 'HTML', icon: 'html' },
      { name: 'JavaScript', icon: 'javaScript' },
      { name: 'Tailwind CSS', icon: 'tailwind' },
    ],
    featured: false,
  },
];
