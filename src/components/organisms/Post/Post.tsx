import React from 'react'
import {
    View,
    Image,
    Text,
    ImageProps
} from 'react-native'

import {
    MessengerIcon,
    FavoriteIcon,
    CommentIcon,
    SaveIcon,
} from '../../../global/styles/icons'

import { PostHeader } from '../../molecules'

import { styles } from '../../../pages/Feed/styles'
import { PostPhoto } from '../../atoms'

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
                <View style={styles.postOptions}>
                    <View style={styles.postOptionsSide}>
                        <FavoriteIcon style={styles.postOptionsIcon} />
                        <CommentIcon style={styles.postOptionsIcon} />
                        <MessengerIcon style={styles.postOptionsIcon} />
                    </View>

                    <SaveIcon />
                </View>

                <View style={styles.postAbout}>
                    <Image source={data.lastLiked.avatar} style={styles.lastLiked} />
                    <Text style={styles.likes}>{data.likes}</Text>
                </View>
                <Text style={styles.description}>{data.description}</Text>
            </View>
        </View>
    )
}