import { useState, type FC } from 'react'
import classnames from '@shared/lib/classnames'
import { useClickOutside } from '@shared/lib/hooks'
import Button from '@shared/ui/Button'
import type { EmojiType } from '@shared/ui/EmojiPicker'
import EmojiPicker from '@shared/ui/EmojiPicker'
import s from './EmojiButton.module.scss'

interface Props {
    onEmojiClick: (e: EmojiType) => void
}

const EmojiButton: FC<Props> = ({ onEmojiClick }) => {
    const [isOpen, setIsOpen] = useState(false)
    const close = () => setIsOpen(false)
    const toggle = () => setIsOpen((prev) => !prev)
    const emojiRef = useClickOutside(close)

    return (
        <div className={classnames(s.main, isOpen && s.open)} ref={emojiRef}>
            <Button className={s.main_button} onClick={toggle} icon='smile' variant='transparent' size='small' />
            <div className={s.main_picker}>
                <EmojiPicker onEmojiClick={onEmojiClick} />
            </div>
        </div>
    )
}

export default EmojiButton
