'use client'
import { usePathname, useRouter } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { useState, useTransition, type FC } from 'react'
import type { LocaleType } from '@shared/const/locales'
import { routes } from '@shared/const/routes'
import { useAuthStore } from '@shared/state'
import Space from '@shared/ui/Space'
import Text from '@shared/ui/Typography'
import MenuItem from '../MenuItem'

const Footer: FC = () => {
    const t = useTranslations('Locales.Short')
    const [isExiting, setIsExiting] = useState(false)
    const logout = useAuthStore((state) => () => state.logout(setIsExiting))
    const locale = useLocale() as LocaleType
    const router = useRouter()
    const pathname = usePathname()
    const [isPending, startTransition] = useTransition()
    const toggleLocale = () => {
        const newLocale: LocaleType = locale === 'en' ? 'ua' : 'en'
        const newPathname = pathname
            .split('/')
            .map((path) => (path === locale ? newLocale : path))
            .join('/')

        startTransition(() => router.replace(newPathname))
    }

    return (
        <Space direction='vertical' gap={1}>
            <MenuItem as='button' variant='secondary' onClick={toggleLocale} loading={isPending}>
                <Text>{t(locale)}</Text>
            </MenuItem>
            <MenuItem variant='secondary' icon='settings' href={routes.settings} />
            <MenuItem as='button' variant='secondary' icon='logout' onClick={logout} loading={isExiting} />
        </Space>
    )
}

export default Footer
