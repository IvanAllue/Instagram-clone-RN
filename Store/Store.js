import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as form } from 'redux-form'
import createSagaMiddleware from 'redux-saga'
import functionPrimaria from './Sagas/Sagas'
import CONSTANTES from './Sagas/Constantes'


const reducerPrueba = (state = [0], action) => {
    switch (action.type) {
        case 'AUMENTAR_REDUCERPRUEBA':
            return [...state, 1];


        default:
            return state;
    }
}

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

const reducerDescargarPublicaciones = (state = null, action) => {

    switch (action.type) {
        case CONSTANTES.OBTENER_PUBLICACIONES:
            return [...action.publicaciones]
        default:
            return state
    }
}

const reducerDescargarAutores = (state = null, action) => {

    switch (action.type) {
        case CONSTANTES.OBTENER_AUTORES:
            return [...action.autores]
        default:
            return state
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
        default:
            return state
    }

}


const reducers = combineReducers({
    //reducerPrueba: reducerPrueba
    reducerPrueba,
    form,
    reducerSesion,
    reducerImagenPerfil,
    reducerImagenSeleccionada,
    reducerDatosProfile,
    reducerDescargarPublicaciones,
    reducerDescargarAutores
})

const store = createStore(reducers, applyMiddleware(sagaMiddleware))


sagaMiddleware.run(functionPrimaria)

export default store