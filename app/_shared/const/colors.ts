export const colors = {
    white100: 'white100',

    // Black
    black45p: 'black45p',
    black100: 'black100',

    // Blue
    blue500: 'blue500',

    // Green
    green500: 'green500'
} as const
export type ColorsType = (typeof colors)[keyof typeof colors]
