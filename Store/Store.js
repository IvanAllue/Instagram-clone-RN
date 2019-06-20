import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as form } from 'redux-form'
import createSagaMiddleware from 'redux-saga'
import functionPrimaria from './Sagas/Sagas'

//DATOS USUARIO PERFILES

import {reducerPublicacaionesPerfilAjeno} from './Reducers/Profile' //Requiere: uid -> Obtiene todas las publicaciones subidas por un usuario
import {reducerConseguirUsuariosFollowerFollow} from './Reducers/Profile' //Requiere: uid -> Obtiene todas las publicaciones subidas por un usuario

import {reducerImagenPerfil} from './Reducers/Profile' //-> Obtiene la url de la imagen que se va a cambiar por el usuario

//ADD

import {reducerImagenSeleccionada} from './Reducers/Add' //-> Imagen que el usuario piensa subir en un post

//HOME

import {reducerDescargarPublicaciones} from './Reducers/Home' //-> Obtiene todas las publicaciones
import {reducerDatosProfile} from './Reducers/Home' //Requiere: uid -> Obtiene los datos del usuario de la BD
import {reducerDatosProfileAjeno} from './Reducers/Home' //Requiere: uid -> Obtiene los datos del usuario de la BD

import {reducerDescargarAutores} from './Reducers/Home'  //-> Obtiene los datos de usuario de la BD de los usuarios que tienen una publicacion minimo subida


//NO AUTENTICADAS

import {reducerErrorLogin} from './Reducers/NoAutenticadas' //Comprueba si hay errores en el envio de formulario de login
import {reducerErrorSignup} from './Reducers/NoAutenticadas' //Comprueba si hay errores en el envio de formulario de signUp
import {reducerSesion} from './Reducers/NoAutenticadas' //-> Obtiene los datos de usuario desde firebase

//PUBLICACIONES

import {reducerComentarios} from './Reducers/Post/Comentarios' //Obtiene los comentarios de una publicacion
import {reducerUsuariosLike} from './Reducers/Post/Likes' //Obtiene los usuarios BD que han dado like a una foto
import {reducerUidsUsuarios} from './Reducers/Post/Likes' //Obtiene la uid de los usuarios que han dado like a una foto

import {reducerUsuariosBuscados} from './Reducers/Search' //Obtiene la uid de los usuarios que han dado like a una foto

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
    reducerErrorSignup,
    
    reducerComentarios,

    reducerUsuariosBuscados,

    reducerDatosProfileAjeno,

    reducerConseguirUsuariosFollowerFollow
})

const store = createStore(reducers, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(functionPrimaria)
export default store