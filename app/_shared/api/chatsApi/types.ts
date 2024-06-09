export interface GetChatsResponseType {
    chats: Array<ChatType>
    hasMore: boolean
}

export interface GetMessagesResponseType {
    messages: Array<MessageType>
    hasMore: boolean
}

export interface ChatType {
    id: string
    name: string
    createdAt: string
    updatedAt: string
    lastMessage: MessageType
    users: ChatUserType[]
}

export interface MessageType {
    id: string
    text: string
    createdAt: string
    updatedAt: string
    user: ChatUserType
    chat: {
        id: string
        name: string
    }
}

export interface ChatUserType {
    id: string
    name: string
    avatarUrl: string
    lastOnlineAt: string
}
