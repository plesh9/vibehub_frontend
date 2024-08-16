import { useTranslations } from 'next-intl'
import { type FC } from 'react'
import classnames from '@shared/lib/classnames'
import NoData from '@shared/ui/NoData'
import Space from '@shared/ui/Space'
import { useChatsStore } from '../../_state'
import s from './ActiveChat.module.scss'
import Info from './ui/Info'
import Messages from './ui/Messages'
import SendForm from './ui/SendForm'

const ActiveChat: FC = () => {
    const t = useTranslations('Messages')
    const activeChat = useChatsStore((state) => state.chats.find((chat) => chat.id === state.activeChatId))
    const nodeClassName = classnames(s.main, !!activeChat && s.open)

    if (!activeChat) {
        return (
            <Space className={nodeClassName}>
                <Space direction='vertical' grow lg={{ display: 'none' }}>
                    <NoData title={t('noActiveChat')} subtitle={t('noActiveChatDescription')} />
                </Space>
            </Space>
        )
    }

    return (
        <Space className={nodeClassName}>
            <Space className='scroll-lock' direction='vertical' backgroundColor='white100' grow>
                <Info />
                <Messages />
                <SendForm />
            </Space>
        </Space>
    )
}

export default ActiveChat
