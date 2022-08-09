import React from 'react'
import {
    View,
} from 'react-native'

import {
    MessengerIcon,
    FavoriteIcon,
    CommentIcon,
    SaveIcon,
} from '../../../global/styles/icons'

import { ButtonIcon } from '../../atoms/ButtonIcon/ButtonIcon'

import { styles } from '../../../pages/Feed/styles'

export const PostOptions = () => {
    return (
        <View style={styles.postOptions}>
            <View style={styles.postOptionsSide}>
                <ButtonIcon icon={FavoriteIcon} />
                <ButtonIcon icon={CommentIcon} />
                <ButtonIcon icon={MessengerIcon} />
            </View>

            <ButtonIcon icon={SaveIcon} />
        </View>
    )
}