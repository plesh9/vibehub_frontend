import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import NextTopLoader from 'nextjs-toploader'
import { type ReactNode } from 'react'
import type { LocaleType } from '@shared/const/locales'
import getMessagesOnServerSide from '@shared/lib/getMessagesOnServerSide'
import { AlertProvider, TranslationProvider } from '@shared/providers'
import { UserInitializer } from '@shared/state'
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
            <head>
                <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' />
            </head>
            <body className={poppins.className}>
                <NextTopLoader color='#2d9cdb' shadow={false} showSpinner={false} />
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <TranslationProvider />
                    <UserInitializer>{children}</UserInitializer>
                </NextIntlClientProvider>
                <AlertProvider />
            </body>
        </html>
    )
}

export default layout
