import { type FC, type ReactNode } from 'react'
import classnames from '@shared/lib/classnames'
import { useClickOutside } from '@shared/lib/hooks'
import Portal from '../Portal'
import ScrollLock from '../ScrollLock'
import type { SpacePropsType } from '../Space'
import Space from '../Space'
import Transition from '../Transition'
import type { TextPropsType, TitlePropsType } from '../Typography'
import Text, { Title } from '../Typography'
import s from './Modal.module.scss'

interface Props {
    isOpen?: boolean
    close?: () => void
    children: ReactNode
    size?: 'small'
}

const Modal = ({ isOpen = true, close, size = 'small', children }: Props): JSX.Element => {
    const contentRef = useClickOutside(close)

    return (
        <Portal>
            <Transition
                isOpen={isOpen}
                classNames={{
                    entered: s.entered,
                    entering: s.entering,
                    exited: s.exited,
                    exiting: s.exiting
                }}
            >
                <div className={s.main}>
                    <div className={s.main_layout}>
                        <div className={classnames(s.main_content, s[size])} ref={contentRef}>
                            <ScrollLock isOpen={isOpen} />
                            <div className={s.main_overflow}>{children}</div>
                        </div>
                    </div>
                </div>
            </Transition>
        </Portal>
    )
}

const ModalHeader: FC<SpacePropsType> = ({ direction = 'vertical', gap = 2, ...restProps }) => <Space direction={direction} gap={gap} {...restProps} />
const ModalTitle: FC<TitlePropsType> = ({ variant = 'h2', align = 'center', ...restProps }) => <Title variant={variant} align={align} {...restProps} />
const ModalDescription: FC<TextPropsType> = ({ color = 'black45p', align = 'center', ...restProps }) => <Text color={color} align={align} {...restProps} />

Modal.Header = ModalHeader
Modal.Title = ModalTitle
Modal.Description = ModalDescription

export default Modal
