import type { FC } from 'react'
import type { TextPropsType } from '../Text'
import { Text } from '../Text'

interface Props extends TextPropsType {
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export const Title: FC<Props> = ({ variant = 'h1', children, ...restProps }) => {
    return (
        <Text as={variant} {...restProps}>
            {children}
        </Text>
    )
}
