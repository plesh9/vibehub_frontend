import type { PropsWithChildren } from 'react'
import { UnAuthProvider } from '@shared/providers'

const layout = async ({ children }: PropsWithChildren) => {
    return <UnAuthProvider>{children}</UnAuthProvider>
}

export default layout
