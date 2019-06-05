import { takeEvery, call, select } from 'redux-saga/effects'

import { autenticacion, baseDatos, storage } from '../Servicios/Firebase'

import CONSTANTES from '../Sagas/Constantes'
const registroEnFirebase = values =>
    autenticacion.createUserWithEmailAndPassword(values.correo, values.password).then(values => values)
const loginEnFirebase = ({ correo, password }) =>
    autenticacion.signInWithEmailAndPassword(correo, password).then(success => success).catch(error => error)

const registroEnBaseDatos = ({ uid, email, nombre }) => baseDatos.ref('Users/' + uid).set({
    usuario: nombre,
    email: email
})




const subirFotoPerfil = async ({ imagen }) => {

    if (imagen != null) {
        const splitName = imagen.uri.split('/')
        const name = [...splitName].pop()

        const blob = await new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onload = function () {
                resolve(xhr.response);
            };
            xhr.onerror = function (e) {
                console.log(e);
                reject(new TypeError('Network request failed'));
            };
            xhr.responseType = 'blob';
            xhr.open('GET', imagen.uri, true);
            xhr.send(null);
        });


        const ref = storage.ref(name)

        const snapshot = await ref.put(blob);


        blob.close();

        return await snapshot.ref.getDownloadURL();
    }
}




function* sagaLogin(values) {
  
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
        const { email, uid } = registro.user
        const { datos: { nombre } } = values

        yield call(registroEnBaseDatos, { uid, email, nombre })

    } catch (error) {
        console.log(error);
    }

}

function* sagaImagenPerfil(values) {
    try {
        const imagen = yield select(state => state.reducerImagenPerfil)
        const urlFoto = yield call(subirFotoPerfil, imagen)
        console.log('====================================');
        console.log(urlFoto);
        console.log('====================================');

    } catch (error) {

    }
}

function* sagaLoginFacebook(values){
   
    console.log('====================================');
    console.log(values);
    console.log('====================================');
}

export default function* functionPrimaria() {
    yield takeEvery(CONSTANTES.REGISTRO, sagaRegistro)
    yield takeEvery(CONSTANTES.LOGIN, sagaLogin)
  //  yield takeEvery(CONSTANTES.LOGIN_FACEBOOK, sagaLoginFacebook)
    yield takeEvery(CONSTANTES.CONFIRMAR_CAMBIOS_PERFIL, sagaImagenPerfil)
    console.log('Desde nuestra funcion generadora')
}