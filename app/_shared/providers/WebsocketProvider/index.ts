'use client'
import { useEffect, type FC } from 'react'
import { useUserStore, useWebsocketStore } from '@shared/state'

export const WebsocketProvider: FC = () => {
    const userData = useUserStore((state) => state.userData!)
    const connect = useWebsocketStore((state) => state.connect)
    const disconnect = useWebsocketStore((state) => state.disconnect)

    useEffect(() => {
        connect(userData.id)

        return () => {
            disconnect()
        }
    }, [connect, disconnect, userData.id])

    return null
}
