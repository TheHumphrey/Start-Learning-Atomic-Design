import React from 'react'
import { FlatList } from 'react-native'

import { styles } from './styles'

import { Post } from '../../organisms'
import { TPostProps } from '../../organisms/Post/Post'

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