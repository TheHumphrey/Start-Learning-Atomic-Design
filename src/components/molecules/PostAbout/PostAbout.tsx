import React from 'react'
import {
    View,
    Image,
    Text,
    ImageProps
} from 'react-native'

import { styles } from '../../../pages/Feed/styles'

type TProps = {
    avatar: ImageProps
    likes: string
}

export const PostAbout = ({ avatar, likes }: TProps) => {
    return (
        <View style={styles.postAbout}>
            <Image source={avatar} style={styles.lastLiked} />
            <Text style={styles.likes}>{likes}</Text>
        </View>
    )
}