'use client'
import { usePathname, useRouter } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { useState, useTransition, type FC } from 'react'
import type { LocaleType } from '@shared/const/locales'
import { routes } from '@shared/const/routes'
import { useAuthStore, useSidebarSrore } from '@shared/state'
import Space from '@shared/ui/Space'
import Text from '@shared/ui/Typography'
import MenuItem from '../MenuItem'

const Footer: FC = () => {
    const t = useTranslations('')
    const [isExiting, setIsExiting] = useState(false)
    const closeOnMobile = useSidebarSrore((state) => state.closeOnMobile)
    const logout = useAuthStore((state) => state.logout)
    const locale = useLocale() as LocaleType
    const router = useRouter()
    const pathname = usePathname()
    const [isPending, startTransition] = useTransition()
    const handleLogout = () => logout(setIsExiting)
    const toggleLocale = () => {
        const newLocale: LocaleType = locale === 'en' ? 'ua' : 'en'
        const newPathname = pathname
            .split('/')
            .map((path) => (path === locale ? newLocale : path))
            .join('/')

        startTransition(() => {
            router.replace(newPathname)
            closeOnMobile()
        })
    }

    return (
        <Space direction='vertical' gap={1}>
            <MenuItem as='button' variant='secondary' title={t('Sidebar.language')} onClick={toggleLocale} loading={isPending}>
                <Text>{t(`Locales.Short.${locale}`)}</Text>
            </MenuItem>
            <MenuItem variant='secondary' title={t('Sidebar.settings')} icon='settings' href={routes.settings} />
            <MenuItem as='button' variant='secondary' title={t('Sidebar.logout')} icon='logout' onClick={handleLogout} loading={isExiting} />
        </Space>
    )
}

export default Footer
