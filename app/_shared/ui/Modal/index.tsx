import classnames from '@shared/lib/classnames'
import { useClickOutside } from '@shared/lib/hooks'
import type { DialogPropstype } from '../Dialog'
import Dialog from '../Dialog'
import Portal from '../Portal'
import Transition from '../Transition'
import s from './Modal.module.scss'

interface Props extends Omit<DialogPropstype, 'dialogRef'> {
    isOpen?: boolean
    close?: () => void
    dialogClassName?: string
}

export const MODAL_DURATION = 300

const Modal = ({ isOpen = true, close, className, dialogClassName, ...dialogProps }: Props): JSX.Element => {
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
                duration={MODAL_DURATION}
            >
                <div className={classnames(s.main, className)}>
                    <div className={s.main_layout}>
                        <Dialog className={classnames(s.main_content, dialogClassName)} dialogRef={contentRef} {...dialogProps} />
                    </div>
                </div>
            </Transition>
        </Portal>
    )
}

Modal.Header = Dialog.Header
Modal.Title = Dialog.Title
Modal.Description = Dialog.Description

export default Modal
