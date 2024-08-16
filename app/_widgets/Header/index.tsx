'use client'
import Link from 'next/link'
import type { FC } from 'react'
import { routes } from '@shared/const/routes'
import classnames from '@shared/lib/classnames'
import { useSidebarSrore, useUserStore } from '@shared/state'
import Avatar from '@shared/ui/Avatar'
import Button from '@shared/ui/Button'
import Icon from '@shared/ui/Icon'
import Space from '@shared/ui/Space'
import s from './Header.module.scss'

const Header: FC = () => {
    const userData = useUserStore((state) => state.userData!)
    const isOpenOnMobile = useSidebarSrore((state) => state.isOpenOnMobile)
    const toggleOnMobile = useSidebarSrore((state) => state.toggleOnMobile)
    const closeOnMobile = useSidebarSrore((state) => state.closeOnMobile)

    return (
        <Space className={classnames(s.main, isOpenOnMobile && s.sidebarIsOpen)} direction='horizontal' display='none' gap={4} align='center' justify='between' lg={{ display: 'flex' }}>
            <Link className='hover-opacity' href={routes.messages} onClick={closeOnMobile}>
                <Avatar alt={userData.name} url={userData.avatarUrl} size='40' />
            </Link>
            <Button className={s.burger} onClick={toggleOnMobile} variant='transparent' size='small' icon={isOpenOnMobile ? 'close' : 'burger'} />
        </Space>
    )
}

export default Header
