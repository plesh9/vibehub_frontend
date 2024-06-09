import { useTranslations } from 'next-intl'
import type { FC } from 'react'
import classnames from '@shared/lib/classnames'
import { formatToLocaleDate } from '@shared/lib/utils'
import s from './OnlineStatus.module.scss'

interface Props {
    online: 'ONLINE' | string
}

const getOnlineClassName = (online: string) => {
    if (online === 'ONLINE') {
        return s.online
    } else if (!online || online === 'never') {
        return s.never
    } else {
        return s.date
    }
}

const OnlineStatus: FC<Props> = ({ online }) => {
    const t = useTranslations('Messages')

    return <div className={classnames(s.main, getOnlineClassName(online))}>{online === 'ONLINE' ? t('online') : t('lastOnlineAt') + ' ' + (online ? formatToLocaleDate(new Date(online)).replace(/AM|PM/gi, '').trim() : t('never'))}</div>
}

export default OnlineStatus
