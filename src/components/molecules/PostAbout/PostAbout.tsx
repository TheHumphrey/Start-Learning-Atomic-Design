import React from 'react'
import {
    View,
    Image,
    Text,
    ImageProps
} from 'react-native'

import { styles } from '../../../pages/Feed/styles'
import {
    PostLiked,
    PostLikedAvatar
} from '../../atoms'

type TProps = {
    avatar: ImageProps
    likes: string
}

export const PostAbout = ({ avatar, likes }: TProps) => {
    return (
        <View style={styles.postAbout}>
            <PostLikedAvatar source={avatar} />
            <PostLiked value={likes} />
        </View>
    )
}