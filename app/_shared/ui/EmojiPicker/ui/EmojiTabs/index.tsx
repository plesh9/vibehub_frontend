import type { FC } from 'react'
import classnames from '@shared/lib/classnames'
import Icon from '@shared/ui/Icon'
import LineHorizontal from '@shared/ui/LineHorizontal'
import Space from '@shared/ui/Space'
import type { EmojiTabType } from '../../lib'
import { EMOJI_TABS } from '../../lib'
import s from './EmojiTabs.module.scss'

interface Props {
    search?: string
    activeTab: EmojiTabType | null
    setActiveTab: (tab: EmojiTabType) => void
    hasRecentEmojies: boolean
}

const EmojiTabs: FC<Props> = ({ search, activeTab, setActiveTab, hasRecentEmojies }) => {
    return (
        <Space>
            <Space className={s.main} direction='horizontal' align='center' p={4}>
                {EMOJI_TABS.map((tab) => {
                    if (!tab.type || (tab.type === 'RECENT' && !hasRecentEmojies)) {
                        return null
                    }

                    return (
                        <button onClick={() => setActiveTab(tab.type)} className={classnames(s.tab, activeTab === tab.type && s.active)} disabled={!!search && search.length >= 1} key={tab.type} type='button'>
                            <Icon name={tab.icon} />
                        </button>
                    )
                })}
            </Space>
            <LineHorizontal />
        </Space>
    )
}

export default EmojiTabs
