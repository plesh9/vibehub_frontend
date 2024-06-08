import { type FC } from 'react'
import Space from '@shared/ui/Space'
import Info from './ui/Info'
import Messages from './ui/Messages'
import SendForm from './ui/SendForm'

const ActiveChat: FC = () => {
    return (
        <Space className='scroll-lock' direction='vertical' backgroundColor='white100' grow>
            <Info />
            <Messages />
            <SendForm />
        </Space>
    )
}

export default ActiveChat
