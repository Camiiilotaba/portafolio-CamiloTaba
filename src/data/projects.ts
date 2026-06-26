import truekappImg from '../assets/web/Truekapp3.png';
import managePointImg from '../assets/web/MPlogo.png';
import valorantImg from '../assets/web/valorant.jpg';

export interface TechWithIcon {
  name: string;
  icon?: string;
}

/** Pestaña de profundización de un case study (solo se usa en el featured). */
export interface ProjectSection {
  id: string;
  labelKey: string; // texto del botón/pestaña (i18n)
  bodyKey: string;  // contenido (i18n). Varias líneas separadas por \n → se renderiza como lista.
}

export interface Project {
  id: string;
  img: ImageMetadata;
  title: string;
  link: string;
  categoryKey: string;
  headlineKey: string;
  problemKey: string;
  solutionKey: string;
  impactTags: string[];
  technologies: TechWithIcon[];
  featured: boolean;
  statusLabelKey: string;
  isPrivate?: boolean;
  /** Segundo botón opcional (p. ej. el vídeo cuando el principal es la demo en vivo). */
  videoLink?: string;
  /** Párrafo corto siempre visible en el featured (qué es / cómo se hizo). */
  introKey?: string;
  /** Pestañas de profundización (case study). Si existen, sustituyen a problem/solution en el featured. */
  sections?: ProjectSection[];
}

export const projects: Project[] = [
  {
    id: 'truekapp',
    img: truekappImg,
    title: 'Truekapp',
    link: 'https://truekapp.xyz',
    categoryKey: 'projects.truekapp.category',
    headlineKey: 'projects.truekapp.headline',
    problemKey: 'projects.truekapp.problem',
    solutionKey: 'projects.truekapp.solution',
    impactTags: ['Real-time chat', 'Self-hosted VPS', 'AI assistant', 'CI/CD'],
    technologies: [
      { name: 'Laravel', icon: 'laravel' },
      { name: 'PHP', icon: 'php' },
      { name: 'MySQL', icon: 'mysql' },
      { name: 'WebSockets', icon: 'websocket' },
      { name: 'Tailwind CSS', icon: 'tailwind' },
    ],
    featured: true,
    statusLabelKey: 'projects.status_live',
    sections: [
      { id: 'about', labelKey: 'projects.tab_about', bodyKey: 'projects.truekapp.section_about' },
      { id: 'features', labelKey: 'projects.tab_features', bodyKey: 'projects.truekapp.section_features' },
      { id: 'tech', labelKey: 'projects.tab_tech', bodyKey: 'projects.truekapp.section_tech' },
      { id: 'deploy', labelKey: 'projects.tab_deploy', bodyKey: 'projects.truekapp.section_deploy' },
    ],
  },
  {
    id: 'valorant',
    img: valorantImg,
    title: 'VALO·DEX',
    link: 'https://valodex-app.vercel.app/',
    categoryKey: 'projects.valorant.category',
    headlineKey: 'projects.valorant.headline',
    problemKey: 'projects.valorant.problem',
    solutionKey: 'projects.valorant.solution',
    impactTags: ['Live deployment', 'REST API', 'Rate limiting', 'Player stats'],
    technologies: [
      { name: 'React', icon: 'react' },
      { name: 'TypeScript', icon: 'typeScript' },
      { name: 'Vite', icon: 'vite' },
      { name: 'Tailwind CSS', icon: 'tailwind' },
    ],
    featured: false,
    statusLabelKey: 'projects.status_live',
    sections: [
      { id: 'about', labelKey: 'projects.tab_about', bodyKey: 'projects.valorant.section_about' },
      { id: 'features', labelKey: 'projects.tab_features', bodyKey: 'projects.valorant.section_features' },
      { id: 'tech', labelKey: 'projects.tab_tech', bodyKey: 'projects.valorant.section_tech' },
    ],
  },
  {
    id: 'managepoint',
    img: managePointImg,
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
    statusLabelKey: 'projects.status_video',
    isPrivate: true,
    sections: [
      { id: 'about', labelKey: 'projects.tab_about', bodyKey: 'projects.managepoint.section_about' },
      { id: 'features', labelKey: 'projects.tab_features', bodyKey: 'projects.managepoint.section_features' },
      { id: 'tech', labelKey: 'projects.tab_tech', bodyKey: 'projects.managepoint.section_tech' },
    ],
  },
];
