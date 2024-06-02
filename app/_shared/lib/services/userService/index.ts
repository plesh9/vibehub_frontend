import { useUserStore, type UserDataType } from '@shared/state'
import { tokenService } from '../tokenService'

interface UserServiceType {
    setUser: (data?: { accessToken?: string; user?: UserDataType | null } | null) => void
}

export const userService: UserServiceType = {
    setUser: (data) => {
        tokenService.setToken(data?.accessToken)
        useUserStore.setState({ userData: data?.user })
    }
}
