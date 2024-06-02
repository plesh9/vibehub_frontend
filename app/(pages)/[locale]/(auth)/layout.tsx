import type { PropsWithChildren } from 'react'
import { AuthProvider } from '@shared/providers'

const layout = async ({ children }: PropsWithChildren) => {
    return <AuthProvider>{children}</AuthProvider>
}

export default layout
