import { lazy, Suspense } from 'react'
import s from './ui/EmojiPicker.module.scss'
import type { EmojiPickerPropsType } from './ui/index'

const LazyEmojiPicker = lazy(() => import('./ui/index'))
const EmojiPicker = (props: EmojiPickerPropsType) => (
    <Suspense fallback={<div className={s.main} />}>
        <LazyEmojiPicker {...props} />
    </Suspense>
)

export type { EmojiPickerPropsType }
export type { EmojiTabType, EmojiType } from './lib/types'
export default EmojiPicker
