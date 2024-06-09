import type { FC } from 'react'
import Space from '../Space'
import type { SpinnerPropsType } from '../Spinner'
import Spinner from '../Spinner'

interface Props extends SpinnerPropsType {}

const Loader: FC<Props> = ({ size = '24', color = 'blue500', ...rest }) => {
    return (
        <Space direction='vertical' align='center' justify='center' p={5} grow>
            <Spinner size={size} color={color} {...rest} />
        </Space>
    )
}

export default Loader
