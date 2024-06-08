export const routes = {
    login: '/login',
    register: '/register',

    messages: '/',
    users: '/users',
    settings: '/settings'
} as const
export type RoutesType = keyof typeof routes
