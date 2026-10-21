import truekappImg from '../assets/web/truekapp.jpeg';
import valodexImg from '../assets/web/valodex.jpeg';

export interface TechWithIcon {
  name: string;
  icon?: string;
}

export interface ProjectLink {
  href: string;
  labelKey: string;
}

export interface Project {
  id: string;
  img: ImageMetadata;
  imgAltKey: string;
  title: string;
  kindKey: string;
  summaryKey: string;
  detailKey: string;
  technologies: TechWithIcon[];
  links: ProjectLink[];
  /** Optional line shown under the links, e.g. why the code is not public. */
  noteKey?: string;
}

export const projects: Project[] = [
  {
    id: 'truekapp',
    img: truekappImg,
    imgAltKey: 'projects.truekapp.img_alt',
    title: 'Truekapp',
    kindKey: 'projects.truekapp.kind',
    summaryKey: 'projects.truekapp.summary',
    detailKey: 'projects.truekapp.detail',
    technologies: [
      { name: 'Laravel', icon: 'laravel' },
      { name: 'PHP', icon: 'php' },
      { name: 'MySQL', icon: 'mysql' },
      { name: 'WebSockets', icon: 'websocket' },
      { name: 'Tailwind CSS', icon: 'tailwind' },
    ],
    links: [
      { href: 'https://truekapp.xyz', labelKey: 'projects.truekapp.link_demo' },
    ],
    noteKey: 'projects.truekapp.note',
  },
  {
    id: 'valodex',
    img: valodexImg,
    imgAltKey: 'projects.valodex.img_alt',
    title: 'VALO·DEX',
    kindKey: 'projects.valodex.kind',
    summaryKey: 'projects.valodex.summary',
    detailKey: 'projects.valodex.detail',
    technologies: [
      { name: 'React', icon: 'react' },
      { name: 'TypeScript', icon: 'typeScript' },
      { name: 'Vite', icon: 'vite' },
      { name: 'Tailwind CSS', icon: 'tailwind' },
    ],
    links: [
      { href: 'https://valodex-app.vercel.app/', labelKey: 'projects.valodex.link_demo' },
    ],
  },
];
