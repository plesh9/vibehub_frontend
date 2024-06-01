import createMiddleware from 'next-intl/middleware'
import { defaultLocale, locales } from '@shared/const/locales'

export default createMiddleware({
    locales: Object.values(locales),
    defaultLocale
})

export const config = {
    matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
}
