import axios from 'axios'
import type { AxiosResponse } from 'axios'
import { axiosClient } from '@shared/config'
import { apiService, tokenService } from '@shared/lib/services'
import type { UserDataType } from '@shared/state'

export interface LoginResponseType {
    accessToken: string
    user: UserDataType
}

export interface LoginInputType {
    email: string
    password: string
}

export interface AuthApiType {
    me: () => Promise<AxiosResponse<LoginResponseType>>
    refresh: () => Promise<AxiosResponse<LoginResponseType>>
    login: (input: LoginInputType) => Promise<AxiosResponse<LoginResponseType>>
    register: (input: LoginInputType) => Promise<AxiosResponse<LoginResponseType>>
    logout: () => Promise<AxiosResponse<void>>
}

export const AUTH_URL = '/auth'

export const authApi: AuthApiType = {
    me: () => axiosClient.get<LoginResponseType>(`${AUTH_URL}/me`),
    refresh: () => axios.get<LoginResponseType>(apiService.getUrl(`${AUTH_URL}/refresh`), { withCredentials: true, headers: { Authorization: `Bearer ${tokenService.getToken()}` } }),
    login: (input) => axios.post<LoginResponseType>(apiService.getUrl(`${AUTH_URL}/login`), input),
    register: (input) => axios.post<LoginResponseType>(apiService.getUrl(`${AUTH_URL}/register`), input),
    logout: () => axiosClient.get<void>(`${AUTH_URL}/logout`)
}
