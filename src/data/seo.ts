import type { Lang } from '../i18n/utils';

const SHARED_SKILLS = [
  'Laravel',
  'PHP',
  'MySQL',
  'Clean Architecture',
  'SOLID',
  'Feature Tests',
  'WebSockets',
  'JavaScript',
  'TypeScript',
  'Astro',
  'Tailwind CSS',
  'Flutter',
] as const;

const SKILLS_BY_LANG: Record<Lang, readonly string[]> = {
  es: [...SHARED_SKILLS, 'Arquitectura Multi-tenant', 'SaaS Empresarial', 'APIs REST'],
  en: [...SHARED_SKILLS, 'Multi-tenant Architecture', 'Enterprise SaaS', 'REST APIs'],
};

const JOB_TITLE_BY_LANG: Record<Lang, string> = {
  es: 'Software Developer especializado en Laravel y PHP',
  en: 'Software Developer specialized in Laravel and PHP',
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

export function getRemoteLabel(lang: Lang): string {
  return REMOTE_LABEL_BY_LANG[lang];
}

export function getCountryLabel(lang: Lang): string {
  return COUNTRY_LABEL_BY_LANG[lang];
}
