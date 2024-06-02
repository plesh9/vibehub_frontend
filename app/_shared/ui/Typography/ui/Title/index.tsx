import type { FC } from 'react'
import type { TextPropsType } from '../Text'
import { Text } from '../Text'

export interface TitlePropsType extends TextPropsType {
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const sizeMap = {
    h1: '28',
    h2: '24',
    h3: '20',
    h4: '18',
    h5: '16',
    h6: '14'
} as const

const lineHeightMap = {
    h1: '100',
    h2: '100',
    h3: '100',
    h4: '100',
    h5: '130',
    h6: '130'
} as const

export const Title: FC<TitlePropsType> = ({ variant = 'h1', weight = '500', lineHeight, size, children, ...restProps }) => {
    return (
        <Text as={variant} size={size || sizeMap[variant]} weight={weight} lineHeight={lineHeight || lineHeightMap[variant]} {...restProps}>
            {children}
        </Text>
    )
}
