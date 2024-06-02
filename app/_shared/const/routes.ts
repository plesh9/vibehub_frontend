export const routes = {
    login: '/login',
    register: '/register',

    messages: '/'
} as const
export type RoutesType = keyof typeof routes
