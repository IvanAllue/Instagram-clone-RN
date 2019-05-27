import React, { Component } from 'react'
import { Text, View, TouchableHighlight, StyleSheet, Dimensions, Image } from 'react-native'

import { createStackNavigator, createAppContainer } from 'react-navigation'
import Home from './Home'
import Autor from './Profile'
import Post from './Post'
import Comentarios from './Comentarios'



const StackHome = createStackNavigator({
    HomeComponent: {
        screen: Home,
        navigationOptions: () => ({
            headerTitle: <Image style={{ width: 110, height: 45, resizeMode: 'stretch' }} source={require('../../assets/logoinsta.png')} />
            ,
          }),

    },
    Autor: {
        screen: Autor
    },
    Post: {
        screen: Post
    },
    Comentarios: {
        screen: Comentarios,
        navigationOptions: () => ({
            headerTitle:'Comentarios'
            ,
          }),

    }

}, {
   title: 'qqq'
});






export default createAppContainer(StackHome);