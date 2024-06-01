import type { FC } from 'react'
import Spinner from '@shared/ui/Spinner'
import s from './PageLoader.module.scss'

const PageLoader: FC = () => {
    return (
        <div className={s.main}>
            <Spinner size='24' color='green500' />
        </div>
    )
}

export default PageLoader
