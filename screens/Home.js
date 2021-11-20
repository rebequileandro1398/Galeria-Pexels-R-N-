import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { getApi } from '../api/pexels'
import ImageList from '../components/ImageList'
import { Input, Button  } from 'react-native-elements'
const Home = ({openSearch}) => {

    const [photos, setPhotos] = useState([])
    const [search, setSearch] = useState('')
    
    console.log(openSearch)
    const loadImage = async (data) => {
        const res = await getApi(data);
        console.log(res.headers)
        setPhotos(res.data.photos)
    }
    useEffect(() => {loadImage()},[])

    const handleSearch = async () => await loadImage(search)

    

    return (
        <>
            {openSearch && <View style={styles.containerInp}>
                <Input placeholder='Search free photos' inputContainerStyle={styles.input} style={{color: '#fff'}} onChangeText={(e)=>setSearch(e)}/>
                <Button title='Search' buttonStyle={styles.btn} onPress={()=> handleSearch()}/>
            </View>
            }
            <View style={styles.home}>
                <ImageList photos={photos}/>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    home: {
        flex:1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        backgroundColor:'#B2B1B117',
        borderRadius: 10,
        padding: 2,
        borderBottomWidth: 0,
        marginTop: 25
    },
    containerInp: {
        backgroundColor: '#334756',
        width: '100%',
        paddingLeft: 10,
        paddingRight: 80,
        flex: 1/5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    btn: {
        backgroundColor: '#229783',
        margin: 'auto'
    }
})

export default Home

