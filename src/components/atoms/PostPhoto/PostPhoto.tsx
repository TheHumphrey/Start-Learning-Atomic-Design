import React from 'react'
import {
    Image,
    ImageProps,
} from 'react-native'

import { styles } from '../../../pages/Feed/styles'

export const PostPhoto = ({ ...rest }: ImageProps) => (
    <Image
        {...rest}
        style={styles.cover}
    />
)