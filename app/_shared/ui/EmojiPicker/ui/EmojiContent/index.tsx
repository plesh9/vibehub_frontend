import type { MutableRefObject } from 'react'
import { type FC } from 'react'
import LineHorizontal from '@shared/ui/LineHorizontal'
import Space from '@shared/ui/Space'
import Text from '@shared/ui/Typography'
import type { EmojiTabType, EmojiType } from '../../lib'
import { EMOJI_TAB_TITLES } from '../../lib'
import s from './EmojiContent.module.scss'

interface Props {
    emojiEntries: [EmojiTabType, EmojiType[]][]
    emogiesContainerRef: MutableRefObject<HTMLDivElement | null>
    emogiesHeaderRefs: MutableRefObject<Record<EmojiTabType, HTMLDivElement | null> | Record<string, never>>
    onEmojiClick: (emoji: EmojiType) => void
}

const EmojiContent: FC<Props> = ({ emojiEntries, emogiesContainerRef, emogiesHeaderRefs, onEmojiClick }) => {
    return (
        <Space className={s.main} direction='vertical' grow>
            <div className={s.container} ref={emogiesContainerRef}>
                {emojiEntries.map(([emojiType, emojiArray], index) => {
                    const isLast = index === emojiEntries.length - 1

                    if (!emojiArray.length) {
                        return null
                    }

                    return (
                        <Space direction='vertical' key={emojiType}>
                            <div
                                className={s.header}
                                ref={(ref) => {
                                    emogiesHeaderRefs.current[emojiType] = ref
                                }}
                            >
                                <Text weight='500' align='left'>
                                    {EMOJI_TAB_TITLES[emojiType]}
                                </Text>
                            </div>
                            <Space className={s.emojies}>
                                {emojiArray.map((emojiData: EmojiType, index) => (
                                    <button onClick={() => onEmojiClick(emojiData)} className={s.emoji} key={index} type='button'>
                                        {emojiData.emoji}
                                    </button>
                                ))}
                            </Space>
                            {!isLast && <LineHorizontal />}
                        </Space>
                    )
                })}
            </div>
        </Space>
    )
}

export default EmojiContent
