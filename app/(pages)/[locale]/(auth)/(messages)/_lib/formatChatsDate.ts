export const formatChatsDate = (date: Date) => {
    const currentDate = new Date()
    const isToday = currentDate.getFullYear() === date.getFullYear() && currentDate.getMonth() === date.getMonth() && currentDate.getDate() === date.getDate()
    const isThisYear = date.getFullYear() === currentDate.getFullYear()

    if (isToday) {
        return date
            .toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: false
            })
            .replace(/AM|PM/gi, '')
            .trim()
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
