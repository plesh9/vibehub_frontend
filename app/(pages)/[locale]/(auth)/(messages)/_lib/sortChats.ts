import type { ChatType } from '@shared/api'

export const sortChats = (chats: Array<ChatType>): Array<ChatType> => [...chats].sort((a, b) => new Date(b.lastMessage.createdAt).getTime() - new Date(a.lastMessage.createdAt).getTime())
