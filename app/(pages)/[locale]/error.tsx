'use client'
import Space from '@shared/ui/Space'

const index = ({ error, reset }: { error: Error; reset: () => void }) => {
    return (
        <Space className='min_h100p' gap='4' align='center' justify='center' grow>
            <h1>{error.message}</h1>
            <button onClick={reset} type='button'>
                Reset
            </button>
        </Space>
    )
}

export default index
