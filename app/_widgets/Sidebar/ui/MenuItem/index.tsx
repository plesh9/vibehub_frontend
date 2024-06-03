import Link from 'next/link'
import type { IconsType } from '@shared/const/icons'
import classnames from '@shared/lib/classnames'
import { withDynamicComponent } from '@shared/lib/hocs'
import { useActivePathname } from '@shared/lib/hooks'
import Icon from '@shared/ui/Icon'
import s from './MenuItem.module.scss'

interface Props {
    as?: 'button' | typeof Link
    variant?: 'primary' | 'secondary'
    icon: IconsType
    href?: string
    loading?: boolean
}

const MenuItem = withDynamicComponent<Props, typeof Link>(({ variant = 'primary', icon, as: Component = Link, href = '', loading, ...restProps }): JSX.Element => {
    const isActive = useActivePathname(href)

    return (
        <Component className={classnames(s.main, s[variant], isActive && s.active, loading && s.loading)} href={href} {...restProps}>
            <Icon name={loading ? 'loading' : icon} />
        </Component>
    )
})

export default MenuItem
