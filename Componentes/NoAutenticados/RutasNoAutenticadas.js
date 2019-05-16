import React from 'react';
import { Text, View, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'


const SignUp = (props) => {
    const { navigation } = props;
    return (
        <View>
            <Text>Prueba SignUp</Text>
            <Button title="SignIn"
            onPress={()=>{
                navigation.goBack()
            }}
            ></Button>
        </View>
    )
}

const SignIn = (props) => {
    
    const { navigation } = props;
    return (
        <View>
            <Text>Prueba SignIn</Text>
            <Button title="SignUp"
            onPress={()=>{
                navigation.navigate('SignUp')
            }}
            ></Button>
        </View>
    )
}


const RutasNoAutenticadas = createStackNavigator({
    SignIn: {
        screen: SignIn,
    },
    SignUp: {
        screen: SignUp
    }
},
{
    navigationOptions: {
        title: 'qqq'
    }
}
);

export default createAppContainer(RutasNoAutenticadas);