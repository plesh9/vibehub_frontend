import type { FC } from 'react'
import classnames from '@shared/lib/classnames'
import LineHorizontal from '@shared/ui/LineHorizontal'
import ReadStatus from '@shared/ui/ReadStatus'
import Space from '@shared/ui/Space'
import Text from '@shared/ui/Typography'
import { formatChatMessageDate } from '../../../../_lib/formatChatMessageDate'
import { formatMessageDate } from '../../../../_lib/formatMessageDate'
import s from './Messages.module.scss'

const Messages: FC = () => {
    return (
        <Space className={s.main} direction='vertical' grow>
            <Space className={s.main_container}>
                <div className='scroll'>
                    <Space direction='vertical' gap={4}>
                        <Space direction='horizontal' align='center' gap={6}>
                            <LineHorizontal />
                            <Text size='12' color='black45p' weight='500' noWrap>
                                {formatMessageDate(new Date())}
                            </Text>
                            <LineHorizontal />
                        </Space>
                        <Space className={s.message} direction='vertical' gap={1}>
                            <Text>Message</Text>
                            <Space direction='horizontal' justify='end' align='center' gap={2}>
                                <Text size='12' lineHeight='100' color='black45p'>
                                    {formatChatMessageDate(new Date())}
                                </Text>
                            </Space>
                        </Space>
                        <Space className={classnames(s.message, s.my)} direction='vertical' gap={1}>
                            <Text>Message message</Text>
                            <Space direction='horizontal' justify='end' align='center' gap={2}>
                                <Text size='12' lineHeight='100' color='black45p'>
                                    {formatChatMessageDate(new Date())}
                                </Text>
                                <ReadStatus isRead />
                            </Space>
                        </Space>
                    </Space>
                </div>
            </Space>
        </Space>
    )
}

export default Messages
