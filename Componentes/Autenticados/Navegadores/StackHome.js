import React, { Component } from 'react'
import { Text, View, TouchableHighlight, StyleSheet, Dimensions, Image } from 'react-native'

import { createStackNavigator, createAppContainer } from 'react-navigation'
import Home from '../Home'
import Autor from '../ProfileItems/ProfileAutor'
import Post from '../Post'
import Comentarios from '../PostItems/Comentarios'
import PostProfileGrande from '../ProfileItems/PostProfileGrande'
import Likes from '../PostItems/Likes'
import FollowersAndFollows from '../ProfileItems/FollowersAndFollows'


const StackHome = createStackNavigator({
    HomeComponent: {
        screen: Home,
        navigationOptions: () => ({
            headerTitle: <Image style={{ width: 110, height: 45, resizeMode: 'stretch' }} source={require('../../../assets/logoinsta.png')} />
            ,
          }),

    },
    AutorProfile: {
        screen: Autor,
        navigationOptions:{
            header: null
        }
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

    },
    PostProfile: {
        screen: PostProfileGrande,
        navigationOptions: () => ({
            headerTitle:'Foto'
            ,
          }),
       
    },Likes:{
        screen: Likes
    },
    FollowersAndFollows: {
        screen: FollowersAndFollows
    }

}, {
   title: 'qqq'
});






export default createAppContainer(StackHome);