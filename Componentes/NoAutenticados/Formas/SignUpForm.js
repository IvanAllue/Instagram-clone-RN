import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, TouchableHighlight } from 'react-native'
import { Field, reduxForm } from 'redux-form'


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
            onBlur = {props.input.onBlur}
        />

        { props.meta.error && props.meta.touched &&
            <Text>{props.meta.error}</Text>
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
            <Field name="nombre" component={fieldNombre} ph='nombre' />
            <Field name="correo" component={fieldNombre} ph='correo' />
            <Field name="password" component={fieldNombre} ph='******' />
            <Field name="confirmacion" component={fieldNombre} ph='******' />
            <TouchableHighlight
                onPress={props.handleSubmit((values) => { console.log(values) })}
                underlayColor="white"
            >
                <Text>Registrar</Text>
            </TouchableHighlight>
        </View>
    )
}


export default reduxForm({
    form: 'SignUpForm',
    validate
})(SignUpForm)