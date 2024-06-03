export const routes = {
    login: '/login',
    register: '/register',

    messages: '/',
    settings: '/settings'
} as const
export type RoutesType = keyof typeof routes
