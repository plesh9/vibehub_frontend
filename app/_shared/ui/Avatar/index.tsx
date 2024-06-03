import Image from 'next/image'
import type { FC } from 'react'
import classnames from '@shared/lib/classnames'
import Text from '../Typography'
import s from './Avatar.module.scss'

export type AvatarSizesType = '40' | '32'
interface Props {
    url?: string
    alt?: string
    size?: AvatarSizesType
    lgSize?: AvatarSizesType
    countLetters?: number
    isOnline?: boolean
    radius?: '4' | '8' | '100'
}

const Avatar: FC<Props> = ({ alt = '', url, size = '40', countLetters = 1, isOnline, radius = '100', lgSize }) => {
    return (
        <div className={classnames(s.main, !url && s.empty, isOnline && s.online, size && s[`size${size}`], lgSize && s[`lg_size${lgSize}`], radius && `br${radius}`)}>
            {url ? <Image src={url} alt={alt} width={+size} height={+size} /> : <Text align='center'>{alt?.slice(0, countLetters)}</Text>}
        </div>
    )
}

export default Avatar
