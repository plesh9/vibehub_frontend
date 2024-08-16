'use client'
import type { ComponentPropsWithoutRef, ComponentType, ReactNode } from 'react'
import type { ColorsType } from '@shared/const/colors'
import classnames from '@shared/lib/classnames'
import s from './Text.module.scss'

export type TextWeightType = '400' | '500' | '600' | '700'
export type TextSizeType = '10' | '12' | '14' | '16' | '18' | '20' | '22' | '24' | '26' | '28' | '32' | '52' | '64'
export type TextAlignType = 'center' | 'left' | 'right'
export type TextLineHeightType = '100' | '110' | '120' | '130' | '140' | '150'
export interface TextPropsType {
    children?: ReactNode
    weight?: TextWeightType
    size?: TextSizeType
    laptopSize?: TextSizeType
    lineHeight?: TextLineHeightType
    align?: 'left' | 'center' | 'right'
    color?: ColorsType
    className?: string
    noWrap?: boolean
}
type TextElementType = 'div' | 'p' | 'a' | 'span' | 'label' | 'li' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
type AdditionalTextPropsType<T extends TextElementType | ComponentType> = T extends keyof JSX.IntrinsicElements ? JSX.IntrinsicElements[T] : ComponentPropsWithoutRef<T>
type Props<T extends TextElementType | ComponentType> = {
    as?: T
} & TextPropsType &
    AdditionalTextPropsType<T>

export const Text = <T extends TextElementType | ComponentType<any> = 'p'>({ as, children, size, weight, lineHeight, color, align, noWrap, className, laptopSize, ...restProps }: Props<T>) => {
    const Component = as || 'p'

    return (
        <Component
            className={classnames(
                size && s[`size${size}`],
                weight && s[`weight${weight}`],
                lineHeight && s[`lineHeight${lineHeight}`],
                laptopSize && s[`laptopSize${laptopSize}`],
                color && `color_${color}`,
                align && `text_${align}`,
                noWrap && 'nowrap',
                className
            )}
            {...restProps}
        >
            {children}
        </Component>
    )
}
