'use client'
import { type FC, useRef } from 'react'
import { userService } from '@shared/lib/services'
import type { UserDataType } from '../stores/useUserStore'

export const UserInitializer: FC<{ user?: UserDataType; accessToken?: string }> = ({ user, accessToken }) => {
    const initialized = useRef(false)

    if (!initialized.current) {
        initialized.current = true
        userService.setUser({ accessToken, user })
    }

    return null
}
