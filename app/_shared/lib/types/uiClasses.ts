const numbers = Array.from({ length: 100 }, (_, i) => i + 1)
const numbersAsString = numbers.map(String)
const percentNumbers = numbers.map((n) => `${n}p`)
const sizeTypes = [...numbers, ...numbersAsString, ...percentNumbers] as const

type SizeType = (typeof sizeTypes)[number]

const components = ['div', 'form', 'ul', 'li', 'nav', 'section', 'article', 'aside', 'header', 'footer', 'main'] as const

export type UiComponentType = (typeof components)[number]

const pointNumbers = Array.from({ length: 21 }, (_, i) => i)
const pointNumbersAsString = pointNumbers.map(String)
const pointTypes = [...pointNumbers, ...pointNumbersAsString] as const

type PointType = (typeof pointTypes)[number]

export interface BaseUiType {
    w?: SizeType
    maxW?: SizeType
    h?: SizeType
    radius?: PointType | 100 | '100'
    p?: PointType
    gap?: PointType
    direction?: 'horizontal' | 'vertical' | 'horizontal_reverse' | 'vertical_reverse'
    justify?: 'start' | 'end' | 'center' | 'between' | 'around'
    align?: 'start' | 'end' | 'center' | 'stretch'
    wrap?: 'wrap' | 'nowrap'
    display?: 'flex' | 'block' | 'none' | 'grid'
    cols?: 1 | 2 | 3 | 4 | '1' | '2' | '3' | '4'
    grow?: boolean
    textAlign?: 'left' | 'center' | 'right'
}

export type UiType<T = BaseUiType, F = {}> = {
    xxl?: T
    xl?: T
    lg?: T
    md?: T
    sm?: T
} & (T & F)

const isUiKey = (key: string): key is keyof BaseUiType => {
    return ['w', 'maxW', 'h', 'radius', 'p', 'gap', 'direction', 'justify', 'align', 'wrap', 'display', 'cols', 'grow'].includes(key)
}

const isBreakpointKey = (key: string): key is keyof UiType => {
    return ['xxl', 'xl', 'lg', 'md', 'sm'].includes(key)
}

export const extractUiProps = (props: Record<string, any>): [UiType, Record<string, any>] => {
    const uiProps: UiType = {}
    const componentProps: Record<string, any> = {}

    Object.keys(props).forEach((key) => {
        if (isUiKey(key) || isBreakpointKey(key)) {
            ;(uiProps as any)[key] = props[key]
        } else {
            componentProps[key] = props[key]
        }
    })

    return [uiProps, componentProps]
}
