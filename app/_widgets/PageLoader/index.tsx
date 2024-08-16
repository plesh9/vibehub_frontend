import { useTranslations } from 'next-intl'
import type { FC } from 'react'
import Space from '@shared/ui/Space'
import Spinner from '@shared/ui/Spinner'
import Text from '@shared/ui/Typography'
import s from './PageLoader.module.scss'

const PageLoader: FC = () => {
    const t = useTranslations('PageLoader')

    return (
        <div className={s.main}>
            <Space direction='vertical' maxW='100' align='center' justify='center' gap={2}>
                <Spinner size='24' color='blue500' />
                <Text align='center'>{t('description')}</Text>
            </Space>
        </div>
    )
}

export default PageLoader
