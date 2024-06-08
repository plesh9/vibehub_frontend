import type { FC } from 'react'
import Icon from '../Icon'
import Spinner from '../Spinner'

interface Props {
    isRead: boolean
    isLoading?: boolean
}

const ReadStatus: FC<Props> = ({ isRead, isLoading }) => {
    return isLoading ? <Spinner color='black45p' /> : <Icon name={isRead ? 'doubleCheck' : 'check'} width={16} height={16} color='green500' />
}

export default ReadStatus
