import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'
import type { LocaleType } from '@shared/const/locales'
import { locales } from '@shared/const/locales'

export default getRequestConfig(async ({ locale }) => {
    if (!locales[locale as LocaleType]) notFound()

    return {
        messages: (await import(`./messages/${locale}.json`)).default
    }
})
