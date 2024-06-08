import type { FC, PropsWithChildren } from 'react'

const layout: FC<PropsWithChildren> = ({ children }) => {
    return <div className='flex-layout'>{children}</div>
}

export default layout
