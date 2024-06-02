import { cookies } from 'next/headers'
import type { LoginResponseType } from '@shared/api'
import { apiService } from '../services'

export const getUserOnServerSide = async () => {
    try {
        let response = await fetch(apiService.getUrl('/auth/me'), {
            headers: {
                Authorization: `Bearer ${cookies().get('accessToken')?.value}`
            }
        })

        if (response.status === 401) {
            response = await fetch(apiService.getUrl('/auth/refresh'), {
                headers: {
                    Authorization: `Bearer ${cookies().get('accessToken')?.value}`
                }
            })
        }

        if (!response.ok) {
            return null
        }

        const data: LoginResponseType = await response.json()

        if (!data.user.id) {
            return null
        }

        return data
    } catch (error) {
        return null
    }
}
