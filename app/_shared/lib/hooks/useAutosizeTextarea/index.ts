import { useEffect, useRef } from 'react'

interface OptionsType {
    min: number
    max: number
}

export const useAutosizeTextarea = (value: string, options?: OptionsType) => {
    const textareaRef = useRef<HTMLTextAreaElement | null>(null)
    const { min = 40, max = 200 } = options ?? {}

    useEffect(() => {
        const textArea = textareaRef.current

        if (!textArea) {
            return
        }

        textArea.style.height = '0px'

        const scrollHeight = textArea.scrollHeight

        textArea.style.height = `${Math.max(min, Math.min(scrollHeight, max))}px`
        textArea.style.overflowY = scrollHeight > max ? 'auto' : 'hidden'
    }, [textareaRef, value, min, max])

    return textareaRef
}
