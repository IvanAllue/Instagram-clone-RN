import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as form } from 'redux-form'
import createSagaMiddleware from 'redux-saga'
import functionPrimaria from './Sagas/Sagas'
import CONSTANTES from './Sagas/Constantes'



const sagaMiddleware = createSagaMiddleware()

const reducerSesion = (state = null, action) => {
    switch (action.type) {
        case CONSTANTES.ESTABLECER_SESION:

            return { user: action.datos }
        case CONSTANTES.CERRAR_SESION:
            return null;
        default:
            return state;
    }
}

const reducerImagenPerfil = (state = { imagen: null }, action) => {
    switch (action.type) {
        case CONSTANTES.ESTABLECER_IMAGEN_PERFIL:
            return { imagen: action.imagen }
        case CONSTANTES.LIMPIAR_IMAGEN_PERFIL:
            return { imagen: null }
        default:
            return state;
    }
}

reducerImagenSeleccionada = (state = { imagenSeleccionada: null }, action) => {
    switch (action.type) {
        case CONSTANTES.IMAGEN_SELECCIONADA:
            return { imagenSeleccionada: action.datos }
        default:
            return state
    }
}



reducerDatosProfile = (state = { datosUser: null }, action) => {
    switch (action.type) {
        case CONSTANTES.GUARDAR_DATOS_USER:
            return { datosUser: action.datos }
        case CONSTANTES.LIMPIAR_USUARIO:
            return null
        default:
            return state
    }
}

const reducerDescargarPublicaciones = (state = null, action) => {

    switch (action.type) {
        case CONSTANTES.OBTENER_PUBLICACIONES:
            return [...action.publicaciones].reverse()
        default:
            return state
    }
}

const reducerDescargarAutores = (state = null, action) => {

    switch (action.type) {
        case CONSTANTES.OBTENER_AUTORES:
            return [...action.autores].reverse()
        default:
            return state
    }
}



const reducerPublicacaionesPerfilAjeno = (state = null, action) => {
    switch (action.type) {
        case CONSTANTES.PUBLICACIONES_PERFIL_AJENO:
            
            return [...action.publicacionesPerfil].reverse();

        default:
            return state;
    }
}

reducerUsuariosLike = (state = null, action) => {
    switch (action.type) {
        case CONSTANTES.PONER_USUARIOS_LIKE:
            
            return [...action.usuariosLike]

        default:
            return state;
    }
}
reducerUidsUsuarios = (state = null, action) => {
    switch (action.type) {
        case CONSTANTES.CONSEGUIR_UID_LIKES:
            
            return [...action.usuariosId]
        default:
            return state;
    }
}

reducerErrorLogin = (state = null, action) => {
    switch (action.type) {
        case CONSTANTES.ERROR_EN_LOGIN:
            
            return action.error
        default:
            return state;
    }
}

reducerErrorSignup = (state = null, action) => {
    switch (action.type) {
        case CONSTANTES.ERROR_EN_SIGNUP:
            
            
            return action.error
        default:
            return state;
    }
}

const reducers = combineReducers({
    form,
    reducerSesion, //LN 11
    reducerImagenPerfil, //LN 22
    reducerImagenSeleccionada, //LN 33
    reducerDatosProfile, //LN 42
    reducerDescargarPublicaciones, //LN 51
    reducerDescargarAutores, //LN 61
    reducerPublicacaionesPerfilAjeno,
    reducerUsuariosLike,
    reducerUidsUsuarios,
    reducerErrorLogin,
    reducerErrorSignup
})

const store = createStore(reducers, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(functionPrimaria)
export default store