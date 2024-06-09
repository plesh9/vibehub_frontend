import type { UserDataType } from '@shared/state'

export interface GetUsersResponseType {
    users: Array<UserDataType>
    hasMore: boolean
}
