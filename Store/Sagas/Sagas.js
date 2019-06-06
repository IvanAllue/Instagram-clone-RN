import { takeEvery, call, select, put } from 'redux-saga/effects'
import { autenticacion, baseDatos, storage } from '../Servicios/Firebase'
import CONSTANTES from '../Sagas/Constantes'


//
//  TRABAJAR CON BD
//

const registroEnFirebase = values =>
    autenticacion.createUserWithEmailAndPassword(values.correo, values.password).then(values => values)

const loginEnFirebase = ({ correo, password }) =>
    autenticacion.signInWithEmailAndPassword(correo, password).then(success => success).catch(error => error)

const registroEnBaseDatos = ({ uid, email, nombre }) => baseDatos.ref('Users/' + uid).set({
    usuario: nombre,
    email: email,
    fotoPerfil: 'https://biospain2018.org/wp-content/uploads/2018/08/everis-logo.jpg'
}).then(response => response)

const actualizarPerfilBD = ({uid, url}) => baseDatos.ref('Users/' + uid).update({
    fotoPerfil: url
}).then(response => response)

const escribirAutorPublicaciones = ({ uid, key }) => baseDatos.ref(`autor-publicaciones/${uid}`).update({ [key]: true })

const subirFotoDatabase = (datos) => {
    console.log('====================================');
    console.log(datos);
    console.log('====================================');
    return baseDatos.ref('publicaciones/').push({
        url: datos.url,
        texto: datos.pie,
        uid: datos.uid
    })
}

const conseguirUsuarioBd = (uid) => baseDatos.ref('Users/' +uid).once('value', function (snapshot) {        
        return snapshot.val()
     })
//
// TRABAJAR CON FOTOS
//
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

const subirImagenStorage = async (imagen) => {
    console.log('====================================');
    console.log(imagen);
    console.log('====================================');
    if (imagen != null) {
        const splitName = imagen.split('/')
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
            xhr.open('GET', imagen, true);
            xhr.send(null);
        });
        const ref = storage.ref(name)
        const snapshot = await ref.put(blob);
        blob.close();
        return await snapshot.ref.getDownloadURL();
    }
}

//
//  SAGAS
//

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
        const autor = yield select(state => state.reducerSesion)
        

        const actualizar = yield call(actualizarPerfilBD, {uid: autor.user.uid, url: urlFoto})

        const usuario = yield call(conseguirUsuarioBd, values.datos)
        //yield put({type:CONSTANTES.GUARDAR_DATOS_USER, datos: usuario})
          yield put({type: CONSTANTES.GUARDAR_DATOS_USER, datos: usuario})
    } catch (error) {
    }
}

function* sagaLoginFacebook(values) {
    console.log('====================================');
    console.log(values);
    console.log('====================================');
}

function* sagaSubirImagen(values) {
    const autor = yield select(state => state.reducerSesion)
    const urlFoto = yield call(subirImagenStorage, values.datos.imagen)
    datosFinales = { url: urlFoto, pie: values.datos.pie, uid: autor.user.uid }
    const subirFoto = yield call(subirFotoDatabase, datosFinales)
    const resultadoEscribirAutorPublicaciones = yield call(escribirAutorPublicaciones, { uid: autor.user.uid, key: subirFoto.key })
}

function* sagaConseguirUsuario(values){


    const usuario = yield call(conseguirUsuarioBd, values.datos)
   //yield put({type:CONSTANTES.GUARDAR_DATOS_USER, datos: usuario})
     yield put({type: CONSTANTES.GUARDAR_DATOS_USER, datos: usuario})
 
}

export default function* functionPrimaria() {
    yield takeEvery(CONSTANTES.REGISTRO, sagaRegistro)
    yield takeEvery(CONSTANTES.LOGIN, sagaLogin)
    //  yield takeEvery(CONSTANTES.LOGIN_FACEBOOK, sagaLoginFacebook)
    yield takeEvery(CONSTANTES.CONFIRMAR_CAMBIOS_PERFIL, sagaImagenPerfil)
    yield takeEvery(CONSTANTES.SUBIR_IMAGEN, sagaSubirImagen)
    yield takeEvery(CONSTANTES.CONSEGUIR_USUARIO, sagaConseguirUsuario)
    console.log('Desde nuestra funcion generadora')
}