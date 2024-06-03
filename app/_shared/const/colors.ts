export const colors = {
    white100: 'white100',

    // Black
    black10p: 'black10p',
    black45p: 'black45p',
    black100: 'black100',

    // Blue
    blue500: 'blue500',

    // Green
    green500: 'green500',

    // Red
    red500: 'red500'
} as const
export type ColorsType = (typeof colors)[keyof typeof colors]
