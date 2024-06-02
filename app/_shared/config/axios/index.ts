import axios from 'axios'
import { authApi } from '@shared/api'
import { apiService, tokenService, userService } from '@shared/lib/services'
import { Alert } from '@shared/state'

export const $axiosClient = axios.create({
    withCredentials: true,
    baseURL: apiService.getUrl()
})

$axiosClient.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${tokenService.getToken()}`

    return config
})

$axiosClient.interceptors.response.use(
    (config) => {
        return config
    },
    async (error) => {
        const originalRequest = error.config

        if (error.response.status === 401 && error.config && !error.config._isRetry) {
            originalRequest._isRetry = true

            try {
                const response = await authApi.refresh()

                userService.setUser(response.data)

                return $axiosClient.request(originalRequest)
            } catch (err: any) {
                Alert('error', err?.response?.data?.message || 'User is not authenticated')
            }
        }

        throw error
    }
)
