import type { AxiosResponse } from 'axios'
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
    meOnServerSide: () => Promise<LoginResponseType>
    refresh: () => Promise<AxiosResponse<LoginResponseType>>
    login: (input: LoginInputType) => Promise<AxiosResponse<LoginResponseType>>
    register: (input: LoginInputType) => Promise<AxiosResponse<LoginResponseType>>
    logout: () => Promise<AxiosResponse<void>>
}
