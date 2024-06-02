import type { InputHTMLAttributes, ReactNode } from 'react'
import { forwardRef, useState } from 'react'
import classnames from '@shared/lib/classnames'
import Text, { Label } from '@shared/ui/Typography'
import Icon from '../Icon'
import Space from '../Space'
import s from './PasswordInput.module.scss'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    error?: string
    label?: ReactNode
    type?: 'password' | 'text'
}

const PasswordInput = forwardRef<HTMLInputElement, Props>(({ className, name, error, label, type: initialType = 'password', ...restProps }, ref) => {
    const [type, setType] = useState<'password' | 'text'>(initialType)

    return (
        <Space direction='vertical' className={className} gap='1'>
            {label && (
                <Label color={error ? 'red500' : 'black100'} htmlFor={name}>
                    {label}
                </Label>
            )}
            <div className='relative flex_column'>
                <input className={classnames(s.input, error && 'error_field')} ref={ref} name={name} type={type} {...restProps} />
                <button className={s.eye} onClick={() => setType((prevType) => (prevType === 'password' ? 'text' : 'password'))} type='button'>
                    <Icon name={type === 'password' ? 'eye' : 'eye-off'} />
                </button>
            </div>
            {error && (
                <Text size='12' color='red500'>
                    {error}
                </Text>
            )}
        </Space>
    )
})

PasswordInput.displayName = 'PasswordInput'

export default PasswordInput
