import { takeEvery, call, select, put, all } from 'redux-saga/effects'
import { autenticacion, baseDatos, storage } from '../Servicios/Firebase'
import CONSTANTES from '../Sagas/Constantes'
import { auth } from 'firebase';


//
// SAGA REGISTRO
//

const registroEnFirebase = values =>
    autenticacion.createUserWithEmailAndPassword(values.correo, values.password).then(values => values).catch(() => true)

const registroEnBaseDatos = ({ uid, email, nombre }) => baseDatos.ref('Users/' + uid).set({
    usuario: nombre,
    email: email,
    fotoPerfil: 'https://biospain2018.org/wp-content/uploads/2018/08/everis-logo.jpg',
}).then(response => response)

const listaUsuarios = ({ uid, nombre }) => baseDatos.ref('ListaUsuarios/' + nombre).set({
    uid: uid
})

const comprobarNombre = ({ nombre }) => baseDatos.ref('ListaUsuarios/' + nombre).once('value').then(snapshot => {

    if (snapshot.val() == null) {
        console.log('nulo');

        return false
    } else {
        return true
    }

}).catch(snapshot => false)

function* sagaRegistro(values) {
    try {
        const { datos: { nombre } } = values
        const existe = yield call(comprobarNombre, { nombre })
        console.log(existe);

        if (existe) {
            error = 1
            yield put({ type: CONSTANTES.ERROR_EN_SIGNUP, error })
        } else {
            const registro = yield call(registroEnFirebase, values.datos) //LN 10
            if (registro == true) {
                error = 0
                yield put({ type: CONSTANTES.ERROR_EN_SIGNUP, error })
            } else {
                error = false
                yield put({ type: CONSTANTES.ERROR_EN_SIGNUP, error })
                const { email, uid } = registro.user
                yield call(registroEnBaseDatos, { uid, email, nombre })  //LN 13
                yield call(listaUsuarios, { uid, nombre })
            }


        }






    } catch (error) {
        console.log(error);
    }
}

//
//LOGIN CORREO
//

const loginEnFirebase = ({ correo, password }) =>
    autenticacion.signInWithEmailAndPassword(correo, password).catch(error => true)

function* sagaLogin(values) {
    try {
        const resultado = yield call(loginEnFirebase, values.datos)   //LN 34    
        if (resultado == true) {
            error = true
            yield put({ type: CONSTANTES.ERROR_EN_LOGIN, error })
        } else {
            error = false
            yield put({ type: CONSTANTES.ERROR_EN_LOGIN, error })
        }

    } catch (error) {
        console.log(error);
    }
}


//
//IMAGEN PERFIL
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

const actualizarPerfilBD = ({ uid, url }) => baseDatos.ref('Users/' + uid).update({
    fotoPerfil: url
}).then(response => response)

const conseguirUsuarioBd = (uid) => baseDatos.ref('Users/' + uid).once('value', function (snapshot) {
    return snapshot.val()
}).catch(() => false)

function* sagaImagenPerfil(values) {
    try {
        const imagen = yield select(state => state.reducerImagenPerfil)
        const urlFoto = yield call(subirFotoPerfil, imagen) //LN 50
        const autor = yield select(state => state.reducerSesion)


        const actualizar = yield call(actualizarPerfilBD, { uid: autor.user.uid, url: urlFoto }) //LN 75

        const usuario = yield call(conseguirUsuarioBd, values.datos) //LN 79
        //yield put({type:CONSTANTES.GUARDAR_DATOS_USER, datos: usuario})
        yield put({ type: CONSTANTES.GUARDAR_DATOS_USER, datos: usuario })
    } catch (error) {
    }
}

//
// LOGIN FACEBOOK
//


function* sagaLoginFacebook(values) {



    let uid = values.datos.user.uid

    const usuario = yield call(conseguirUsuarioBd, uid) //LN 79

    if (usuario == false) {
        let email = values.datos.additionalUserInfo.profile.email
        let nombre = values.datos.additionalUserInfo.profile.name
        yield call(registroEnBaseDatos, { uid, email, nombre })  //LN 13

    }




}


//
// SUBIR IMAGEN
//

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

const escribirAutorPublicaciones = ({ uid, key }) => baseDatos.ref(`autor-publicaciones/${uid}`).update({ [key]: true })


