import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as form } from 'redux-form'
import createSagaMiddleware from 'redux-saga'
import functionPrimaria from './Sagas/Sagas'

//DATOS USUARIO PERFILES

import {reducerSesion} from './Reducers/DatosUsuarioPerfil' //-> Obtiene los datos de usuario desde firebase
import {reducerDatosProfile} from './Reducers/DatosUsuarioPerfil' //Requiere: uid -> Obtiene los datos del usuario de la BD
import {reducerImagenPerfil} from './Reducers/DatosUsuarioPerfil' //-> Obtiene la url de la imagen que se va a cambiar por el usuario

//ADD

import {reducerImagenSeleccionada} from './Reducers/Add' //-> Imagen que el usuario piensa subir en un post

//HOME

import {reducerDescargarPublicaciones} from './Reducers/Home' //-> Obtiene todas las publicaciones
import {reducerDescargarAutores} from './Reducers/Home'  //-> Obtiene los datos de usuario de la BD de los usuarios que tienen una publicacion minimo subida
import {reducerPublicacaionesPerfilAjeno} from './Reducers/Home' //Requiere: uid -> Obtiene todas las publicaciones subidas por un usuario
import {reducerUsuariosLike} from './Reducers/Home' //Obtiene los usuarios BD que han dado like a una foto
import {reducerUidsUsuarios} from './Reducers/Home' //Obtiene la uid de los usuarios que han dado like a una foto

//NO AUTENTICADAS

import {reducerErrorLogin} from './Reducers/NoAutenticadas' //Comprueba si hay errores en el envio de formulario de login
import {reducerErrorSignup} from './Reducers/NoAutenticadas' //Comprueba si hay errores en el envio de formulario de signUp


const sagaMiddleware = createSagaMiddleware()

const reducers = combineReducers({
    form,
    reducerSesion, 
    reducerDatosProfile,
    reducerImagenPerfil, 

    reducerImagenSeleccionada, 
    
    reducerDescargarPublicaciones, 
    reducerDescargarAutores, 
    reducerPublicacaionesPerfilAjeno,
    reducerUsuariosLike,
    reducerUidsUsuarios,
    
    reducerErrorLogin,
    reducerErrorSignup
})

const store = createStore(reducers, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(functionPrimaria)
export default store