import React, { Component } from 'react'

import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import StackHome from './StackHome'
import StackSearch from './StackSearch'
import Add from './Add'
import StackFollow from './StackFollow'
// import Profile from './Profile'
import DrawerProfile from './DrawerProfile'
import Ionicons from 'react-native-vector-icons/Ionicons';


const RutasAutenticadas = createBottomTabNavigator({
    Home: {
        screen: StackHome,
        navigationOptions: ({ navigation }) => {


            let { routeName } = navigation.state.routes[navigation.state.index]

            let navigationOptions = {}
            if (routeName === 'Comentarios') {
                navigationOptions.tabBarVisible = false;
            }
            return navigationOptions
        },
        
    },
    Search: {
        screen: StackSearch,
        navigationOptions: ({ navigation }) => {
            let { routeName } = navigation.state.routes[navigation.state.index]

            let navigationOptions = {}
            if (routeName === 'Comentarios') {
                navigationOptions.tabBarVisible = false;
            }
            return navigationOptions
        }
    },
    Add: {
        screen: Add,
        navigationOptions: ({ navigation }) => {
            

            let navigationOptions = {}
          
                navigationOptions.tabBarVisible = false;
            
            return navigationOptions
        }
        
    },
    Follow: {
        screen: StackFollow,
        navigationOptions: ({ navigation }) => {
            let { routeName } = navigation.state.routes[navigation.state.index]

            let navigationOptions = {}
            if (routeName === 'Comentarios') {
                navigationOptions.tabBarVisible = false;
            }
            return navigationOptions
        }
    },
    Profile: {
        screen: DrawerProfile
    }
}, {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                    iconName = 'ios-home';
                  }else if (routeName === 'Search'){
                    iconName = 'ios-search';
                  }else if(routeName === 'Add'){
                    iconName = 'ios-add-circle-outline'
                  }else if(routeName === 'Follow'){
                    iconName = `${focused ? 'ios-heart' : 'ios-heart-empty'}`;
                  }else if(routeName === 'Profile'){
                    iconName = 'md-person'
                  }

                  let colorIcon = `${focused ? '#FF5733' : '#000000'}`;
                  return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={colorIcon}/>;
            },
            title: ''
        })
    })
export default createAppContainer(RutasAutenticadas);