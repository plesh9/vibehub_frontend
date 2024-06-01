import type { FC, SVGProps } from 'react'
import type { ColorsType } from '@shared/const/colors'
import { icons, type IconsType } from '@shared/const/icons'
import classnames from '@shared/lib/classnames'

interface Props extends SVGProps<SVGSVGElement> {
    name: IconsType
    color?: ColorsType
}

const Icon: FC<Props> = ({ name, color, className, ...svgProps }) => {
    const Svg = icons[name]

    return <Svg className={classnames(color && `color_${color}`, className)} {...svgProps} />
}

export default Icon
