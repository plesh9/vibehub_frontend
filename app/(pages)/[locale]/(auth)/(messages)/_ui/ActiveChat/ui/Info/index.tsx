import type { FC } from 'react'
import { useUserStore } from '@shared/state'
import Avatar from '@shared/ui/Avatar'
import Button from '@shared/ui/Button'
import ClampWrapper from '@shared/ui/ClampWrapper'
import Icon from '@shared/ui/Icon'
import OnlineStatus from '@shared/ui/OnlineStatus'
import Space from '@shared/ui/Space'
import Text from '@shared/ui/Typography'
import { useChatsStore } from '../../../../_state'
import s from './Info.module.scss'

const Info: FC = () => {
    const userData = useUserStore((state) => state.userData!)
    const activeChat = useChatsStore((state) => state.chats.find((chat) => chat.id === state.activeChatId)!)
    const chatUser = activeChat.users.find((user) => user.id !== userData.id)!

    return (
        <Space className={s.main} direction='horizontal' align='center' gap={3}>
            <Space display='none' lg={{ display: 'block' }}>
                <Button onClick={() => useChatsStore.setState({ activeChatId: '' })} variant='transparent' size='small' icon='arrow-back' />
            </Space>
            <Avatar url={chatUser.avatarUrl} alt={chatUser.name} />
            <Space direction='vertical' gap={1} grow>
                <ClampWrapper>
                    <Text size='16' weight='500'>
                        {chatUser.name}
                    </Text>
                </ClampWrapper>
                <OnlineStatus online={chatUser.lastOnlineAt} />
            </Space>
        </Space>
    )
}

export default Info