function* sagaSubirImagen(values) {
    const autor = yield select(state => state.reducerSesion)
    const urlFoto = yield call(subirImagenStorage, values.datos.imagen) //LN 112
    datosFinales = { url: urlFoto, pie: values.datos.pie, uid: autor.user.uid }
    const subirFoto = yield call(subirFotoDatabase, datosFinales) //LN 139
    const resultadoEscribirAutorPublicaciones = yield call(escribirAutorPublicaciones, { uid: autor.user.uid, key: subirFoto.key }) //LN 150
    yield put({ type: CONSTANTES.BORRAR_IMAGEN })
}

//
// CONSEGUIR USUARIO
//

function* sagaConseguirUsuario(values) {
    const usuario = yield call(conseguirUsuarioBd, values.datos) //LN 79
    yield put({ type: CONSTANTES.GUARDAR_DATOS_USER, datos: usuario })

}

//
// DESCARGAR PUBLICACIONES
//

const conseguirPublicaciones = () => baseDatos.ref('publicaciones/').once('value').then(snapshot => {
    let publicaciones = []
    snapshot.forEach(child => {
        key = child.key
        texto = child.val().texto
        uid = child.val().uid
        url = child.val().url
        likes = child.val().likes

        let publicacion = { key, texto, uid, url, likes }

        publicaciones.push(publicacion)
    })
    return publicaciones

})

const descargarAutor = (uid) => baseDatos.ref('Users/' + uid).once('value').then((snapshot) => snapshot.val())

function* sagaDescargarPublicaciones() {
    const publicaciones = yield call(conseguirPublicaciones) //LN 175

    const autores = yield all(publicaciones.map(publicacion => call(descargarAutor, publicacion.uid))) //LN 191

    const descargarAutores = yield put({ type: CONSTANTES.OBTENER_AUTORES, autores })
    const descargar = yield put({ type: CONSTANTES.OBTENER_PUBLICACIONES, publicaciones })


}


//
// CONSEGUIR PUBLICACIONES
//

const getPublicaciones = (uid) => baseDatos.ref('autor-publicaciones/' + uid).once('value').then(snapshot => {
    let publicaciones = []
    snapshot.forEach(child => {
        publicaciones.push(child.key)
    })
    return publicaciones;
})

const getPublicacion = (publicacion) => baseDatos.ref('publicaciones/' + publicacion).once('value').then(snapshot => snapshot.val())
function* sagaConseguirPublicaciones(values) {
    let uid = values.datos
    const publicaciones = yield call(getPublicaciones, uid)
    const publicacionesPerfil = yield all(publicaciones.map(publicacion => call(getPublicacion, publicacion)))
    const descargarAutores = yield put({ type: CONSTANTES.PUBLICACIONES_PERFIL_AJENO, publicacionesPerfil })

}
const guardarLikeBd = ({ uid, userId }) => baseDatos.ref('publicaciones/' + uid + "/likes").update({ [userId]: true })
function* sagaDarLike(values) {
    const autor = yield select(state => state.reducerSesion)

    let uid = values.datos.uid
    let userId = autor.user.uid

    const darLikeBd = yield call(guardarLikeBd, { uid, userId })

}


const quitarLikeBd = ({ uid, userId }) => baseDatos.ref('publicaciones/' + uid + "/likes/" + userId).remove()
function* sagaQuitarLike(values) {
    const autor = yield select(state => state.reducerSesion)

    let uid = values.datos.uid
    let userId = autor.user.uid

    const darLikeBd = yield call(quitarLikeBd, { uid, userId })

}

function* conseguirUsuariosLikes(values) {
    const publicacion = yield call(getPublicacion, values.datos)

    usuariosId = []

    for (i in publicacion.likes) {
        usuariosId.push(i)
    }

    usuariosLike = []
    for (i in publicacion.likes) {
        const usuario = yield call(conseguirUsuarioBd, i)
        usuariosLike.push(usuario)
    }
    const ponerUidUser = yield put({ type: CONSTANTES.CONSEGUIR_UID_LIKES, usuariosId })
    const ponerUsuariosLike = yield put({ type: CONSTANTES.PONER_USUARIOS_LIKE, usuariosLike })





}


const escribirComentario = ({ publicacionId, comentario }) => baseDatos.ref('publicaciones/' + publicacionId + "/comentarios/").push(comentario)




function* sagaEnviarComentario(values) {

    const autor = yield select(state => state.reducerSesion)


    let comentario = { autorId: autor.user.uid, publicacionId: values.datos.idPublicacion, contenido: values.datos.texto, fotoPerfil: JSON.parse(JSON.stringify(values.datos.datosUser)).fotoPerfil, nombreUsuario: JSON.parse(JSON.stringify(values.datos.datosUser)).usuario }


    const enviarBd = yield call(escribirComentario, { publicacionId: comentario.publicacionId, comentario: comentario })

    const subirComentarioStore = yield put({ type: CONSTANTES.COMENTARIOS_STORE_UNO, datos: comentario })


}

