import type { Lang } from '../i18n/utils';

const SHARED_SKILLS = [
  'Laravel',
  'PHP',
  'PHP 8.3',
  'MySQL',
  'REST APIs',
  'WebSockets',
  'Clean Architecture',
  'SOLID',
  'Feature Tests',
  'JavaScript',
  'TypeScript',
  'Vue.js',
  'React',
  'Astro',
  'Tailwind CSS',
  'Flutter',
  'Firebase',
] as const;

const SKILLS_BY_LANG: Record<Lang, readonly string[]> = {
  es: [...SHARED_SKILLS, 'Arquitectura Multi-tenant', 'SaaS Empresarial', 'Desarrollo Web', 'Desarrollo Móvil'],
  en: [...SHARED_SKILLS, 'Multi-tenant Architecture', 'Enterprise SaaS', 'Web Development', 'Mobile Development'],
};

const JOB_TITLE_BY_LANG: Record<Lang, string> = {
  es: 'Desarrollador Laravel & PHP · Web y Móvil',
  en: 'Laravel & PHP Developer · Web & Mobile',
};

// Multiple role keywords used as alternate occupational signals for search
// engines and generative engines (so the profile surfaces for each query).
const ROLE_TITLES_BY_LANG: Record<Lang, readonly string[]> = {
  es: [
    'Desarrollador Laravel',
    'Desarrollador PHP',
    'Desarrollador Backend',
    'Desarrollador Web Full-Stack',
    'Desarrollador Móvil Flutter',
    'Desarrollador Vue',
  ],
  en: [
    'Laravel Developer',
    'PHP Developer',
    'Backend Developer',
    'Full-Stack Web Developer',
    'Flutter Mobile Developer',
    'Vue.js Developer',
  ],
};

const OCCUPATION_DESC_BY_LANG: Record<Lang, string> = {
  es: 'Desarrollador especializado en backend Laravel y PHP para SaaS empresarial multi-tenant, con desarrollo web full-stack (Vue, React) y móvil (Flutter).',
  en: 'Developer specialized in Laravel and PHP backend for multi-tenant enterprise SaaS, with full-stack web (Vue, React) and mobile (Flutter) development.',
};

const KNOWS_LANGUAGE_BY_LANG: Record<Lang, readonly string[]> = {
  es: ['Español', 'Inglés'],
  en: ['Spanish', 'English'],
};

const REMOTE_LABEL_BY_LANG: Record<Lang, string> = {
  es: 'Remoto',
  en: 'Remote',
};

const COUNTRY_LABEL_BY_LANG: Record<Lang, string> = {
  es: 'España',
  en: 'Spain',
};

export function getJobTitle(lang: Lang): string {
  return JOB_TITLE_BY_LANG[lang];
}

export function getKnowsAbout(lang: Lang): readonly string[] {
  return SKILLS_BY_LANG[lang];
}

export function getRoleTitles(lang: Lang): readonly string[] {
  return ROLE_TITLES_BY_LANG[lang];
}

export function getOccupationDescription(lang: Lang): string {
  return OCCUPATION_DESC_BY_LANG[lang];
}

export function getKnownLanguages(lang: Lang): readonly string[] {
  return KNOWS_LANGUAGE_BY_LANG[lang];
}

export function getRemoteLabel(lang: Lang): string {
  return REMOTE_LABEL_BY_LANG[lang];
}

export function getCountryLabel(lang: Lang): string {
  return COUNTRY_LABEL_BY_LANG[lang];
}
