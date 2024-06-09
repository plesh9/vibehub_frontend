import type { Socket } from 'socket.io-client'
import io from 'socket.io-client'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { setOnlineUsers, useOnlineUsers } from './useOnlineUsers'

interface UseWebsocketStoreType {
    socket: Socket | null
    connect: (userId: string) => void
    disconnect: () => void
}

export const useWebsocketStore = create<UseWebsocketStoreType>()(
    devtools(
        (set) => ({
            socket: null,
            connect: (userId: string) => {
                const socket = io(process.env.NEXT_PUBLIC_WEBSOCKET_URL!, {
                    query: { userId }
                })

                socket.on('onlineUsers', (onlineUsers: Array<string>) => setOnlineUsers(onlineUsers))
                socket.on('userDisconnected', (userId: string) => useOnlineUsers.setState({ disconectedUserId: userId }))

                set({ socket })
            },
            disconnect: () => {
                set((state) => {
                    state.socket?.disconnect()

                    return { socket: null }
                })
            }
        }),
        { name: 'useWebsocketStore' }
    )
)
