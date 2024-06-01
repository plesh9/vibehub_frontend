import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import NextTopLoader from 'nextjs-toploader'
import { type ReactNode } from 'react'
import type { LocaleType } from '@shared/const/locales'
import getMessagesOnServerSide from '@shared/lib/getMessagesOnServerSide'
import { ClientProvider } from '@shared/providers'
import '@app/_styles/global.scss'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '700'] })

export const metadata: Metadata = {
    title: 'VibeHub',
    description: 'VibeHub'
}

interface Props {
    children: ReactNode
    params: {
        locale: LocaleType
    }
}

const layout = async ({ children, params: { locale = 'en' } }: Props) => {
    const messages = await getMessagesOnServerSide(locale)

    return (
        <html lang={locale} suppressHydrationWarning>
            <body className={poppins.className}>
                <NextTopLoader color='#f06848' shadow={false} showSpinner={false} />
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <ClientProvider>{children}</ClientProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    )
}

export default layout
