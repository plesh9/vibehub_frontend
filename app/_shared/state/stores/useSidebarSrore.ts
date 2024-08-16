import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface UseSidebarSroreType {
    isOpenOnMobile: boolean
    openOnMobile: () => void
    closeOnMobile: () => void
}

export const useSidebarSrore = create<UseSidebarSroreType>()(
    devtools(
        (set) => ({
            isOpenOnMobile: false,
            openOnMobile: () => set({ isOpenOnMobile: true }),
            closeOnMobile: () => set({ isOpenOnMobile: false })
        }),
        { name: 'useSidebarSrore' }
    )
)
