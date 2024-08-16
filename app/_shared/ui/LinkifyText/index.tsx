import Link from 'next/link'
import { Fragment, type FC } from 'react'

interface Props {
    children?: string
    className?: string
}

const LinkifyText: FC<Props> = ({ children, className }) => {
    const urlRegex = /https?:\/\/[^\s/$.?#].[^\s]*/g

    if (!children) {
        return null
    }

    if (!urlRegex.test(children)) {
        return children
    }

    return children.split(urlRegex).map((segment, index, segmentsArray) => {
        if (index === segmentsArray.length - 1) {
            return segment
        }

        const match = children.match(urlRegex)![index]

        return (
            <Fragment key={index}>
                {segment}
                <Link href={match} className={className} target='_blank' rel='noopener noreferrer'>
                    {match}
                </Link>
            </Fragment>
        )
    })
}

export default LinkifyText
