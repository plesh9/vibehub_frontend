import type { PropsWithChildren } from 'react'
import { AuthProvider, WebsocketProvider } from '@shared/providers'
import Space from '@shared/ui/Space'
import Header from '@widgets/Header'
import { Sidebar } from '@widgets/Sidebar'

const layout = async ({ children }: PropsWithChildren) => {
    return (
        <AuthProvider>
            <WebsocketProvider />
            <Space className='sidebar-layout'>
                <Header />
                <Sidebar />
                {children}
            </Space>
        </AuthProvider>
    )
}

export default layout
