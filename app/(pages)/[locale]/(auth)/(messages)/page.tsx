'use client'
import { useState, type FC } from 'react'
import { useAuthStore } from '@shared/state'
import Button from '@shared/ui/Button'

const page: FC = () => {
    const [isExiting, setIsExiting] = useState(false)
    const logout = useAuthStore((state) => state.logout)

    return (
        <div>
            <Button onClick={() => logout(setIsExiting)} loading={isExiting}>
                Logout
            </Button>
        </div>
    )
}

export default page
