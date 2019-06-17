import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import Add from '../AddComponents/Add'
import Foto from '../AddComponents/Foto'
import NuevaPublicacion from '../AddComponents/NuevaPublicacion'
import React, { Component } from 'react'

import { Text, View, StyleSheet, Button, TouchableHighlight, Image, Dimensions, ScrollView } from 'react-native'
var height = Dimensions.get('window').height;





const AddTabNavigator = createBottomTabNavigator({
  Galeria: {
    screen: Add
  },
  Foto: {
    screen: Foto
  },
  NuevaPublicacion: {
    screen: NuevaPublicacion,
    navigationOptions: ({ navigation }) => {


      let navigationOptions = {}

      navigationOptions.tabBarVisible = false;

      return navigationOptions
  }
  }
}, {

    tabBarComponent: ({ navigation }) => {
      let { routeName } = navigation.state.routes[navigation.state.index]
      
      return (
        <View style={{ height: height * 0.07, flexDirection: "row" }}>
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            {
              routeName == "Galeria" ?
                <TouchableHighlight onPress={() => {
                       navigation.navigate('Galeria')
                    }}>
                  <Text style={{ fontSize: 18, color: '#000' }}>GALERÍA</Text>
                </TouchableHighlight>
                :
                <TouchableHighlight onPress={() => {
                       navigation.navigate('Galeria')
                    }}>
                  <Text style={{ fontSize: 18, color: '#808080' }}>GALERÍA</Text>
                </TouchableHighlight>
            }

          </View>
          <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
          {
            routeName == "Foto" ?
                <TouchableHighlight onPress={() =>  navigation.navigate('Foto')}>
                  <Text style={{ fontSize: 18, color: '#000' }}>FOTO</Text>
                </TouchableHighlight>
                :
                <TouchableHighlight onPress={() =>  navigation.navigate('Foto')}>
                  <Text style={{ fontSize: 18, color: '#808080' }}>FOTO</Text>
                </TouchableHighlight>
            }
          </View>
        </View>
      )
    }
  })

export default createAppContainer(AddTabNavigator);