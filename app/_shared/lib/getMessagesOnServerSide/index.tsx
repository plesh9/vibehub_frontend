import { notFound } from 'next/navigation'

const getMessagesOnServerSide = async (locale: string = 'en'): Promise<{ messages: Record<string, any> }> => {
    try {
        const messages = (await import(`/app/(app)/_config/i18n/messages/${locale}.json`)).default

        if (!messages) {
            notFound()
        }

        return messages
    } catch {
        notFound()
    }
}

export default getMessagesOnServerSide
