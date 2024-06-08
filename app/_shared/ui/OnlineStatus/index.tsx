import type { FC } from 'react'
import classnames from '@shared/lib/classnames'
import { formatToLocaleDate } from '@shared/lib/utils'
import { getTranslations } from '@shared/providers'
import s from './OnlineStatus.module.scss'

interface Props {
    online: 'online' | 'never' | string
}

const getOnline = (online: string) => {
    const t = getTranslations('Messages')

    if (online === 'online') {
        return t('online')
    } else if (online === 'never') {
        return t('never')
    } else {
        return formatToLocaleDate(new Date(online)).replace(/AM|PM/gi, '').trim()
    }
}

const getOnlineClassName = (online: string) => {
    if (online === 'online') {
        return s.online
    } else if (online === 'never') {
        return s.never
    } else {
        return s.date
    }
}

const OnlineStatus: FC<Props> = ({ online }) => {
    return <div className={classnames(s.main, getOnlineClassName(online))}>{getOnline(online)}</div>
}

export default OnlineStatus
