export const formatChatMessageDate = (date: Date) => {
    return date
        .toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: false
        })
        .replace(/AM|PM/gi, '')
        .trim()
}
