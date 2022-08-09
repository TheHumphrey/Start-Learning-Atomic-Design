import React from 'react'
import {
    View,
    Image,
    Text,
    ImageProps
} from 'react-native'

import { ProfileIcon } from '../../../global/styles/icons'

import { styles } from '../../../pages/Feed/styles'

type TProps = {
    username: string
    location: string
}

export const PostHeader = ({ username, location }: TProps) => {
    return (
        <View style={styles.postHeader}>
            <Image source={ProfileIcon} style={styles.postAvatar} />
            <View>
                <Text style={styles.postUsername}>{username}</Text>
                <Text style={styles.postLocation}>{location}</Text>
            </View>
        </View>
    )
}