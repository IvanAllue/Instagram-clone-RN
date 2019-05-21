import React, { Component } from 'react'
import { AppRegistry, Text, View, Button, StyleSheet, TouchableHighlight, Dimensions, Image, TouchableOpacity } from 'react-native'
import SignInForm from './Formas/SignInForm'
import { Font, AppLoading } from "expo";
import { autenticacion, auth } from '../../Store/Servicios/Firebase'

var width = Dimensions.get('window').width;
export default class SignIn extends Component {


    async loginWithFacebook() {
        //ENTER YOUR APP ID 
        const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('363665401174622', { permissions: ['public_profile'] })
    
        if (type == 'success') {
    
          const credential = auth.FacebookAuthProvider.credential(token)
    
          autenticacion.signInWithCredential(credential).then((values) => {console.log(values)})
          .catch((error) => {
            console.log(error)
          })
        }
      }


    render() {


        return (
            <View style={styles.container}>
                <View style={{
                    flex: 1, alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Image style={{ width: 180, height: 70, resizeMode: 'stretch' }} source={require('../../assets/logoinsta.png')} />
                    <SignInForm />
                    <TouchableOpacity style={styles.btnFacebook}
                        onPress={() => {
                            this.loginWithFacebook()
                        }}
                    >

                        <Text style={{ color: '#1594F6', fontWeight: 'bold' }}>  <Image style={{ width: 16, height: 16, resizeMode: 'stretch' }} source={require('../../assets/facebook.png')} />  Iniciar sesion con Facebook</Text>
                    </TouchableOpacity>
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

    },
    btnFacebook: {
        marginTop: 40
    }

});