const descargarComentariosBd = (publicacionId) => baseDatos.ref('publicaciones/' + publicacionId + "/comentarios/").once('value').then(snapshot => {
    let arrayComentarios = []
    snapshot.forEach(comentario => {
        arrayComentarios.push(comentario)

    })
    return arrayComentarios
})



function* sagaDescargarComentarios(values) {

    const conseguirComentarios = yield call(descargarComentariosBd, values.datos)


    const subirAlStore = yield put({ type: CONSTANTES.COMENTARIOS_STORE_TODOS, datos: conseguirComentarios })
}

const buscarNombreEnBd = (nombre) => baseDatos.ref('ListaUsuarios/').orderByKey().startAt(nombre).endAt(nombre + "\uf8ff").once('value').then(snapshot => {
    arrayUsuarios = []

    snapshot.forEach(snap => {
        arrayUsuarios.push({ nombre: snap.key, datos: snap.val() })
    })
    return arrayUsuarios

})
function* sagaBuscarUsuarioPorNombre(values) {
    const usuarios = yield call(buscarNombreEnBd, values.datos)

    yield put({ type: CONSTANTES.USUARIOS_BUSCADOS_NOMBRE, usuarios })

}
const seguirUserBd = ({ uid, userId }) => baseDatos.ref('Users/' + uid + '/followers').update(
    {
        [userId]: true
    }
)
const subirContadorSeguidores = ({ uid, cantidad }) => baseDatos.ref('Users/' + uid).update({
    contFollowers: cantidad
})

const seguidoUserBd = ({ uid, userId }) => baseDatos.ref('Users/' + uid + '/follow').update(
    {
        [userId]: true
    }
)
const subirContadorSeguidos = ({ uid, cantidad }) => baseDatos.ref('Users/' + uid).update({
    contFollows: cantidad
})

function* sagaSeguirUsuario(values) {
    const usuario = yield select(state => state.reducerSesion)

    yield call(seguirUserBd, { uid: values.values.uid, userId: usuario.user.uid })

    yield call(subirContadorSeguidores, { uid: values.values.uid, cantidad: values.values.user.contFollowers + 1 })

    usuarioActual = yield call(conseguirUsuarioBd, usuario.user.uid)
    
    yield call(seguidoUserBd, { uid: usuario.user.uid, userId: values.values.uid })

    yield call(subirContadorSeguidos, { uid: usuario.user.uid , cantidad:JSON.parse(JSON.stringify(usuarioActual)).contFollows + 1 })



}

export default function* functionPrimaria() {
    yield takeEvery(CONSTANTES.REGISTRO, sagaRegistro) //LN 19
    yield takeEvery(CONSTANTES.LOGIN, sagaLogin)//LN 37
    yield takeEvery(CONSTANTES.LOGIN_FACEBOOK, sagaLoginFacebook)
    yield takeEvery(CONSTANTES.CONFIRMAR_CAMBIOS_PERFIL, sagaImagenPerfil)//LN 83
    yield takeEvery(CONSTANTES.SUBIR_IMAGEN, sagaSubirImagen)//LN 153
    yield takeEvery(CONSTANTES.CONSEGUIR_USUARIO, sagaConseguirUsuario) //LN 165
    yield takeEvery(CONSTANTES.DESCARGAR_PUBLICACIONES, sagaDescargarPublicaciones) //LN 193
    yield takeEvery(CONSTANTES.CONSEGUIR_PUBLICACIONES, sagaConseguirPublicaciones) //LN 193
    yield takeEvery(CONSTANTES.DAR_LIKE, sagaDarLike) //LN 193
    yield takeEvery(CONSTANTES.QUITAR_LIKE, sagaQuitarLike) //LN 193
    yield takeEvery(CONSTANTES.CONSEGUIR_USUARIOS_LIKES, conseguirUsuariosLikes) //LN 193
    yield takeEvery(CONSTANTES.ENVIAR_COMENTARIO, sagaEnviarComentario) //LN 193
    yield takeEvery(CONSTANTES.DESCARGAR_COMENTARIOS, sagaDescargarComentarios) //LN 193
    yield takeEvery(CONSTANTES.SAGA_BUSCAR_USUARIO_NOMBRE, sagaBuscarUsuarioPorNombre) //LN 193
    yield takeEvery(CONSTANTES.SEGUIR_USUARIO, sagaSeguirUsuario) //LN 193




    console.log('Desde nuestra funcion generadora')
}