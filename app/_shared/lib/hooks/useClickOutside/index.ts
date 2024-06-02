import { type MutableRefObject, useEffect, useRef } from 'react'

export const useClickOutside = (onClick?: (open: boolean) => void): MutableRefObject<any> => {
    const ref = useRef<HTMLElement | null>(null)

    useEffect(() => {
        const handleClick = (event: Event) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                onClick?.(false)
            }
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (ref.current && event.key === 'Escape') {
                onClick?.(false)
            }
        }

        document.addEventListener('click', handleClick, true)
        document.addEventListener('keydown', handleKeyDown, true)

        return () => {
            document.removeEventListener('click', handleClick, true)
            document.removeEventListener('keydown', handleKeyDown, true)
        }
    }, [ref, onClick])

    return ref
}
