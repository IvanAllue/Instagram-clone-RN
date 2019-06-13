import { createDrawerNavigator, createAppContainer } from 'react-navigation'
import { Dimensions, Text } from 'react-native'
import React, { Component } from 'react'
import DrawerComponent from './DrawerMenu/DrawerComponent'
import Profile from './Profile'
import Configuracion from './DrawerMenu/Configuracion'
import EditarPerfil from './DrawerMenu/EditarPerfil'
import PostProfileGrande from './ProfileItems/PostProfileGrande'
import Likes from './Likes'
var width = Dimensions.get('window').width 
const DrawerNavigator = createDrawerNavigator({
    Profile: {
        screen: Profile,
    },
    Configuracion: {
        screen: Configuracion
    },
    EditarPerfil:{
        screen: EditarPerfil
    },
    PostProfile: {
        screen: PostProfileGrande,
        
       
       
    },
    Likes:{
        screen: Likes
    }
},{
    drawerType: 'slide',
    contentComponent: DrawerComponent,
    drawerPosition: 'right',
    drawerWidth: width * 0.60
},)

export default createAppContainer(DrawerNavigator)