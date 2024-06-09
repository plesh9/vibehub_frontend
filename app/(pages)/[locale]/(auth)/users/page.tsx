'use client'
import { useTranslations } from 'next-intl'
import { useEffect, useRef, useState, type FC } from 'react'
import { filterBySearch } from '@shared/lib/utils'
import { useOnlineUsers } from '@shared/state'
import Avatar from '@shared/ui/Avatar'
import Button from '@shared/ui/Button'
import InfiniteScroll from '@shared/ui/InfinityScroll'
import LineHorizontal from '@shared/ui/LineHorizontal'
import Loader from '@shared/ui/Loader'
import NoData from '@shared/ui/NoData'
import OnlineStatus from '@shared/ui/OnlineStatus'
import Search from '@shared/ui/Search'
import Space from '@shared/ui/Space'
import Text, { Title } from '@shared/ui/Typography'
import { useUsersStore } from './_state'
import SendModal from './_ui/SendModal'

const page: FC = () => {
    const t = useTranslations('Users')
    const [search, setSearch] = useState('')
    const page = useRef(1)
    const users = useUsersStore((state) => filterBySearch(state.users, search, ['name']))
    const fetchUsers = useUsersStore((state) => state.fetchUsers)
    const usersIsLoading = useUsersStore((state) => state.usersIsLoading)
    const moreUsersIsLoading = useUsersStore((state) => state.moreUsersIsLoading)
    const hasMoreUsers = useUsersStore((state) => state.hasMoreUsers)
    const onlineUserIds = useOnlineUsers((state) => state.onlineUserIds)
    const disconectedUserId = useOnlineUsers((state) => state.disconectedUserId)

    useEffect(() => {
        fetchUsers()
    }, [fetchUsers])

    useEffect(() => {
        useUsersStore.setState((state) => ({
            users: state.users.map((user) => {
                if (onlineUserIds.includes(user.id)) {
                    return { ...user, lastOnlineAt: 'ONLINE' }
                }

                if (disconectedUserId === user.id) {
                    return { ...user, lastOnlineAt: new Date().toISOString() }
                }

                return user
            })
        }))
    }, [onlineUserIds, disconectedUserId])

    if (usersIsLoading) {
        return <Loader />
    }

    return (
        <>
            <Space direction='horizontal' justify='between' align='center' gap={4}>
                <Space direction='vertical' gap={1} grow>
                    <Title>{t('title')}</Title>
                    <Text color='black45p'>{t('description')}</Text>
                </Space>
                <Search value={search} setValue={setSearch} />
            </Space>
            <LineHorizontal />
            {users.length ? (
                <InfiniteScroll next={() => fetchUsers(++page.current)} hasMore={hasMoreUsers} isLoading={moreUsersIsLoading}>
                    <Space direction='vertical' gap={4}>
                        {users.map((user) => (
                            <Space direction='horizontal' align='center' gap={4} key={user.id}>
                                <Avatar url={user.avatarUrl} alt={user.name} />
                                <Space direction='vertical' gap={1} grow>
                                    <Text size='16' weight='500'>
                                        {user.name}
                                    </Text>
                                    <OnlineStatus online={user.lastOnlineAt} />
                                </Space>
                                <Button onClick={() => useUsersStore.setState({ modalData: { isOpen: true, user } })}>{t('sendMessage')}</Button>
                            </Space>
                        ))}
                    </Space>
                </InfiniteScroll>
            ) : (
                <NoData title={t('noUsers')} subtitle={t('noUsersDescription')} />
            )}
            <SendModal />
        </>
    )
}

export default page
