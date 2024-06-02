'use client'
import { useTranslations } from 'next-intl'
import type { FC } from 'react'

let t = (key: string) => key

export const getTranslations = (baseKey: string) => {
    return (key = '') => t(baseKey ? `${baseKey}.${key}` : key)
}

export const TranslationProvider: FC = () => {
    const translations = useTranslations()

    t = translations

    return null
}
