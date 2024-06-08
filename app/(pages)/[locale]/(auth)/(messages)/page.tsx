'use client'
import { type FC } from 'react'
import Space from '@shared/ui/Space'
import s from './_styles/Messages.module.scss'
import ActiveChat from './_ui/ActiveChat'
import Chats from './_ui/Chats'

const page: FC = () => {
    return (
        <Space className={s.main} direction='horizontal' grow>
            <Chats />
            <ActiveChat />
        </Space>
    )
}

export default page
