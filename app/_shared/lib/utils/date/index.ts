export const formatToLocaleDate = (date: Date, withLast24Hours = true): string => {
    const currentDate = new Date()
    const twentyFourHoursAgo = new Date(currentDate)

    twentyFourHoursAgo.setHours(currentDate.getHours() - 24)

    const isLast24Hours = twentyFourHoursAgo <= date
    const isThisYear = date.getFullYear() === currentDate.getFullYear()

    if (withLast24Hours && isLast24Hours) {
        return date.toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        })
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
