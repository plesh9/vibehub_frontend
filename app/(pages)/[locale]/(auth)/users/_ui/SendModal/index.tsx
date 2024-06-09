import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useState, type FC } from 'react'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { routes } from '@shared/const/routes'
import { validationService } from '@shared/lib/services'
import Button from '@shared/ui/Button'
import Modal, { MODAL_DURATION } from '@shared/ui/Modal'
import Space from '@shared/ui/Space'
import Textarea from '@shared/ui/Textarea'
import { Accent } from '@shared/ui/Typography'
import { useUsersStore } from '../../_state'

interface FormType {
    message: string
}

const SendModal: FC = () => {
    const t = useTranslations('Users.SendModal')
    const router = useRouter()
    const [isSending, setIsSending] = useState(false)
    const sendMessage = useUsersStore((state) => state.sendMessage)
    const modalData = useUsersStore((state) => state.modalData)
    const {
        register,
        handleSubmit,
        reset,
        clearErrors,
        formState: { errors }
    } = useForm<FormType>()
    const handleSendMessage: SubmitHandler<FormType> = ({ message }) => {
        sendMessage({ toUserId: modalData.user?.id!, text: message }, setIsSending).then(() => router.push(routes.messages))
    }
    const close = () => {
        useUsersStore.setState((state) => ({ modalData: { ...state.modalData, isOpen: false } }))
        setTimeout(() => {
            clearErrors()
            reset()
        }, MODAL_DURATION)
    }

    return (
        <Modal isOpen={!!modalData.isOpen} close={close}>
            <Modal.Header>
                <Modal.Title>
                    {t('title')} <Accent>{modalData.user?.name}</Accent>
                </Modal.Title>
                <Modal.Description>{t('description')}</Modal.Description>
            </Modal.Header>
            <Space as='form' onSubmit={handleSubmit(handleSendMessage)} direction='vertical' gap={6}>
                <Textarea
                    {...register('message', { required: t('messageRequired'), validate: validationService.notOnlySpaces })}
                    onKeyDown={(event) => {
                        if (event.key === 'Enter' && !event.shiftKey) {
                            event.preventDefault()
                            handleSubmit(handleSendMessage)()
                        }
                    }}
                    label={t('message')}
                    placeholder={t('messagePlaceholder')}
                    error={errors.message?.message}
                />
                <Space direction='horizontal' align='center' gap={4}>
                    <Button variant='secondary' onClick={close} wide>
                        {t('cancel')}
                    </Button>
                    <Button type='submit' loading={isSending} wide>
                        {t('send')}
                    </Button>
                </Space>
            </Space>
        </Modal>
    )
}

export default SendModal
