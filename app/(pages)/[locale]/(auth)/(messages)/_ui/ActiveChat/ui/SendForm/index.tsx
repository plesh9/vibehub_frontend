import EmojiPicker from 'emoji-picker-react'
import { useTranslations } from 'next-intl'
import { useState, type FC } from 'react'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import classnames from '@shared/lib/classnames'
import { useAutosizeTextarea } from '@shared/lib/hooks'
import { validationService } from '@shared/lib/services'
import { useUserStore } from '@shared/state'
import AttachWrapper from '@shared/ui/AttachWrapper'
import Button from '@shared/ui/Button'
import Space from '@shared/ui/Space'
import Textarea from '@shared/ui/Textarea'
import { useChatsStore } from '../../../../_state'
import EmojiButton from '../EmojiButton'
import s from './SendForm.module.scss'

interface FormType {
    message: string
}

const SendForm: FC = () => {
    const t = useTranslations('Messages')
    const userData = useUserStore((state) => state.userData!)
    const activeChat = useChatsStore((state) => state.chats.find((chat) => chat.id === state.activeChatId)!)
    const chatUser = activeChat.users.find((user) => user.id !== userData.id)!
    const sendMessage = useChatsStore((state) => state.sendMessage)
    const [isSending, setIsSending] = useState(false)
    const { register, handleSubmit, watch, getValues, setValue, reset } = useForm<FormType>()
    const textareaRef = useAutosizeTextarea(watch('message'))

    const handleSubmitForm: SubmitHandler<FormType> = (data) => {
        if (isSending) return

        setIsSending(true)
        sendMessage({
            chatId: activeChat.id,
            toUserId: chatUser.id,
            text: data.message
        })
            .then(() => reset())
            .finally(() => setIsSending(false))
    }

    return (
        <Space as='form' onSubmit={handleSubmit(handleSubmitForm)} className={s.main} direction='horizontal' align='end' gap={1}>
            <Textarea
                {...register('message', { required: 'required', validate: validationService.notOnlySpaces })}
                ref={(ref) => {
                    textareaRef.current = ref
                    register('message').ref(ref)
                }}
                onKeyDown={(event) => {
                    if (event.key === 'Enter' && !event.shiftKey) {
                        event.preventDefault()
                        handleSubmit(handleSubmitForm)()
                    }
                }}
                className={s.main_textarea}
                placeholder={t('typeMessage')}
            />
            <EmojiButton onEmojiClick={(e) => setValue('message', getValues('message') + e.emoji)} />
            {/* <AttachWrapper onUpload={(e) => {}}>
                <Button as='div' icon='attach' variant='transparent' size='small' />
            </AttachWrapper> */}
            <Button type='submit' icon='send' size='small' loading={isSending} />
        </Space>
    )
}

export default SendForm
