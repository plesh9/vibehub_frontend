import { usePathname } from 'next/navigation'
import type { LocaleType } from '@shared/const/locales'
import { locales } from '@shared/const/locales'

export const useActivePathname = (href?: string): boolean => {
    const pathname = usePathname()

    if (!href) {
        return false
    }

    const pathnameWithoutLang =
        pathname
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
