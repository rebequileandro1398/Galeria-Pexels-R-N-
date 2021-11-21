import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/core'


const Cards = ({image}) => {

    const navigation = useNavigation()

    return (
        <TouchableOpacity style={styles.cardImage} onPress={()=> navigation.navigate('ImageScreen', { image })}>
            <Image style={styles.img} source={{uri: image.src.medium 
            ? image.src.medium
            : 'https://acorepuestos.cl/imagenes/productos/sinFoto.jpg'}} style={{height: 130, width: '100%'}}/>
        </TouchableOpacity>
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
        borderRadius: 6
    },
    img: {
        borderRadius: 6
    }
})
export default Cards
