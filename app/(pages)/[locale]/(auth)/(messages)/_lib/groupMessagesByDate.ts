export const groupMessagesByDate = (messages: Array<any>) => {
    return messages.reduce((acc: Record<string, Array<any>>, messageData) => {
        const date = new Date(messageData.createdAt).toLocaleDateString('en-US')

        if (!acc[date]) {
            acc[date] = []
        }

        acc[date].push(messageData)

        return acc
    }, {})
}
