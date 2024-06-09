import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import type { SendMessageInputType } from '@shared/api'
import { chatsApi, usersApi } from '@shared/api'
import { handleError } from '@shared/lib/utils'
import { getTranslations } from '@shared/providers'
import { Alert, type UserDataType } from '@shared/state'
import { useChatsStore } from '../../(messages)/_state'

export const USERS_PAGE_LIMIT = 52

interface UseUsersStoreType {
    users: Array<UserDataType>
    hasMoreUsers: boolean
    usersIsLoading: boolean
    moreUsersIsLoading: boolean
    fetchUsers: (page?: number) => void
    modalData: { isOpen?: boolean; user?: UserDataType }
    sendMessage: (input: SendMessageInputType, setIsLoading: (isLoading: boolean) => void) => Promise<void>
}

export const useUsersStore = create<UseUsersStoreType>()(
    devtools(
        (set) => ({
            users: [],
            hasMoreUsers: false,
            usersIsLoading: false,
            moreUsersIsLoading: false,
            fetchUsers: async (page = 1) => {
                const isFirstPage = page === 1

                set({ [isFirstPage ? 'usersIsLoading' : 'moreUsersIsLoading']: true })
                usersApi
                    .getUsers({ page, limit: USERS_PAGE_LIMIT })
                    .then(({ data }) => {
                        set((state) => ({
                            users: page === 1 ? data.users : [...state.users, ...data.users],
                            hasMoreUsers: data.hasMore
                        }))
                    })
                    .catch(handleError)
                    .finally(() => set({ [isFirstPage ? 'usersIsLoading' : 'moreUsersIsLoading']: false }))
            },
            modalData: { isOpen: false },
            sendMessage: async (input, setIsLoading) => {
                setIsLoading(true)

                return chatsApi
                    .sendMessage(input)
                    .then(({ data }) => {
                        const t = getTranslations('Users')

                        set({ modalData: { isOpen: false } })
                        localStorage.setItem('activeChatId', data.chat.id)
                        useChatsStore.setState({ activeChatId: data.chat.id })
                        Alert('success', t('SendModal.success'))
                    })
                    .catch(handleError)
                    .finally(() => setIsLoading(false))
            }
        }),
        { name: 'useChatsStore' }
    )
)
