import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface UseSidebarSroreType {
    isOpenOnMobile: boolean
    openOnMobile: () => void
    closeOnMobile: () => void
    toggleOnMobile: () => void
}

export const useSidebarSrore = create<UseSidebarSroreType>()(
    devtools(
        (set) => ({
            isOpenOnMobile: false,
            openOnMobile: () => set({ isOpenOnMobile: true }),
            closeOnMobile: () => set({ isOpenOnMobile: false }),
            toggleOnMobile: () => set((state) => ({ isOpenOnMobile: !state.isOpenOnMobile }))
        }),
        { name: 'useSidebarSrore' }
    )
)
