import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

type PopupVariantsType = 'success' | 'error' | 'loading'
export type AlertType = (type: PopupVariantsType, text: string, title?: string, closeTime?: number | 'none', id?: number) => void
export interface PopupType {
    id: number | NodeJS.Timeout
    type: PopupVariantsType
    text: string
    title?: string
    isOpen?: boolean
}

interface useAlertStoreType {
    popups: Array<PopupType>
    Alert: AlertType
    closePopup: (timeoutId: number | NodeJS.Timeout) => void
}

export const useAlertStore = create<useAlertStoreType>()(
    devtools(
        (set) => ({
            popups: [],
            Alert: (type, text, title, timeout = 3000, id) => {
                set((state) => {
                    let timeoutId: NodeJS.Timeout | number = id ?? new Date().getTime()

                    if (timeout !== 'none') {
                        timeoutId = setTimeout(() => {
                            set((state) => ({
                                popups: state.popups.map((item) => {
                                    if (item.id === timeoutId) {
                                        return {
                                            ...item,
                                            isOpen: false
                                        }
                                    }

                                    return item
                                })
                            }))

                            setTimeout(() => {
                                set((state) => ({
                                    popups: state.popups.filter((item) => item.id !== timeoutId)
                                }))
                            }, 300)
                        }, timeout)
                    }

                    return {
                        popups: [
                            {
                                type,
                                title,
                                text: text || 'Something went wrong!',
                                id: timeoutId,
                                isOpen: true
                            },
                            ...state.popups
                        ]
                    }
                })
            },
            closePopup: (popupId) => {
                set((state) => ({
                    popups: state.popups.map((item) => {
                        if (item.id === popupId) {
                            return {
                                ...item,
                                isOpen: false
                            }
                        }

                        return item
                    })
                }))

                setTimeout(() => {
                    set((state) => ({
                        popups: state.popups.filter((item) => item.id !== popupId)
                    }))
                }, 300)
            }
        }),
        { name: 'useAlertStore' }
    )
)

export const useAlert = () => useAlertStore((state) => state.Alert)
export const Alert: AlertType = (type, text, title, timeout, id) => useAlertStore.getState().Alert(type, text, title, timeout, id)
export const closeAlert = (timeoutId: number | NodeJS.Timeout) => useAlertStore.getState().closePopup(timeoutId)
