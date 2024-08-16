'use client'
import type { FC } from 'react'
import classnames from '@shared/lib/classnames'
import { type PopupType, useAlertStore } from '@shared/state'
import Icon from '@shared/ui/Icon'
import Space from '@shared/ui/Space'
import Spinner from '@shared/ui/Spinner'
import Text from '@shared/ui/Typography'
import s from './Alert.module.scss'

export const AlertProvider: FC = () => {
    const popups = useAlertStore((state) => state.popups)

    return (
        <div className={classnames(s.container, !popups.length && s.empty)} id='alert-container'>
            {popups.map((item, index) => (
                <AlertComponent key={index} popup={item} />
            ))}
        </div>
    )
}

const AlertComponent: FC<{ popup: PopupType }> = ({ popup }) => {
    const closePopup = useAlertStore((state) => state.closePopup)

    return (
        <div className={classnames(s.main, s[popup.type], popup.isOpen ? s.opened : s.hidden)}>
            <div className={s.main_block}>
                <Icon className={s.main_icon} name={popup.type} />
                <Space direction='vertical' gap='2' grow>
                    {popup.title && (
                        <Text size='18' weight='500' lineHeight='100'>
                            {popup.title}
                        </Text>
                    )}
                    <Text>{popup.text}</Text>
                </Space>
            </div>
            {popup.type !== 'loading' && (
                <button className={s.main_close} onClick={() => closePopup(popup.id)} type='button'>
                    <Icon name='close' />
                </button>
            )}
        </div>
    )
}
