import type { MessageType } from '@shared/api'

export const groupMessagesByDate = (messages: Array<MessageType>) => {
    return messages.reduce((acc: Record<string, Array<MessageType>>, messageData) => {
        const date = new Date(messageData.createdAt).toLocaleDateString('en-US')

        if (!acc[date]) {
            acc[date] = []
        }

        acc[date].push(messageData)

        return acc
    }, {})
}
