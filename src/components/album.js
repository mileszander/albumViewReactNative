import React, { Component} from 'react'
import {Text, View, Image, Linking} from 'react-native';
import Card from './card'
import CardItem from './cardItem'
import Button from './button'

const Album = ({album}) => {
    const {artist, title, thumbnail_image, image, url} = album

    return (

        <Card>
            <CardItem>
                <View style={styles.thumbnailContainerStyle}>
                    <Image style={styles.thumbnailStyle}
                    source={{uri: thumbnail_image }}/>
                </View>
                <View style={styles.albumInfoStyle}>
                    <Text style={styles.headerTextStyle}>
                        {title}
                    </Text>
                    <Text>
                        {artist}
                    </Text>
                    </View>
            </CardItem>
            <CardItem>
            <Image style={styles.imageStyle} 
                    source={{uri: image }}/>
            </CardItem>
            <CardItem>
                <Button buttonText={'Buy Now'}
                    onPress={()=> {
                    Linking.openURL(url)
                }}/>
            </CardItem>
        </Card>
    )
}

const styles = {
    albumInfoStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',

    },
    headerTextStyle : {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
}

export default Album;