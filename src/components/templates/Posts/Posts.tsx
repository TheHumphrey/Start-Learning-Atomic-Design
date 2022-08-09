import React from 'react'
import { FlatList } from 'react-native'

import { styles } from '../../../pages/Feed/styles'

import { Post, TPostProps } from '../../organisms'

type TProps = {
    data: TPostProps[]
}

export const Posts = ({ data }: TProps) => {
    return (
        <FlatList
            data={data}
            style={styles.posts}
            showsVerticalScrollIndicator={false}
            keyExtractor={post => post.id}
            renderItem={({ item }) => (
                <Post data={item} />
            )}
        />
    )
}