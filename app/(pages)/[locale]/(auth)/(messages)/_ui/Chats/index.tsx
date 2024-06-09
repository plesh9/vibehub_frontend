import { useTranslations } from 'next-intl'
import { useRef, useState, type FC } from 'react'
import classnames from '@shared/lib/classnames'
import { useUserStore } from '@shared/state'
import Avatar from '@shared/ui/Avatar'
import ClampWrapper from '@shared/ui/ClampWrapper'
import InfiniteScroll from '@shared/ui/InfinityScroll'
import Loader from '@shared/ui/Loader'
import ReadStatus from '@shared/ui/ReadStatus'
import Search from '@shared/ui/Search'
import Space from '@shared/ui/Space'
import Text, { Title } from '@shared/ui/Typography'
import { formatChatsDate } from '../../_lib/formatChatsDate'
import { useChatsStore } from '../../_state'
import s from './Chats.module.scss'

const Chats: FC = () => {
    const t = useTranslations('Messages')
    const [search, setSearch] = useState('')
    const page = useRef(1)
    const userData = useUserStore((state) => state.userData!)
    const activeChatId = useChatsStore((state) => state.activeChatId!)
    const chats = useChatsStore((state) =>
        state.chats.filter((chat) => chat.users.some((user) => (user.id !== userData.id && user.name.toLowerCase().includes(search.toLowerCase())) || chat.lastMessage.text.toLowerCase().includes(search.toLowerCase())))
    )
    const fetchChats = useChatsStore((state) => () => state.fetchChats(++page.current))
    const chatsMoreIsLoading = useChatsStore((state) => state.chatsMoreIsLoading)
    const hasMoreChats = useChatsStore((state) => state.hasMoreChats)

    return (
        <Space className={s.main} gap={3} grow>
            <Space className={s.main_header} direction='vertical' gap={4}>
                <Title>{t('title')}</Title>
                <Search value={search} setValue={setSearch} />
            </Space>
            <Space className={s.main_chats} direction='vertical' grow>
                <InfiniteScroll next={fetchChats} hasMore={hasMoreChats} isLoading={chatsMoreIsLoading}>
                    {chats.map((chat) => {
                        const isActiveChat = chat.id === activeChatId
                        const anotherUser = chat.users.filter((user) => user.id !== userData.id)[0]

                        return (
                            <button
                                className={classnames(s.chat, isActiveChat && s.active)}
                                onClick={() => {
                                    if (isActiveChat) return
                                    useChatsStore.setState({ activeChatId: chat.id })
                                    localStorage.setItem('activeChatId', chat.id)
                                }}
                                type='button'
                                key={chat.id}
                            >
                                <Avatar url={anotherUser.avatarUrl} alt={anotherUser.name} isOnline={anotherUser.lastOnlineAt === 'ONLINE'} />
                                <Space direction='vertical' grow>
                                    <Space direction='horizontal' justify='between' align='center' gap={1}>
                                        <ClampWrapper>
                                            <Text size='16' weight='500'>
                                                {anotherUser.name}
                                            </Text>
                                        </ClampWrapper>
                                        <Text size='12' color='black45p' noWrap>
                                            {formatChatsDate(new Date(chat.lastMessage.createdAt))}
                                        </Text>
                                    </Space>
                                    <Space direction='horizontal' justify='between' align='center' gap={1}>
                                        <ClampWrapper>
                                            <Text color='black45p'>{chat.lastMessage.text}</Text>
                                        </ClampWrapper>
                                        <ReadStatus isRead />
                                    </Space>
                                </Space>
                            </button>
                        )
                    })}
                    {chatsMoreIsLoading && <Loader />}
                </InfiniteScroll>
            </Space>
        </Space>
    )
}

export default Chats
