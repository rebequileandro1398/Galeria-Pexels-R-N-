import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Avatar} from 'react-native-elements'
import { getApi } from '../api/pexels'
import download from '../assets/download.png'
import * as WebBrowser from 'expo-web-browser';
import ImageList from '../components/ImageList'


const Img = ({ route }) => {

    const{image} = route.params

    const [photos, setPhotos] = useState([])
    const loadImage = async () => {
        const res = await getApi();
        setPhotos(res.data.photos)
    }
    useEffect(() => {loadImage()},[])


    const handleProfile = async () => await WebBrowser.openBrowserAsync(image.photographer_url)
    

    return (
        <View style={styles.container}>
            <Image source={{uri: image.src.large2x, height: 350}}/>
            <View style={styles.cont}>
                <View style={styles.containerAvatar}>
                    <Avatar title={image.photographer.split(' ').map(e => e[0]).join('').toUpperCase()} containerStyle={{backgroundColor: image.avg_color}} rounded/>
                    <TouchableOpacity onPress={()=>handleProfile()}>
                        <Text style={{color: '#fff', marginLeft: 10, fontSize: 18}}>{image.photographer}</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => alert('desea guardar esta imagen en su dispositivo?')}>
                    <Image source={download} style={{ width: 35, height: 35,  marginEnd: 9 }}/>
                </TouchableOpacity>
            </View>
            <View>
                <ImageList photos={photos}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerAvatar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    container: {
        backgroundColor: '#0D0D0D',
        flex: 1,
        flexDirection: 'column',
        padding: 6
    },
    cont: {
        display: 'flex',
        paddingVertical: 20,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%'

    }
})


export default Img
