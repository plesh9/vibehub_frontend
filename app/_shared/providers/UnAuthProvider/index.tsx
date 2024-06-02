'use client'
import { useRouter } from 'next/navigation'
import { useEffect, type PropsWithChildren, type FC } from 'react'
import { routes } from '@shared/const/routes'
import { useUserStore } from '@shared/state/stores/useUserStore'

export const UnAuthProvider: FC<PropsWithChildren> = ({ children }) => {
    const router = useRouter()
    const userData = useUserStore((state) => state.userData)

    useEffect(() => {
        if (userData?.id) {
            router.replace(routes.messages)
        }
    }, [userData, router])

    if (userData?.id) {
        return null
    }

    return children
}
