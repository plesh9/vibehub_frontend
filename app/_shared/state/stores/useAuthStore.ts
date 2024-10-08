import type { Dispatch, SetStateAction } from 'react'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { authApi, type LoginInputType } from '@shared/api'
import { userService } from '@shared/lib/services'
import { handleError } from '@shared/lib/utils'
import { getTranslations } from '@shared/providers'
import { Alert } from './useAlertStore'

export interface UseAuthStoreType {
    login: (input: LoginInputType, setIsLoading: Dispatch<SetStateAction<boolean>>) => void
    register: (variables: LoginInputType, setIsLoading: Dispatch<SetStateAction<boolean>>) => void
    logout: (setIsLoading: Dispatch<SetStateAction<boolean>>) => Promise<void>
}

export const useAuthStore = create<UseAuthStoreType>()(
    devtools(
        (set) => ({
            login: (input, setIsLoading) => {
                setIsLoading(true)
                authApi
                    .login(input)
                    .then(({ data }) => {
                        const t = getTranslations('Login')

                        userService.setUser(data)
                        Alert('success', t('success'))
                    })
                    .catch(handleError)
                    .finally(() => setIsLoading(false))
            },
            register: (input, setIsLoading) => {
                setIsLoading(true)
                authApi
                    .register(input)
                    .then(({ data }) => {
                        const t = getTranslations('Register')

                        userService.setUser(data)
                        Alert('success', t('success'))
                    })
                    .catch(handleError)
                    .finally(() => setIsLoading(false))
            },
            logout: (setIsLoading) => {
                setIsLoading(true)

                return authApi
                    .logout()
                    .then(() => userService.setUser(null))
                    .catch(handleError)
                    .finally(() => setIsLoading(false))
            }
        }),
        { name: 'useAuthStore' }
    )
)
