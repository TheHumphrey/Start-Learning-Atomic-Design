import React from 'react'
import {
    Image,
    ImageProps,
} from 'react-native'

import { styles } from './style'

export const PostAvatar = ({ ...rest }: ImageProps) => (
    <Image
        {...rest}
        style={styles.postAvatar}
    />
)