import { takeEvery, call } from 'redux-saga/effects'

import { autenticacion, baseDatos } from '../Servicios/Firebase'

import CONSTANTES from '../Sagas/Constantes'
const registroEnFirebase = values => 
    autenticacion.createUserWithEmailAndPassword(values.correo, values.password).then(values => values )
const loginEnFirebase = ({correo, password}) =>
    autenticacion.signInWithEmailAndPassword(correo, password).then(success => success)

const registroEnBaseDatos = ({uid, email, nombre} ) => baseDatos.ref('Users/'+uid).set({
    usuario: nombre,
    email: email
})


function* sagaLogin(values){
    
    try {
        const resultado = yield call(loginEnFirebase, values.datos)
        console.log('====================================');
        console.log(resultado);
        console.log('====================================');
    } catch (error) {
        console.log(error);
        
    }
}

function* sagaRegistro(values) {
    try {
        const registro = yield call(registroEnFirebase, values.datos)
        const {email, uid} = registro.user
        const { datos: {nombre}} = values
        
        yield call(registroEnBaseDatos, {uid, email, nombre} )
        
    } catch (error) {
        console.log(error);        
    }
   
}

export default function* functionPrimaria() {
    yield takeEvery(CONSTANTES.REGISTRO, sagaRegistro)
    yield takeEvery(CONSTANTES.LOGIN, sagaLogin)
    console.log('Desde nuestra funcion generadora')
}

