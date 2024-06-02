import { useEffect, type FC } from 'react'
import { scrollService } from '@shared/lib/services'

interface Props {
    isOpen: boolean
}

const ScrollLock: FC<Props> = ({ isOpen }) => {
    useEffect(() => {
        ;(isOpen ? scrollService.lock : scrollService.unlock)()

        return () => scrollService.unlock()
    }, [isOpen])

    return null
}

export default ScrollLock
