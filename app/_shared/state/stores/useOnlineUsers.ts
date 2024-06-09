import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface UseOnlineUsersType {
    onlineUserIds: Array<string>
    disconectedUserId: string
    setOnlineUsers: (onlineUserIds: Array<string>) => void
}

export const useOnlineUsers = create<UseOnlineUsersType>()(
    devtools(
        (set) => ({
            onlineUserIds: [],
            disconectedUserId: '',
            setOnlineUsers: (onlineUserIds) => {
                set({ onlineUserIds })
            }
        }),
        { name: 'useOnlineUsers' }
    )
)

export const setOnlineUsers = useOnlineUsers.getState().setOnlineUsers
