import React from 'react'
import { FlatList } from 'react-native'

import { styles } from '../../../pages/Feed/styles'

import { Post } from '../../organisms'

import { posts } from '../../../utils/posts'

export const Posts = () => {
    return (
        <FlatList
            data={posts}
            style={styles.posts}
            showsVerticalScrollIndicator={false}
            keyExtractor={post => post.id}
            renderItem={({ item }) => (
                <Post data={item} />
            )}
        />
    )
}