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
    company: 'FleetX',
    companyUrl: 'https://fleetx.com/',
    roleKey: 'experience.frakt24.role',
    locationKey: 'experience.frakt24.location',
    periodKey: 'experience.frakt24.period',
    descriptionKey: 'experience.frakt24.description',
    highlightKeys: [
      'experience.frakt24.highlight1',
      'experience.frakt24.highlight2',
      'experience.frakt24.highlight3',
    ],
    technologies: [
      { name: 'Laravel' },
      { name: 'PHP' },
      { name: 'MySQL' },
      { name: 'Vue' },
      { name: 'Flutter' },
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
    ],
    technologies: [
      { name: 'Laravel' },
      { name: 'Flutter' },
      { name: 'Firebase' },
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
    ],
    technologies: [
      { name: 'Laravel' },
      { name: 'PHP' },
      { name: 'MySQL' },
      { name: 'Tailwind CSS' },
    ],
    isCurrent: false,
    type: 'full',
  },
];
