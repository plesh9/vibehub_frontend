import { useTranslations } from 'next-intl'
import type { FC, InputHTMLAttributes } from 'react'
import classnames from '@shared/lib/classnames'
import Icon from '../Icon'
import Space from '../Space'
import s from './Search.module.scss'

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
    value: string
    setValue: (value: string) => void
}

const Search: FC<Props> = ({ value, setValue, placeholder = 'Search', type = 'text', className, ...restProps }) => {
    const t = useTranslations('Messages')

    return (
        <div className={classnames(s.main, className)}>
            <input className={s.main_input} type={type} value={value} onChange={(e) => setValue(e.target.value)} placeholder={t('search')} {...restProps} />
            <Space className={s.main_icon} display='flex' align='center' justify='center'>
                <Icon name='search' />
            </Space>
        </div>
    )
}

export default Search
