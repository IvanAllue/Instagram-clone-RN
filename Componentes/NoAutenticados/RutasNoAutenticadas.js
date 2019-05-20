import React from 'react';
import { Text, View, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import SignIn from './SignIn'
import SignUp from './SignUp'



const RutasNoAutenticadas = createStackNavigator({
    SignIn: {
        screen: SignIn,
    },
    SignUp: {
        screen: SignUp
    }
},
{
    headerMode: 'none'
}
);

export default createAppContainer(RutasNoAutenticadas);