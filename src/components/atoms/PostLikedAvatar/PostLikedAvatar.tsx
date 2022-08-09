import React from 'react'
import {
    Image,
    ImageProps,
} from 'react-native'

import { styles } from './style'

export const PostLikedAvatar = ({ ...rest }: ImageProps) => (
    <Image
        {...rest}
        style={styles.lastLiked}
    />
)