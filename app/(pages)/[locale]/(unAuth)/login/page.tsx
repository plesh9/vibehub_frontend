'use client'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useState, type FC } from 'react'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { routes } from '@shared/const/routes'
import { validationService } from '@shared/lib/services'
import { useAuthStore } from '@shared/state'
import Button from '@shared/ui/Button'
import Dialog from '@shared/ui/Dialog'
import Input from '@shared/ui/Input'
import PasswordInput from '@shared/ui/PasswordInput'
import Space from '@shared/ui/Space'

interface FormType {
    email: string
    password: string
}

const page: FC = () => {
    const t = useTranslations()
    const [isLoading, setIsLoading] = useState(false)
    const login = useAuthStore((state) => state.login)
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormType>()

    const onSubmit: SubmitHandler<FormType> = (data) => login(data, setIsLoading)

    return (
        <Space className='unAuth-layout'>
            <Dialog>
                <Dialog.Header>
                    <Dialog.Title>{t('Login.title')}</Dialog.Title>
                    <Dialog.Description>{t('Login.description')}</Dialog.Description>
                </Dialog.Header>
                <Space as='form' onSubmit={handleSubmit(onSubmit)} direction='vertical' gap={6}>
                    <Space direction='vertical' gap={4}>
                        <Input
                            {...register('email', { required: t('Validation.emailRequired'), pattern: validationService.getEmailPattern() })}
                            label={t('Validation.email')}
                            placeholder={t('Validation.emailPlaceholder')}
                            error={errors.email?.message}
                            type='email'
                        />
                        <PasswordInput
                            {...register('password', {
                                required: t('Validation.passwordRequired'),
                                minLength: {
                                    value: 8,
                                    message: t('Validation.passwordMinLength')
                                },
                                maxLength: {
                                    value: 20,
                                    message: t('Validation.passwordMaxLength')
                                }
                            })}
                            label={t('Validation.password')}
                            placeholder={t('Validation.passwordPlaceholder')}
                            error={errors.password?.message}
                        />
                    </Space>
                    <Space direction='vertical' gap={4}>
                        <Button loading={isLoading} type='submit' wide>
                            {t('Login.login')}
                        </Button>
                        <Space direction='vertical' align='center' textAlign='center'>
                            {t('Login.dontHaveAccount')}
                            <Button as={Link} variant='link' href={routes.register}>
                                {t('Login.register')}
                            </Button>
                        </Space>
                    </Space>
                </Space>
            </Dialog>
        </Space>
    )
}

export default page
