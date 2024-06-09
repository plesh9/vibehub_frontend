'use client'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useEffect, type FC } from 'react'
import type { MessageType } from '@shared/api'
import { routes } from '@shared/const/routes'
import { useOnlineUsers, useWebsocketStore } from '@shared/state'
import Button from '@shared/ui/Button'
import Loader from '@shared/ui/Loader'
import NoData from '@shared/ui/NoData'
import Space from '@shared/ui/Space'
import { useChatsStore } from './_state'
import s from './_styles/Messages.module.scss'
import ActiveChat from './_ui/ActiveChat'
import Chats from './_ui/Chats'

const page: FC = () => {
    const t = useTranslations('Messages')
    const chats = useChatsStore((state) => state.chats)
    const chatsIsLoading = useChatsStore((state) => state.chatsIsLoading)
    const fetchChats = useChatsStore((state) => state.fetchChats)
    const fetchMessages = useChatsStore((state) => state.fetchMessages)
    const activeChatId = useChatsStore((state) => state.activeChatId!)
    const activeChat = useChatsStore((state) => state.chats.find((chat) => chat.id === activeChatId))
    const addMessage = useChatsStore((state) => state.addMessage)
    const socket = useWebsocketStore((state) => state.socket)
    const onlineUserIds = useOnlineUsers((state) => state.onlineUserIds)
    const disconectedUserId = useOnlineUsers((state) => state.disconectedUserId)

    useEffect(() => {
        fetchChats()
    }, [fetchChats])

    useEffect(() => {
        if (!socket) return

        const handleReceiveMessage = (message: MessageType) => addMessage(message)

        socket.on('receiveMessage', handleReceiveMessage)

        return () => {
            socket.off('receiveMessage', handleReceiveMessage)
        }
    }, [socket, addMessage])

    useEffect(() => {
        useChatsStore.setState((state) => ({
            chats: state.chats.map((chat) => {
                return {
                    ...chat,
                    users: chat.users.map((user) => {
                        if (onlineUserIds.includes(user.id)) {
                            return { ...user, lastOnlineAt: 'ONLINE' }
                        }

                        if (disconectedUserId === user.id) {
                            return { ...user, lastOnlineAt: new Date().toISOString() }
                        }

                        return user
                    })
                }
            })
        }))
    }, [onlineUserIds, disconectedUserId])

    useEffect(() => {
        if (!activeChatId) return
        fetchMessages(activeChatId)
    }, [activeChatId, fetchMessages])

    if (chatsIsLoading) {
        return <Loader />
    }

    if (!chats.length) {
        return (
            <NoData title={t('noChats')} subtitle={t('noChatsDescription')}>
                <Button as={Link} href={routes.users} size='small'>
                    {t('createFirtsChat')}
                </Button>
            </NoData>
        )
    }

    return (
        <Space className={s.main} direction='horizontal' grow>
            <Chats />
            {!!activeChat ? <ActiveChat /> : <NoData title={t('noActiveChat')} subtitle={t('noActiveChatDescription')} />}
        </Space>
    )
}

export default page
