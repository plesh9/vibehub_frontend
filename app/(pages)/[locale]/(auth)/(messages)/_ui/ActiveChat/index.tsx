import { type FC } from 'react'
import Loader from '@shared/ui/Loader'
import Space from '@shared/ui/Space'
import { useChatsStore } from '../../_state'
import Info from './ui/Info'
import Messages from './ui/Messages'
import SendForm from './ui/SendForm'

const ActiveChat: FC = () => {
    const messagesIsLoading = useChatsStore((state) => state.messagesIsLoading)

    return (
        <Space className='scroll-lock' direction='vertical' backgroundColor='white100' grow>
            <Info />
            {messagesIsLoading ? <Loader /> : <Messages />}
            <SendForm />
        </Space>
    )
}

export default ActiveChat
