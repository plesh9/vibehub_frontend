'use client'
import type { FC, ReactElement, CSSProperties } from 'react'
import { useEffect, useState, cloneElement } from 'react'
import classnames from '@shared/lib/classnames'
import s from './Transition.module.scss'

export const TransitionStates = {
    entered: 'entered',
    entering: 'entering',
    exited: 'exited',
    exiting: 'exiting'
} as const
export type TransitionStateType = (typeof TransitionStates)[keyof typeof TransitionStates]
export type TransitionTimingFunctionType = 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear' | `cubic-bezier(${string}, ${string}, ${string}, ${string})`

interface Props {
    children: ReactElement
    isOpen: boolean
    variant?: 'fade' | 'slideUp'
    duration?: number
    timingFunction?: TransitionTimingFunctionType
    delay?: number
    classNames?: Record<TransitionStateType, string>
    styles?: Record<TransitionStateType, CSSProperties>
    unMountOnExited?: boolean
}

const Transition: FC<Props> = ({ children, isOpen: initialOpen = false, variant = 'fade', duration = 300, timingFunction = 'ease', delay = 20, classNames, styles, unMountOnExited = true }) => {
    const [isOpen, setIsOpen] = useState(initialOpen)
    const [transitionStates, setTransitionStates] = useState<Array<TransitionStateType>>(!unMountOnExited ? ['exited'] : [])
    const transitionClasses = transitionStates.map((state) => (classNames ? classNames[state] : s[TransitionStates[state]]))
    const transitionStyles = styles ? transitionStates.map((state) => styles && styles[state]).reduce((acc, styles) => ({ ...acc, ...styles }), {}) : null

    useEffect(() => {
        const timeoutIds: NodeJS.Timeout[] = []
        const clearTimeouts = () => {
            timeoutIds.forEach((timeoutId) => clearTimeout(timeoutId))
            timeoutIds.length = 0
        }

        if (initialOpen) {
            setIsOpen(true)
            setTransitionStates(['entered'])
            const enteringTimeoutId = setTimeout(() => setTransitionStates(['entered', 'entering']), delay)
            const exitTimeoutId = setTimeout(() => setTransitionStates([]), duration)

            timeoutIds.push(enteringTimeoutId, exitTimeoutId)
        } else {
            setTransitionStates(['exiting'])
            const exitingTimeoutId = setTimeout(() => setTransitionStates(['exiting', 'exited']), delay)
            const closeTimeoutId = setTimeout(() => {
                setIsOpen(false)
                setTransitionStates(['exited'])
            }, duration)

            timeoutIds.push(exitingTimeoutId, closeTimeoutId)
        }

        return () => clearTimeouts()
    }, [initialOpen, duration, delay])

    if (!isOpen && unMountOnExited) {
        return null
    }

    return (
        <>
            {cloneElement(children, {
                className: classnames(!classNames && !styles && transitionStates.length && s[variant], ...transitionClasses, children.props.className),
                style: { ...children.props.style, transition: transitionStates.length && `all ${duration}ms ${timingFunction}`, ...transitionStyles }
            })}
        </>
    )
}

export default Transition
