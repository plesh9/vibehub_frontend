import type { InputHTMLAttributes, ReactNode } from 'react'
import { forwardRef } from 'react'
import classnames from '@shared/lib/classnames'
import Text, { Label } from '@shared/ui/Typography'
import Space from '../Space'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    error?: string
    label?: ReactNode
}

const Input = forwardRef<HTMLInputElement, Props>(({ className, name, error, label, ...restProps }, ref) => {
    return (
        <Space direction='vertical' className={classnames('w100p', className)} gap='1'>
            {label && (
                <Label color={error ? 'red500' : 'black100'} htmlFor={name}>
                    {label}
                </Label>
            )}
            <input className={classnames(error && 'error_field')} ref={ref} name={name} {...restProps} />
            {error && (
                <Text size='12' color='red500'>
                    {error}
                </Text>
            )}
        </Space>
    )
})

Input.displayName = 'Input'

export default Input
