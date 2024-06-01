'use client'
import type { FC } from 'react'
import { type ColorsType } from '@shared/const/colors'
import classnames from '@shared/lib/classnames'
import s from './LineHorizontal.module.scss'

interface Props {
    color?: ColorsType
}

const LineHorizontal: FC<Props> = ({ color = 'blue10p' }) => {
    return <div className={classnames(s.main, `background_${color}`)} />
}

export default LineHorizontal
