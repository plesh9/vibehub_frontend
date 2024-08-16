import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import debounce from '@shared/lib/utils/debounce'
import { EMOJIES } from '../../const'
import type { EmojiTabType, EmojiType } from '../../types'

interface OptionsType {
    onEmojiClick?: (emoji: EmojiType) => void
}

const SCROLL_DEBOUNCE = 50
const MAX_RECENT_EMOJIES = 40

export const useEmojiPicker = ({ onEmojiClick }: OptionsType) => {
    const [search, setSearch] = useState('')
    const [activeTab, setActiveTab] = useState<EmojiTabType | null>('RECENT')
    const [recentEmojies, setRecentEmojies] = useState<Array<EmojiType>>(JSON.parse(localStorage.getItem('recentEmojies') || '[]').slice(0, MAX_RECENT_EMOJIES))
    const emogiesContainerRef = useRef<HTMLDivElement | null>(null)
    const emogiesHeaderRefs = useRef<Record<EmojiTabType, HTMLDivElement> | Record<string, never>>({})
    const hasRecentEmojies = recentEmojies.length > 0
    const emojiEntries: [EmojiTabType, EmojiType[]][] = useMemo(() => {
        return Object.entries(EMOJIES).map(([emojiType, emojiArray]: [EmojiTabType, EmojiType[]]) => {
            let filteredEmojies: EmojiType[] = emojiArray

            if (emojiType === 'RECENT') {
                filteredEmojies = recentEmojies
            }

            if (search) {
                filteredEmojies = []
                filteredEmojies = emojiArray.filter((emojiData) => emojiData.names.some((name) => name.toLowerCase().includes(search.toLowerCase())))
            }

            return [emojiType, filteredEmojies] as const
        })
    }, [search, recentEmojies])

    const handleSetActiveTab = useCallback((tab: EmojiTabType) => {
        if (!emogiesContainerRef.current || !emogiesHeaderRefs.current[tab]) {
            return
        }

        const container = emogiesContainerRef.current
        const parentHeaderElement = emogiesHeaderRefs.current[tab]?.parentElement

        if (!parentHeaderElement) {
            return
        }

        setActiveTab(tab)
        container.scrollTo({
            top: parentHeaderElement.offsetTop - container.offsetTop + 0.5,
            behavior: 'smooth'
        })
    }, [])

    const handleEmojiClick = useCallback(
        (emoji: EmojiType) => {
            setRecentEmojies((prev) => {
                const filteredEmojies = prev.filter((recentEmoji) => recentEmoji.emoji !== emoji.emoji)
                const newRecentEmojies = [emoji, ...filteredEmojies].slice(0, MAX_RECENT_EMOJIES)

                localStorage.setItem('recentEmojies', JSON.stringify(newRecentEmojies))

                return newRecentEmojies
            })
            onEmojiClick?.(emoji)
        },
        [onEmojiClick]
    )

    useEffect(() => {
        if (!emogiesContainerRef.current) {
            return
        }

        const handleScroll = debounce(() => {
            const container = emogiesContainerRef.current!

            const containerTop = container.getBoundingClientRect().top
            let newActiveTab: EmojiTabType | null = null

            for (const [emojiType] of emojiEntries) {
                const headerElement = emogiesHeaderRefs.current && emogiesHeaderRefs.current[emojiType]

                if (!headerElement) {
                    continue
                }

                const headerRect = headerElement.getBoundingClientRect()

                if (headerRect.top <= containerTop && headerRect.bottom > containerTop) {
                    newActiveTab = emojiType as EmojiTabType
                    break
                }
            }

            if (!newActiveTab) {
                setActiveTab(null)
            }

            if (newActiveTab !== activeTab) {
                setActiveTab(newActiveTab)
            }
        }, SCROLL_DEBOUNCE)

        const container = emogiesContainerRef.current

        container.addEventListener('scroll', handleScroll)
        handleScroll()

        return () => {
            container.removeEventListener('scroll', handleScroll)
        }
    }, [activeTab, emojiEntries, setActiveTab, emogiesContainerRef, emogiesHeaderRefs])

    return {
        search,
        setSearch,
        activeTab,
        setActiveTab,
        handleSetActiveTab,
        emogiesContainerRef,
        emogiesHeaderRefs,
        recentEmojies,
        hasRecentEmojies,
        handleEmojiClick,
        emojiEntries
    }
}
