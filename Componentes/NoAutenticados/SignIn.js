import React, { Component } from 'react'
import { AppRegistry, Text, View, Button, StyleSheet, TouchableHighlight, Dimensions, Image } from 'react-native'
import SignInForm from './Formas/SignInForm'
import { Font, AppLoading } from "expo";

var width = Dimensions.get('window').width;
export default class SignIn extends Component {
   

   


    render() {
      
        
        return (
            <View style={styles.container}>
                <View style={{
                    flex: 1, alignItems: 'center',
                    justifyContent: 'center',
                }}>
               <Image style={{width: 200, height: 70, resizeMode: 'stretch'}} source={require('../../assets/logoinsta.png')}  />
               
                    
                    <SignInForm />
                </View>

                <TouchableHighlight
                    onPress={() => {
                        this.props.navigation.navigate('SignUp')
                    }}
                >
                    <Text style={styles.registrar}>¿No tienes cuenta? <Text style={{ color: '#000', fontWeight: 'bold' }}>Regístrate</Text> </Text>
                </TouchableHighlight>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
   
    registrar: {
        color: '#808080',
        width: width,
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        borderTopColor: '#808080',
        borderTopWidth: 0.5,
       
    }

});