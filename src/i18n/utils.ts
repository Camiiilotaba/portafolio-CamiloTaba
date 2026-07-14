import en from './en.json';
import es from './es.json';

const translations: Record<string, Record<string, unknown>> = { en, es };

export type Lang = 'en' | 'es';
export const defaultLang: Lang = 'en';

export function t(lang: Lang, key: string): string {
  const keys = key.split('.');
  let value: unknown = translations[lang];
  for (const k of keys) {
    if (value && typeof value === 'object') {
      value = (value as Record<string, unknown>)[k];
    } else {
      return key;
    }
  }
  return typeof value === 'string' ? value : key;
}

export function getLocalePath(lang: Lang, path: string = ''): string {
  return lang === defaultLang ? `/${path}` : `/${lang}/${path}`;
}
