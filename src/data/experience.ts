export interface TechWithIcon {
  name: string;
  icon?: string;
}

export interface ExperienceEntry {
  id: string;
  company: string;
  companyUrl?: string;
  roleKey: string;
  locationKey: string;
  periodKey: string;
  descriptionKey: string;
  highlightKeys: string[];
  technologies: TechWithIcon[];
  isCurrent: boolean;
  type: 'full' | 'brief';
}

export const experiences: ExperienceEntry[] = [
  {
    id: 'frakt24',
    company: 'Frakt24 / FleetX',
    companyUrl: 'https://frakt24.no',
    roleKey: 'experience.frakt24.role',
    locationKey: 'experience.frakt24.location',
    periodKey: 'experience.frakt24.period',
    descriptionKey: 'experience.frakt24.description',
    highlightKeys: [
      'experience.frakt24.highlight1',
      'experience.frakt24.highlight2',
      'experience.frakt24.highlight3',
      'experience.frakt24.highlight4',
    ],
    technologies: [
      { name: 'Laravel 10+', icon: 'laravel' },
      { name: 'PHP 8.3', icon: 'php' },
      { name: 'MySQL', icon: 'mysql' },
      { name: 'JavaScript', icon: 'javaScript' },
      { name: 'Bootstrap' },
    ],
    isCurrent: true,
    type: 'full',
  },
  {
    id: 'gesa',
    company: 'Gesa Mediación S.L.',
    roleKey: 'experience.gesa.role',
    locationKey: 'experience.gesa.location',
    periodKey: 'experience.gesa.period',
    descriptionKey: 'experience.gesa.description',
    highlightKeys: [
      'experience.gesa.highlight1',
      'experience.gesa.highlight2',
      'experience.gesa.highlight3',
    ],
    technologies: [
      { name: 'Flutter' },
      { name: 'Firebase' },
      { name: 'Dart' },
      { name: 'Firestore' },
      { name: 'Firebase AI Logic' },
    ],
    isCurrent: false,
    type: 'full',
  },
  {
    id: 'truekapp',
    company: 'Truekapp',
    roleKey: 'experience.truekapp.role',
    locationKey: 'experience.truekapp.location',
    periodKey: 'experience.truekapp.period',
    descriptionKey: 'experience.truekapp.description',
    highlightKeys: [
      'experience.truekapp.highlight1',
      'experience.truekapp.highlight2',
      'experience.truekapp.highlight3',
    ],
    technologies: [
      { name: 'Laravel 12', icon: 'laravel' },
      { name: 'MySQL', icon: 'mysql' },
      { name: 'Tailwind CSS', icon: 'tailwind' },
      { name: 'WebSockets', icon: 'websocket' },
    ],
    isCurrent: false,
    type: 'full',
  },
  {
    id: 'managepoint',
    company: 'Apuestas de Murcia',
    roleKey: 'experience.managepoint.role',
    locationKey: 'experience.managepoint.location',
    periodKey: 'experience.managepoint.period',
    descriptionKey: 'experience.managepoint.description',
    highlightKeys: [
      'experience.managepoint.highlight1',
      'experience.managepoint.highlight2',
      'experience.managepoint.highlight3',
    ],
    technologies: [
      { name: 'Laravel', icon: 'laravel' },
      { name: 'PHP', icon: 'php' },
      { name: 'MySQL', icon: 'mysql' },
      { name: 'Tailwind CSS', icon: 'tailwind' },
    ],
    isCurrent: false,
    type: 'full',
  },
  {
    id: 'ticarum',
    company: 'Ticarum',
    roleKey: 'experience.ticarum.role',
    locationKey: 'experience.ticarum.location',
    periodKey: 'experience.ticarum.period',
    descriptionKey: 'experience.ticarum.description',
    highlightKeys: [
      'experience.ticarum.highlight1',
      'experience.ticarum.highlight2',
    ],
    technologies: [
      { name: 'Linux' },
      { name: 'Hardware' },
      { name: 'Networking' },
    ],
    isCurrent: false,
    type: 'brief',
  },
];
