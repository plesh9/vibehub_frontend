'use client'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import type { FC } from 'react'
import { routes } from '@shared/const/routes'
import classnames from '@shared/lib/classnames'
import { useSidebarSrore, useUserStore } from '@shared/state'
import Avatar from '@shared/ui/Avatar'
import Button from '@shared/ui/Button'
import LineHorizontal from '@shared/ui/LineHorizontal'
import Space from '@shared/ui/Space'
import Footer from './Footer'
import MenuItem from './MenuItem'
import s from './Sidebar.module.scss'

export const Sidebar: FC = () => {
    const t = useTranslations('Sidebar')
    const userData = useUserStore((state) => state.userData!)
    const isOpenOnMobile = useSidebarSrore((state) => state.isOpenOnMobile)
    const closeOnMobile = useSidebarSrore((state) => state.closeOnMobile)

    return (
        <Space className={classnames(s.main, isOpenOnMobile && s.isOpenOnMobile)} direction='vertical'>
            <Space className={s.main_content} direction='vertical' gap={4} p={3} grow>
                <Space direction='horizontal' gap={4} align='center' justify='between'>
                    <Link className='hover-opacity' href={routes.messages} onClick={closeOnMobile}>
                        <Avatar alt={userData.name} url={userData.avatarUrl} size='40' />
                    </Link>
                    <Button onClick={closeOnMobile} variant='transparent' size='small' icon='close' />
                </Space>
                <LineHorizontal />
                <Space direction='vertical' gap={2} grow>
                    <MenuItem icon='message' title={t('messages')} href={routes.messages} />
                    <MenuItem icon='users' title={t('users')} href={routes.users} />
                </Space>
                <Footer />
            </Space>
        </Space>
    )
}
