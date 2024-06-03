'use client'
import type { PropsWithChildren } from 'react'
import { useEffect, useState, type FC } from 'react'
import { authApi } from '@shared/api'
import { userService } from '@shared/lib/services'
import PageLoader from '@widgets/PageLoader'

export const UserInitializer: FC<PropsWithChildren> = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        authApi
            .me()
            .then(({ data }) => userService.setUser(data))
            .catch(() => userService.setUser(null))
            .finally(() => setIsLoading(false))
    }, [])

    if (isLoading) {
        return <PageLoader />
    }

    return children
}
