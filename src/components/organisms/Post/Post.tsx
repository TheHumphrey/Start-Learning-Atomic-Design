import React from 'react'
import {
    View,
    Image,
    Text,
    ImageProps
} from 'react-native'

import { PostAbout, PostHeader, PostOptions } from '../../molecules'

import { styles } from './styles'
import { PostDescription, PostPhoto } from '../../atoms'

export type TProfile = {
    id: string
    name: string
    avatar: ImageProps
}

export type TPostProps = {
    id: string
    likes: string
    username: string
    location: string
    cover: ImageProps
    description: string
    lastLiked: TProfile
}

type TProps = {
    data: TPostProps;
}

export const Post = ({ data }: TProps) => {
    return (
        <View style={styles.post}>

            <PostHeader
                username={data.username}
                location={data.location}
            />

            <PostPhoto source={data.cover} />

            <View style={styles.postFooter}>

                <PostOptions />

                <PostAbout
                    avatar={data.lastLiked.avatar}
                    likes={data.likes}
                />

                <PostDescription value={data.description} />
            </View>
        </View>
    )
}