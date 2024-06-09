import type { AxiosResponse } from 'axios'
import { axiosClient } from '@shared/config'
import type { PaginationDtoType } from '@shared/lib/types'
import type { GetUsersResponseType } from './types'

export interface UsersApiType {
    getUsers: (paginationDto: PaginationDtoType) => Promise<AxiosResponse<GetUsersResponseType>>
}

export const USERS_URL = '/users'

export const usersApi: UsersApiType = {
    getUsers: (paginationDto) => axiosClient.get<GetUsersResponseType>(USERS_URL, { params: paginationDto })
}
