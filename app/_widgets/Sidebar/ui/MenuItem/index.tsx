import Link from 'next/link'
import type { MouseEvent, ReactNode } from 'react'
import type { IconsType } from '@shared/const/icons'
import classnames from '@shared/lib/classnames'
import { withDynamicComponent } from '@shared/lib/hocs'
import { useActivePathname } from '@shared/lib/hooks'
import { useSidebarSrore } from '@shared/state'
import Icon from '@shared/ui/Icon'
import Space from '@shared/ui/Space'
import Text from '@shared/ui/Typography'
import s from './MenuItem.module.scss'

interface Props {
    as?: 'button' | typeof Link
    variant?: 'primary' | 'secondary'
    icon?: IconsType
    children?: ReactNode
    href?: string
    loading?: boolean
    onCLick?: (e: MouseEvent<HTMLButtonElement> | MouseEvent<HTMLAnchorElement>) => void
    title?: string
}

const MenuItem = withDynamicComponent<Props, typeof Link>(({ variant = 'primary', icon, as: Component = Link, href, loading, children, title, onCLick, ...restProps }): JSX.Element => {
    const isActive = useActivePathname(href)
    const closeOnMobile = useSidebarSrore((state) => state.closeOnMobile)

    return (
        <Component
            className={classnames(s.main, s[variant], isActive && s.active, loading && s.loading)}
            title={title}
            href={href as string}
            onClick={(e) => {
                closeOnMobile()
                onCLick?.(e)
            }}
            {...restProps}
        >
            <Space className={s.icon}>{loading ? <Icon name='loading' /> : icon ? <Icon name={icon} /> : children}</Space>
            {title && (
                <Space display='none' lg={{ display: 'block' }}>
                    <Text as='span'>{title}</Text>
                </Space>
            )}
        </Component>
    )
})

export default MenuItem
