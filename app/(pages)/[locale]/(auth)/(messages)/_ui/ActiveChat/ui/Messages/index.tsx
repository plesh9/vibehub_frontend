import { useTranslations } from 'next-intl'
import { Fragment, useLayoutEffect, useRef, type FC } from 'react'
import type { MessageType } from '@shared/api'
import classnames from '@shared/lib/classnames'
import { useUserStore } from '@shared/state'
import InfiniteScroll from '@shared/ui/InfinityScroll'
import LineHorizontal from '@shared/ui/LineHorizontal'
import Loader from '@shared/ui/Loader'
import NoData from '@shared/ui/NoData'
import ReadStatus from '@shared/ui/ReadStatus'
import Space from '@shared/ui/Space'
import Text from '@shared/ui/Typography'
import { formatChatMessageDate } from '../../../../_lib/formatChatMessageDate'
import { formatMessageDate } from '../../../../_lib/formatMessageDate'
import { groupMessagesByDate } from '../../../../_lib/groupMessagesByDate'
import { useChatsStore } from '../../../../_state'
import s from './Messages.module.scss'

const Messages: FC = () => {
    const t = useTranslations('Messages')
    const page = useRef(1)
    const scrollRef = useRef<HTMLDivElement | null>(null)
    const userData = useUserStore((state) => state.userData!)
    const messages = useChatsStore((state) => state.messages)
    const activeChatId = useChatsStore((state) => state.activeChatId!)
    const fetchMessages = useChatsStore((state) => state.fetchMessages)
    const hasMoreMessages = useChatsStore((state) => state.hasMoreMessages)
    const messagesMoreIsLoading = useChatsStore((state) => state.messagesMoreIsLoading)
    const messagesIsLoading = useChatsStore((state) => state.messagesIsLoading)

    useLayoutEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight
        }
    }, [messages, messagesIsLoading])

    if (messagesIsLoading) {
        return (
            <div className={s.main} ref={scrollRef}>
                <Loader />
            </div>
        )
    }

    if (!messages.length) {
        return (
            <div className={s.main} ref={scrollRef}>
                <NoData title={t('noMessages')} subtitle={t('noMessagesDescription')} />
            </div>
        )
    }

    return (
        <div className={s.main} ref={scrollRef}>
            <Space className={s.main_container}>
                <InfiniteScroll
                    next={() => {
                        const scrollDiv = scrollRef.current
                        const prevHeight = scrollDiv?.scrollHeight ?? 0

                        fetchMessages(activeChatId, ++page.current).then(() => {
                            setTimeout(() => {
                                const currentHeight = scrollRef.current?.scrollHeight ?? 0
                                const newScrollTop = currentHeight - prevHeight

                                if (scrollDiv) {
                                    scrollDiv.scrollTop = newScrollTop
                                }
                            }, 0)
                        })
                    }}
                    hasMore={hasMoreMessages}
                    isLoading={messagesMoreIsLoading}
                    inverse
                >
                    <Space direction='vertical' gap={4}>
                        {messagesMoreIsLoading && <Loader />}
                        {Object.entries(groupMessagesByDate(messages)).map(([date, groupedMessages]: [string, Array<MessageType>]) => (
                            <Space direction='vertical' key={date}>
                                <Space className={s.date} direction='horizontal' justify='center' align='center' gap={6}>
                                    <Text size='12' color='black100' noWrap>
                                        {formatMessageDate(new Date(date))}
                                    </Text>
                                </Space>
                                <Space direction='vertical' gap={4} key={date}>
                                    {groupedMessages.map((message) => {
                                        const isMyMessage = message.user.id === userData.id

                                        return (
                                            <Space className={classnames(s.message, isMyMessage && s.my)} direction='vertical' gap={1} key={message.id}>
                                                <Text>{message.text}</Text>
                                                <Space direction='horizontal' justify='end' align='center' gap={2}>
                                                    <Text size='12' lineHeight='100' color='black45p'>
                                                        {formatChatMessageDate(new Date(message.createdAt))}
                                                    </Text>
                                                    {isMyMessage && <ReadStatus isRead />}
                                                </Space>
                                            </Space>
                                        )
                                    })}
                                </Space>
                            </Space>
                        ))}
                    </Space>
                </InfiniteScroll>
            </Space>
        </div>
    )
}

export default Messages
