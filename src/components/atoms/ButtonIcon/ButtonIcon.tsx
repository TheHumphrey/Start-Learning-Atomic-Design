import React from 'react'
import { BorderlessButton, BorderlessButtonProps } from 'react-native-gesture-handler'
import { SvgProps } from 'react-native-svg'

import { styles } from '../../../pages/Feed/styles'

type TProps = BorderlessButtonProps & {
    icon: React.FC<SvgProps>
}

export const ButtonIcon = ({ icon: Icon, ...rest }: TProps) => {
    return (
        <BorderlessButton style={styles.postOptionsIcon} {...rest}>
            <Icon />
        </BorderlessButton>
    )
}