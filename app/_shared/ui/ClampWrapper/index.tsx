import type { FC, ReactNode } from 'react'
import classnames from '@shared/lib/classnames'
import s from './ClampWrapper.module.scss'

interface Props {
    children: ReactNode
    className?: string
    clamp?: number
    maxWidth?: number | string
}

const ClampWrapper: FC<Props> = ({ className, clamp, children, maxWidth }) => {
    return (
        <div className={classnames(s.main, className)} style={{ WebkitLineClamp: clamp, maxWidth }}>
            {children}
        </div>
    )
}

export default ClampWrapper
