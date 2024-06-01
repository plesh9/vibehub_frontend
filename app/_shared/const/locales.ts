export const locales = {
    en: 'en',
    ua: 'ua'
} as const
export type LocaleType = (typeof locales)[keyof typeof locales]

export const defaultLocale: LocaleType = 'en'
