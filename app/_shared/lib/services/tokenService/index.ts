import Cookies from 'js-cookie'

interface TokenServiceType {
    getToken: () => string | undefined
    setToken: (token?: string) => void
}

export const tokenService: TokenServiceType = {
    getToken: () => Cookies.get('accessToken'),
    setToken: (token) => (token ? Cookies.set('accessToken', token, { expires: new Date(Date.now() + 1000 * 60 * 30) }) : Cookies.remove('accessToken'))
}
