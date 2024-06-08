'use client'
import Link from 'next/link'
import type { FC } from 'react'
import { routes } from '@shared/const/routes'
import { useUserStore } from '@shared/state'
import Avatar from '@shared/ui/Avatar'
import LineHorizontal from '@shared/ui/LineHorizontal'
import Space from '@shared/ui/Space'
import Footer from './Footer'
import MenuItem from './MenuItem'
import s from './Sidebar.module.scss'

export const Sidebar: FC = () => {
    const userData = useUserStore((state) => state.userData!)

    return (
        <Space className={s.main} direction='vertical'>
            <Space className={s.main_content} direction='vertical' gap={4} p={3} grow>
                <Link className='hover-opacity' href={routes.messages}>
                    <Avatar alt={userData.name} url={userData.avatarUrl} size='40' />
                </Link>
                <LineHorizontal />
                <Space direction='vertical' gap={2} grow>
                    <MenuItem icon='message' href={routes.messages} />
                    <MenuItem icon='users' href={routes.users} />
                </Space>
                <Footer />
            </Space>
        </Space>
    )
}
