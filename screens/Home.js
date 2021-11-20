import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { getApi } from '../api/pexels'
import ImageList from '../components/ImageList'
const Home = () => {

    const [photos, setPhotos] = useState([])

    const loadImage = async () => {
        const res = await getApi();
        console.log(res.headers)
        setPhotos(res.data.photos)
    }

    useEffect(() => {loadImage()},[])
    return (
        <View>
            <ImageList photos={photos}/>
        </View>
    )
}

export default Home

