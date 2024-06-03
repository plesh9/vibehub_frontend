import { isAxiosError } from 'axios'
import { Alert } from '@shared/state'

export const handleError = (error: any) => {
    const message = isAxiosError(error) ? error.response?.data.message : error.message || 'An error occurred. Please try again.'

    Alert('error', message)
    throw new Error(error)
}
