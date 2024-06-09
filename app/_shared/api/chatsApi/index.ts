import type { AxiosResponse } from 'axios'
import { axiosClient } from '@shared/config'
import type { PaginationDtoType } from '@shared/lib/types'
import type { GetChatsResponseType, GetMessagesResponseType, MessageType } from './types'

export interface SendMessageInputType {
    chatId?: string
    toUserId: string
    text: string
}

interface ChatApiType {
    getChats: (paginationDto: PaginationDtoType) => Promise<AxiosResponse<GetChatsResponseType>>
    getMessages: (chatId: string, paginationDto: PaginationDtoType) => Promise<AxiosResponse<GetMessagesResponseType>>
    sendMessage: (input: SendMessageInputType) => Promise<AxiosResponse<MessageType>>
}

const CHATS_URL = '/chats'

export const chatsApi: ChatApiType = {
    getChats: (paginationDto) => axiosClient.get<GetChatsResponseType>(CHATS_URL, { params: paginationDto }),
    getMessages: (chatId: string, paginationDto) => axiosClient.get<GetMessagesResponseType>(`${CHATS_URL}/${chatId}/messages`, { params: paginationDto }),
    sendMessage: (input) => axiosClient.post(`${CHATS_URL}/messages`, input)
}

export * from './types'
