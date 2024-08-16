'use client'
import Link from 'next/link'
import type { FC } from 'react'
import { routes } from '@shared/const/routes'
import { useSidebarSrore, useUserStore } from '@shared/state'
import Avatar from '@shared/ui/Avatar'
import Button from '@shared/ui/Button'
import Icon from '@shared/ui/Icon'
import Space from '@shared/ui/Space'
import s from './Header.module.scss'

const Header: FC = () => {
    const userData = useUserStore((state) => state.userData!)
    const openSidebarOnMonile = useSidebarSrore((state) => state.openOnMobile)

    return (
        <Space className={s.main} direction='horizontal' display='none' gap={4} align='center' justify='between' p={4} lg={{ display: 'flex' }}>
            <Link className='hover-opacity' href={routes.messages}>
                <Avatar alt={userData.name} url={userData.avatarUrl} size='40' />
            </Link>
            <Button onClick={openSidebarOnMonile} variant='transparent' size='small'>
                <Icon name='burger' />
            </Button>
        </Space>
    )
}

export default Header
