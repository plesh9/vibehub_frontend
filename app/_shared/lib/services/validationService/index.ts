import { useTranslations } from 'next-intl'
import type { ValidationRule } from 'react-hook-form'

interface ValidationServiceType {
    getEmailPattern: () => ValidationRule<RegExp>
    notOnlySpaces: (value: string) => boolean | string
}

export const validationService: ValidationServiceType = {
    getEmailPattern: () => {
        const t = useTranslations('Validation')

        return {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: t('emailInvalid')
        }
    },
    notOnlySpaces: (value) => {
        const t = useTranslations('Validation')

        return value.trim().length > 0 || t('invalidField')
    }
}
