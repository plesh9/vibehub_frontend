import type { FC } from 'react'
import type { ColorsType } from '@shared/const/colors'
import { type IconsType } from '@shared/const/icons'
import classnames from '@shared/lib/classnames'
import Icon from '../Icon'
import s from './Spinner.module.scss'

interface Props {
    icon?: IconsType
    size?: '12' | '16' | '20' | '24' | '48'
    color?: ColorsType
}

const Spinner: FC<Props> = ({ icon = 'loading', size = '16', color }) => {
    return (
        <div className={classnames(s.main, s[`size${size}`])}>
            <Icon name={icon} color={color} />
        </div>
    )
}

export default Spinner
