import React from 'react'
import {
    Text,
    TextProps
} from 'react-native'

import { styles } from '../../../pages/Feed/styles'

type TProps = TextProps & {
    value: string
}

export const PostLiked = ({ value }: TProps) => (
    <Text style={styles.likes} >
        {value}
    </Text>
)
