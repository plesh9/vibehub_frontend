import type { StaticImageData } from 'next/image'
import Image from 'next/image'
import type { FC, ReactNode } from 'react'
import Text from '../Typography'
import EmptyFolder from './assets/empty-table-folder.svg'
import s from './NoData.module.scss'

export interface Props {
    image?: string | StaticImageData
    title?: string
    subtitle?: string | boolean
    children?: ReactNode
}

const NoData: FC<Props> = ({ image = EmptyFolder, title = 'No results', subtitle = 'There are no data', children }) => {
    return (
        <div className={s.main}>
            <div className={s.main_box}>
                <Image src={image} alt='no-data' width={68} height={68} />
                <Text size='20' laptopSize='16' weight='500' align='center'>
                    {title}
                </Text>
                {subtitle && (
                    <Text className={s.main_subtitle} laptopSize='12' align='center'>
                        {subtitle}
                    </Text>
                )}
            </div>
            {children}
        </div>
    )
}

export default NoData
