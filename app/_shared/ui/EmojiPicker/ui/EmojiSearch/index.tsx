import type { FC } from 'react'
import Search from '@shared/ui/Search'
import Space from '@shared/ui/Space'
import s from './EmojiSearch.module.scss'

interface Props {
    search: string
    setSearch: (search: string) => void
}

const EmojiSearch: FC<Props> = ({ search, setSearch }) => {
    return (
        <Space className={s.main}>
            <Search className={s.search} value={search} setValue={setSearch} />
        </Space>
    )
}

export default EmojiSearch
