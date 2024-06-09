import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { chatsApi, type ChatType, type MessageType, type SendMessageInputType } from '@shared/api'
import { handleError } from '@shared/lib/utils'
import { sortChats } from '../_lib/sortChats'

export const CHATS_PAGE_LIMIT = 52
export const MESSAGES_PAGE_LIMIT = 52

interface UseChatsStoreType {
    activeChatId: string | null
    chats: Array<ChatType>
    messages: Array<MessageType>
    hasMoreChats: boolean
    chatsIsLoading: boolean
    chatsMoreIsLoading: boolean
    hasMoreMessages: boolean
    messagesIsLoading: boolean
    messagesMoreIsLoading: boolean
    fetchChats: (page?: number) => void
    fetchMessages: (chatId: string, page?: number) => Promise<void>
    sendMessage: (input: SendMessageInputType) => Promise<void>
    addMessage: (message: MessageType) => void
}

export const useChatsStore = create<UseChatsStoreType>()(
    devtools(
        (set, get) => ({
            activeChatId: typeof localStorage !== 'undefined' ? localStorage.getItem('activeChatId') : null,
            chats: [],
            messages: [],
            hasMoreChats: false,
            chatsIsLoading: true,
            chatsMoreIsLoading: false,
            hasMoreMessages: false,
            messagesIsLoading: true,
            messagesMoreIsLoading: false,
            fetchChats: (page = 1) => {
                const isFirstPage = page === 1

                set({ [isFirstPage ? 'chatsIsLoading' : 'chatsMoreIsLoading']: true })
                chatsApi
                    .getChats({
                        page,
                        limit: CHATS_PAGE_LIMIT
                    })
                    .then(({ data }) => set((state) => ({ chats: isFirstPage ? data.chats : [...state.chats, ...data.chats], hasMoreChats: data.hasMore })))
                    .catch(handleError)
                    .finally(() => set({ [isFirstPage ? 'chatsIsLoading' : 'chatsMoreIsLoading']: false }))
            },
            fetchMessages: async (chatId, page = 1) => {
                const isFirstPage = page === 1

                set({ [isFirstPage ? 'messagesIsLoading' : 'messagesMoreIsLoading']: true })

                return chatsApi
                    .getMessages(chatId, {
                        page,
                        limit: MESSAGES_PAGE_LIMIT
                    })
                    .then(({ data }) => set((state) => ({ messages: isFirstPage ? data.messages : [...state.messages, ...data.messages], hasMoreMessages: data.hasMore })))
                    .catch(handleError)
                    .finally(() => set({ [isFirstPage ? 'messagesIsLoading' : 'messagesMoreIsLoading']: false }))
            },
            sendMessage: async (input) => {
                return chatsApi
                    .sendMessage(input)
                    .then(({ data: newMessage }) => get().addMessage(newMessage))
                    .catch(handleError)
            },
            addMessage: (message) => {
                set((state) => ({
                    chats: sortChats(state.chats.map((chat) => (chat.id === message.chat.id ? { ...chat, lastMessage: message } : chat))),
                    messages: state.activeChatId === message.chat.id ? [...state.messages, message] : state.messages
                }))
            }
        }),
        { name: 'useChatsStore' }
    )
)
