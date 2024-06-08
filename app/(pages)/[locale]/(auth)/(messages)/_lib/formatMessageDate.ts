import { getTranslations } from '@shared/providers'

export const formatMessageDate = (date: Date) => {
    const currentDate = new Date()
    const isToday = currentDate.getFullYear() === date.getFullYear() && currentDate.getMonth() === date.getMonth() && currentDate.getDate() === date.getDate()
    const isThisYear = date.getFullYear() === currentDate.getFullYear()
    const t = getTranslations('Messages')

    if (isToday) {
        return t('today')
    }

    if (isThisYear) {
        return date.toLocaleString('en-US', {
            month: 'short',
            day: 'numeric'
        })
    }

    return date.toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    })
}
