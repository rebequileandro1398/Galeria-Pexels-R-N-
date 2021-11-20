import React from 'react'
import { View, FlatList } from 'react-native'
import Cards from './Cards'


const ImageList = ({photos}) => {

    const Item = ({item}) => <Cards image={item}/>


    return (
        <View>
            <FlatList data={photos} renderItem={Item} keyExtractor={(item)=> item.id} numColumns={2}/>
        </View>
    )
}
export default ImageList
