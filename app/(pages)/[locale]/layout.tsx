import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import NextTopLoader from 'nextjs-toploader'
import { type ReactNode } from 'react'
import type { LocaleType } from '@shared/const/locales'
import getMessagesOnServerSide from '@shared/lib/getMessagesOnServerSide'
import { getUserOnServerSide } from '@shared/lib/getUserOnServerSide'
import { AlertProvider, ClientProvider, TranslationProvider } from '@shared/providers'
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
    const userResponse = await getUserOnServerSide()
    const messages = await getMessagesOnServerSide(locale)

    return (
        <html lang={locale} suppressHydrationWarning>
            <body className={poppins.className}>
                <NextTopLoader color='#f06848' shadow={false} showSpinner={false} />
                <UserInitializer user={userResponse?.user} accessToken={userResponse?.accessToken} />
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <TranslationProvider />
                    <ClientProvider>{children}</ClientProvider>
                </NextIntlClientProvider>
                <AlertProvider />
            </body>
        </html>
    )
}

export default layout
