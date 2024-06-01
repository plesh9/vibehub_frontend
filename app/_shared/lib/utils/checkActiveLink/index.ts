import type { LocaleType } from '@shared/const/locales'
import { locales } from '@shared/const/locales'

export const checkActiveLink = (fullPathname: string, href: string): boolean => {
    const pathnameWithoutLang =
        fullPathname
            .split('/')
            .filter((path) => !locales[path as LocaleType])
            .join('/') || '/'

    if (href === '/' && pathnameWithoutLang === href) {
        return true
    }

    if (href !== '/' && pathnameWithoutLang.startsWith(href)) {
        return true
    }

    return false
}
