import React from 'react'
import {
    View,
    Image,
    Text,
    ImageProps
} from 'react-native'

import { ProfileIcon } from '../../../global/styles/icons'

import { styles } from './styles'
import { PostAvatar, PostLocation, PostUsername } from '../../atoms'

type TProps = {
    username: string
    location: string
}

export const PostHeader = ({ username, location }: TProps) => {
    return (
        <View style={styles.postHeader}>
            <PostAvatar source={ProfileIcon} />
            <View>
                <PostUsername value={username} />
                <PostLocation value={location} />
            </View>
        </View>
    )
}