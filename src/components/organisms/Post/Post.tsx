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
    ProfileIcon
} from '../../../global/styles/icons'

import { styles } from '../../../pages/Feed/styles'

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
            <View style={styles.postHeader}>
                <Image source={ProfileIcon} style={styles.postAvatar} />
                <View>
                    <Text style={styles.postUsername}>{data.username}</Text>
                    <Text style={styles.postLocation}>{data.location}</Text>
                </View>
            </View>

            <Image source={data.cover} style={styles.cover} />

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