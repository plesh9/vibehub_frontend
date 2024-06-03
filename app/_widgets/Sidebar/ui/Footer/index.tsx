'use client'
import { useState, type FC } from 'react'
import { routes } from '@shared/const/routes'
import { useAuthStore } from '@shared/state'
import Space from '@shared/ui/Space'
import MenuItem from '../MenuItem'

const Footer: FC = () => {
    const [isExiting, setIsExiting] = useState(false)
    const logout = useAuthStore((state) => () => state.logout(setIsExiting))

    return (
        <Space direction='vertical' gap={1}>
            <MenuItem variant='secondary' icon='settings' href={routes.settings} />
            <MenuItem as='button' variant='secondary' icon='logout' onClick={logout} loading={isExiting} />
        </Space>
    )
}

export default Footer
