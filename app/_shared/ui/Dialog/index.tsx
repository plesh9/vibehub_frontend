import type { MutableRefObject } from 'react'
import { type FC, type ReactNode } from 'react'
import classnames from '@shared/lib/classnames'
import ScrollLock from '../ScrollLock'
import type { SpacePropsType } from '../Space'
import Space from '../Space'
import type { TextPropsType, TitlePropsType } from '../Typography'
import Text, { Title } from '../Typography'
import s from './Dialog.module.scss'

export interface DialogPropstype {
    children?: ReactNode
    className?: string
    dialogRef?: MutableRefObject<HTMLDivElement>
    size?: 'small'
}

const Dialog = ({ size = 'small', dialogRef, children, className }: DialogPropstype): JSX.Element => {
    return (
        <div className={classnames(s.main, s[size], className)} ref={dialogRef}>
            <ScrollLock />
            <div className={s.main_overflow}>{children}</div>
        </div>
    )
}

const DialogHeader: FC<SpacePropsType> = ({ direction = 'vertical', gap = 2, ...restProps }) => <Space direction={direction} gap={gap} {...restProps} />
const DialogTitle: FC<TitlePropsType> = ({ variant = 'h1', align = 'center', ...restProps }) => <Title variant={variant} align={align} {...restProps} />
const DialogDescription: FC<TextPropsType> = ({ color = 'black45p', align = 'center', ...restProps }) => <Text color={color} align={align} {...restProps} />

Dialog.Header = DialogHeader
Dialog.Title = DialogTitle
Dialog.Description = DialogDescription

export default Dialog
