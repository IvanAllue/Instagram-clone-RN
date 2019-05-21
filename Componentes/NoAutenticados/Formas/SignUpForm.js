import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import { Field, reduxForm } from 'redux-form'

import { autenticacion } from '../../../Store/Servicios/Firebase'


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
                secureTextEntry={props.input.name === 'password' || props.input.name === 'confirmacion' ? true : false}
                onBlur={props.input.onBlur}
                style={styles.input}
            />

            {props.meta.error && props.meta.touched &&
                <Text style={{ color: '#808080', fontSize: 12, fontWeight: 'bold', }}>{props.meta.error}</Text>
            }
        </View>
    )
}

const validate = (values) => {
    const errors = {}
    if (!values.nombre) {
        errors.nombre = 'Nombre requerido'
    } else if (values.nombre.length < 5) {
        errors.nombre = 'El nombre debe contener minimo 5 caracteres'
    } else if (values.nombre.length > 25) {
        errors.nombre = 'El nombre debe contener maximo 25 caracteres'
    }

    if (!values.correo) {
        errors.correo = 'Correo requerido'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.correo)) {
        errors.correo = 'Correo invalido'
    }

    if (!values.password) {
        errors.password = 'Contraseña requerida'
    } else if (values.password.length < 5) {
        errors.password = 'La contraseña debe contener minimo 5 caracteres'
    } else if (values.password.length > 25) {
        errors.password = 'La contraseña debe contener maximo 25 caracteres'
    }

    if (!values.confirmacion) {
        errors.confirmacion = 'Validacion de contraseña requerido'
    } else if (values.password !== values.confirmacion) {
        errors.confirmacion = 'Las contraseñas no coinciden'
    }

    return errors
}


const SignUpForm = (props) => {

    return (
        <View>
            <Field name="correo" component={fieldNombre} ph='Email' />
            <Field name="nombre" component={fieldNombre} ph='Nombre Usuario' />
            <Field name="password" component={fieldNombre} ph='Contraseña' />
            <Field name="confirmacion" component={fieldNombre} ph='Repetir Contraseña' />
            <TouchableOpacity
                onPress={props.handleSubmit((values) => {
                    autenticacion.createUserWithEmailAndPassword(values.correo, values.password).then((values) =>{

                    })
                    .catch(function (error) {
                        console.log(error)
                    });
                })}
                underlayColor="white"
                style={styles.boton}
            >
                <Text style={{ textAlign: 'center', color: '#fff', fontWeight: 'bold' }}>Registrarse</Text>
            </TouchableOpacity>
        </View>
    )
}


export default reduxForm({
    form: 'SignUpForm',
    validate
})(SignUpForm)

const styles = StyleSheet.create({
    input: {
        borderColor: '#E1E1E1',
        borderWidth: 1,
        width: width,
        marginTop: 10,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#FAFAFA'
    },
    boton: {
        backgroundColor: '#1194F6',
        marginTop: 10,
        padding: 10,
        borderRadius: 5,

    }
});