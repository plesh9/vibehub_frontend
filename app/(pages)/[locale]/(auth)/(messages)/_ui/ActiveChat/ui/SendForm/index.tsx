import EmojiPicker from 'emoji-picker-react'
import { useTranslations } from 'next-intl'
import { type FC } from 'react'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { useAutosizeTextarea } from '@shared/lib/hooks'
import { validationService } from '@shared/lib/services'
import Button from '@shared/ui/Button'
import Space from '@shared/ui/Space'
import Textarea from '@shared/ui/Textarea'
import AttachWrapper from '../../../../../../../../_shared/ui/AttachWrapper'
import s from './SendForm.module.scss'

interface FormType {
    message: string
}

const SendForm: FC = () => {
    const t = useTranslations('Messages')
    const { register, handleSubmit, watch, getValues, setValue } = useForm<FormType>()
    const textareaRef = useAutosizeTextarea(watch('message'))
    const handleSubmitForm: SubmitHandler<FormType> = (data) => {}

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
            <div className={s.emoji}>
                <Button className={s.emoji_button} icon='smile' variant='transparent' size='small' />
                <div className={s.emoji_picker}>
                    <EmojiPicker onEmojiClick={(e) => setValue('message', getValues('message') + e.emoji)} />
                </div>
            </div>
            <AttachWrapper onUpload={(e) => {}}>
                <Button as='div' icon='attach' variant='transparent' size='small' />
            </AttachWrapper>
            <Button type='submit' icon='send' size='small' />
        </Space>
    )
}

export default SendForm
