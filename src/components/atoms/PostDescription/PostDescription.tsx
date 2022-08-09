import React from 'react'
import {
    Text,
    TextProps
} from 'react-native'

import { styles } from './style'

type TProps = TextProps & {
    value: string
}

export const PostDescription = ({ value }: TProps) => (
    <Text style={styles.description} >
        {value}
    </Text>
)
