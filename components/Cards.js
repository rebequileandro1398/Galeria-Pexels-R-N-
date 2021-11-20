import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const Cards = ({image}) => {
    return (
        <View style={styles.cardImage}>
            <Image source={{uri: image.src.small 
            ? image.src.small
            : 'https://acorepuestos.cl/imagenes/productos/sinFoto.jpg'}} style={{height: 100, width: '100%'}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    cardImage: {
        display: 'flex',
        width: '50%',
        margin: 2,
        justifyContent: 'space-between',
        backgroundColor: '#2c292c',
        borderWidth: 0,
        borderRadius: 4
    }
})
export default Cards
