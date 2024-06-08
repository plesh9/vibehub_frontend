import type { FC } from 'react'
import Avatar from '@shared/ui/Avatar'
import ClampWrapper from '@shared/ui/ClampWrapper'
import OnlineStatus from '@shared/ui/OnlineStatus'
import Space from '@shared/ui/Space'
import Text from '@shared/ui/Typography'
import s from './Info.module.scss'

const Info: FC = () => {
    return (
        <Space className={s.main} direction='horizontal' align='center' gap={3}>
            <Avatar url='' alt='John Doe' />
            <Space direction='vertical' gap={1} grow>
                <ClampWrapper>
                    <Text size='16' weight='500'>
                        John Doe
                    </Text>
                </ClampWrapper>
                <OnlineStatus online='online' />
            </Space>
        </Space>
    )
}

export default Info
