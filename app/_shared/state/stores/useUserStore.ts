import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

export interface UserDataType {
    id: string
    email: string
    name: string
    avatarUrl: string
    createdAt: string
    updatedAt: string
    lastOnlineAt: string
}

interface UseUserStoreType {
    userData: UserDataType | null
    setUserData: (userData?: UserDataType | null) => void
}

export const useUserStore = create<UseUserStoreType>()(
    devtools(
        (set) => ({
            userData: null,
            setUserData: (userData) => set({ userData })
        }),
        { name: 'useUserStore' }
    )
)
