import type { PropsWithChildren } from 'react'
import { AuthProvider } from '@shared/providers'
import Space from '@shared/ui/Space'
import { Sidebar } from '@widgets/Sidebar'

const layout = async ({ children }: PropsWithChildren) => {
    return (
        <AuthProvider>
            <Space className='sidebar-layout'>
                <Sidebar />
                {children}
            </Space>
        </AuthProvider>
    )
}

export default layout
