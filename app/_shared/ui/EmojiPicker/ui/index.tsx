'use client'
import { memo, type FC } from 'react'
import classnames from '@shared/lib/classnames'
import Space from '@shared/ui/Space'
import { useEmojiPicker, type EmojiType } from '../lib'
import EmojiContent from './EmojiContent'
import s from './EmojiPicker.module.scss'
import EmojiSearch from './EmojiSearch'
import EmojiTabs from './EmojiTabs'

export interface EmojiPickerPropsType {
    onEmojiClick?: (emoji: EmojiType) => void
    className?: string
}

const EmojiPicker: FC<EmojiPickerPropsType> = ({ onEmojiClick, className }) => {
    const { search, setSearch, activeTab, handleSetActiveTab, emogiesContainerRef, emogiesHeaderRefs, hasRecentEmojies, emojiEntries, handleEmojiClick } = useEmojiPicker({ onEmojiClick })

    return (
        <Space className={classnames(s.main, className)} direction='vertical'>
            <EmojiSearch search={search} setSearch={setSearch} />
            <EmojiTabs search={search} activeTab={activeTab} setActiveTab={handleSetActiveTab} hasRecentEmojies={hasRecentEmojies} />
            <EmojiContent emojiEntries={emojiEntries} onEmojiClick={handleEmojiClick} emogiesContainerRef={emogiesContainerRef} emogiesHeaderRefs={emogiesHeaderRefs} />
        </Space>
    )
}

export default memo(EmojiPicker)
