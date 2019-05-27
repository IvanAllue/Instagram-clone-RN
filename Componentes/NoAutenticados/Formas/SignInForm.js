import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, TouchableOpacity, Dimensions, Button } from 'react-native'
import { Field, reduxForm } from 'redux-form'

var width = Dimensions.get('window').width * 0.8;
const fieldNombre = (props) => {
    return (
        <View>

            <TextInput
                placeholder={props.ph}
                onChangeText={props.input.onChange}
                value={props.input.value}
                keyboardType={props.input.name === 'correo' ? 'email-address' : 'default'}
                autoCapitalize='none'
                secureTextEntry={props.input.name === 'password' ? true : false}
                onBlur={props.input.onBlur}
                style={styles.input}
            />

            {props.meta.error && props.meta.touched &&
                <Text style={{color: '#808080', fontSize: 12, fontWeight: 'bold', }}>{props.meta.error}</Text>
            }
        </View>
    )
}

const validate = (values) => {
    const errors = {}

    if (!values.correo) {
        errors.correo = 'Correo requerido'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.correo)) {
        errors.correo = 'Correo invalido'
    }

    if (!values.password) {
        errors.password = 'Contraseña requerida'
    } else if (values.password.length < 6) {
        errors.password = 'La contraseña debe contener minimo 6 caracteres'
    } else if (values.password.length > 25) {
        errors.password = 'La contraseña debe contener maximo 25 caracteres'
    }
    return errors
}


const SignInForm = (props) => {

    return (
        <View>
            <Field name="correo" component={fieldNombre} ph='Correo Electrónico' />
            <Field name="password" component={fieldNombre} ph='Contraseña' />
            <TouchableOpacity
                style={styles.boton}
                
                
                onPress={props.handleSubmit(props.login)}
                underlayColor="white"
            >
            <Text style={{  textAlign: 'center', color: '#fff', fontWeight: 'bold'}}>Entrar</Text>
            </TouchableOpacity>
        </View>
    )
}


export default reduxForm({
    form: 'SignInForm',
    validate
})(SignInForm)

const styles = StyleSheet.create({
    input: {
        borderColor: '#E1E1E1',
        borderWidth: 1,
        width: width,
        marginTop: 15,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#FAFAFA'
    },
    boton: {
        backgroundColor: '#1194F6',
            marginTop: 15,
            padding: 13,
            borderRadius: 5,
          
    }
});