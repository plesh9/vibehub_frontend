'use client'
import type { FC, ReactNode } from 'react'
import { useEffect, useRef } from 'react'
import classnames from '@shared/lib/classnames'
import s from './InfinityScroll.module.scss'

export interface Props {
    hasMore: boolean
    isLoading: boolean
    next: () => void
    children: ReactNode
    inverse?: boolean
}

const InfiniteScroll: FC<Props> = ({ hasMore, isLoading, next, inverse, children }) => {
    const triggerRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (!triggerRef.current || !hasMore || isLoading) {
            return
        }

        const currentRef = triggerRef.current
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                next()
            }
        })

        observer.observe(currentRef)

        return () => {
            observer.unobserve(currentRef)
        }
    }, [hasMore, isLoading, next])

    return (
        <div className={classnames(s.main, inverse && s.inverse)}>
            {children}
            {!isLoading && hasMore && <div className={s.main_trigger} ref={triggerRef} />}
        </div>
    )
}

export default InfiniteScroll
