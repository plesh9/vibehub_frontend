'use client'
import { useRouter } from 'next/navigation'
import { useEffect, type PropsWithChildren, type FC } from 'react'
import { routes } from '@shared/const/routes'
import { useUserStore } from '@shared/state/stores/useUserStore'

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
    const router = useRouter()
    const userData = useUserStore((state) => state.userData)

    useEffect(() => {
        if (!userData) {
            router.replace(routes.login)
        }
    }, [userData, router])

    if (!userData) {
        return null
    }

    return children
}
