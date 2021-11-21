import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Img from './screens/Image';
import { Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import logo from './assets/pex.png'
import lupa from './assets/lupa.png'

const Stack = createNativeStackNavigator()

export default function App() {

  const [openSearch, setOpenSearch] = useState(false)

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='HomeScreen'
          options={{ 
            headerLeft: () => <Image style={styles.logo} source={logo}/>, title: 'Pex App', headerTitleStyle:{ color: '#fff'}, headerStyle:{ backgroundColor: '#334756'},
            headerRight: () => <TouchableOpacity onPress={()=>setOpenSearch(!openSearch)}><Image style={styles.logo} source={lupa} /></TouchableOpacity>
          }}
          >
            {(props)=> <Home {...props} openSearch={openSearch}/>}
          </Stack.Screen>
        <Stack.Screen name='ImageScreen' component={Img}
          options={{ title: 'Pex App', headerTitleStyle:{ color: '#fff'}, headerStyle:{ backgroundColor: '#334756'},}}
        />
      </Stack.Navigator>
      <StatusBar/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 40,
    height: 40,
    marginEnd: 9
  }
})