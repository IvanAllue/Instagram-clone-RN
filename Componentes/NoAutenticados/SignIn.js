import React, { Component } from 'react'
import { Text, View, Button, StyleSheet, TouchableHighlight } from 'react-native'
import SignInForm from './Formas/SignInForm'
export default class SignIn extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{}}>
                    <Text style={styles.titulo}>Instagram</Text>
                    <SignInForm />
                </View>

                <TouchableHighlight
                    onPress={() => {
                        this.props.navigation.navigate('SignUp')
                    }}
                >
                    <Text style={styles.registrar}>¿No tienes cuenta? <Text style={{ fontWeight: 'bold' }}>Registrate</Text> </Text>
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
    titulo: {
        fontSize: 40
    },
    registrar: {
       
        
        alignItems: 'flex-end',
    }

});