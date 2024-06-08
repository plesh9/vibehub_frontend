import type { ChangeEventHandler } from 'react'
import { useRef, type FC, type ReactNode } from 'react'

interface Props {
    onUpload: (files: Array<string>) => void
    children?: ReactNode
    multiple?: boolean
}

const AttachWrapper: FC<Props> = ({ children, onUpload, multiple }) => {
    const inputRef = useRef<HTMLInputElement>(null)

    const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return

        onUpload(Array.from(e.target.files).map((file) => URL.createObjectURL(file)))
    }

    return (
        <button onClick={() => inputRef.current?.click()} type='button'>
            {children}
            <input ref={inputRef} type='file' onChange={handleUpload} multiple={multiple} hidden />
        </button>
    )
}

export default AttachWrapper
