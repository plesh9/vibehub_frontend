import axios from 'axios'
import { $axiosClient } from '@shared/config'
import { apiService } from '@shared/lib/services'
import type { AuthApiType, LoginResponseType } from './types'

const AUTH_URL = '/auth'

export const authApi: AuthApiType = {
    me: () => $axiosClient.get<LoginResponseType>(`${AUTH_URL}/me`),
    meOnServerSide: () => fetch(`${apiService.getUrl(`${AUTH_URL}/me`)}`).then((data) => data.json()),
    refresh: () => $axiosClient.get<LoginResponseType>(`${AUTH_URL}/refresh`),
    login: (input) => axios.post<LoginResponseType>(apiService.getUrl(`${AUTH_URL}/login`), input),
    register: (input) => axios.post<LoginResponseType>(apiService.getUrl(`${AUTH_URL}/register`), input),
    logout: () => $axiosClient.get<void>(`${AUTH_URL}/logout`)
}

export * from './types'
