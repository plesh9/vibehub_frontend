import type { ValidationRule } from 'react-hook-form'
import { getTranslations } from '@shared/providers'

interface ValidationServiceType {
    getEmailPattern: () => ValidationRule<RegExp>
    notOnlySpaces: (value: string) => boolean | string
}

export const validationService: ValidationServiceType = {
    getEmailPattern: () => {
        const t = getTranslations('Validation')

        return {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: t('emailInvalid')
        }
    },
    notOnlySpaces: (value) => {
        const t = getTranslations('Validation')

        return value.trim().length > 0 || t('invalidField')
    }
}
