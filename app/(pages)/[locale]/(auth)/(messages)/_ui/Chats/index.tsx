import { useTranslations } from 'next-intl'
import { useState, type FC } from 'react'
import classnames from '@shared/lib/classnames'
import Avatar from '@shared/ui/Avatar'
import ClampWrapper from '@shared/ui/ClampWrapper'
import ReadStatus from '@shared/ui/ReadStatus'
import Search from '@shared/ui/Search'
import Space from '@shared/ui/Space'
import Text, { Title } from '@shared/ui/Typography'
import { formatChatsDate } from '../../_lib/formatChatsDate'
import s from './Chats.module.scss'

const Chats: FC = () => {
    const t = useTranslations('Messages')
    const [search, setSearch] = useState('')

    return (
        <Space className={s.main} gap={3} grow>
            <Space className={s.main_header} direction='vertical' gap={4}>
                <Title>{t('title')}</Title>
                <Search value={search} setValue={setSearch} />
            </Space>
            <Space className={s.main_chats} direction='vertical' grow>
                <button className={classnames(s.chat, s.active)} type='button'>
                    <Avatar url='' alt='John Doe' isOnline />
                    <Space direction='vertical' grow>
                        <Space direction='horizontal' justify='between' align='center' gap={1}>
                            <ClampWrapper>
                                <Text size='16' weight='500'>
                                    John Doe
                                </Text>
                            </ClampWrapper>
                            <Text size='12' color='black45p' noWrap>
                                {formatChatsDate(new Date())}
                            </Text>
                        </Space>
                        <Space direction='horizontal' justify='between' align='center' gap={1}>
                            <ClampWrapper>
                                <Text color='black45p'>Hello, how are you?</Text>
                            </ClampWrapper>
                            <ReadStatus isRead />
                        </Space>
                    </Space>
                </button>
            </Space>
        </Space>
    )
}

export default Chats
