'use client'
import type { PropsWithChildren } from 'react'
import { useEffect, useState, type FC } from 'react'
import PageLoader from '@widgets/PageLoader'

export const ClientProvider: FC<PropsWithChildren> = ({ children }) => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return <PageLoader />
    }

    return children
}
