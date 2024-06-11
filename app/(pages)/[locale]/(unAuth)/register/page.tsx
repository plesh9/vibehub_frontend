'use client'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useState, type FC } from 'react'
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
    name: string
    password: string
    confirmPassword: string
}

const page: FC = () => {
    const t = useTranslations()
    const [isLoading, setIsLoading] = useState(false)
    const registerUser = useAuthStore((state) => state.register)
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm<FormType>()

    return (
        <Space className='unAuth-layout'>
            <Dialog>
                <Dialog.Header>
                    <Dialog.Title>{t('Register.title')}</Dialog.Title>
                    <Dialog.Description>{t('Register.description')}</Dialog.Description>
                </Dialog.Header>
                <Space as='form' onSubmit={handleSubmit(({ confirmPassword, ...data }) => registerUser(data, setIsLoading))} direction='vertical' gap={6}>
                    <Space direction='vertical' gap={4}>
                        <Input
                            {...register('email', { required: t('Validation.emailRequired'), pattern: validationService.getEmailPattern() })}
                            label={t('Validation.email')}
                            placeholder={t('Validation.emailPlaceholder')}
                            error={errors.email?.message}
                            type='email'
                        />
                        <Input
                            {...register('name', { required: t('Validation.nameRequired'), minLength: { value: 3, message: t('Validation.nameMinLength') }, validate: validationService.notOnlySpaces })}
                            label={t('Validation.name')}
                            placeholder={t('Validation.namePlaceholder')}
                            error={errors.name?.message}
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
                        <PasswordInput
                            {...register('confirmPassword', {
                                required: t('Validation.confirmPasswordRequired'),
                                validate: (value) => value === watch('password') || t('Validation.passwordsMustMatch')
                            })}
                            label={t('Validation.confirmPassword')}
                            placeholder={t('Validation.confirmPasswordPlaceholder')}
                            error={errors.confirmPassword?.message}
                        />
                    </Space>

                    <Space direction='vertical' gap={4}>
                        <Button loading={isLoading} type='submit' wide>
                            {t('Register.register')}
                        </Button>
                        <Space direction='vertical' align='center' textAlign='center'>
                            {t('Register.alreadyHaveAccount')}
                            <Button as={Link} variant='link' href={routes.login}>
                                {t('Register.login')}
                            </Button>
                        </Space>
                    </Space>
                </Space>
            </Dialog>
        </Space>
    )
}

export default page
