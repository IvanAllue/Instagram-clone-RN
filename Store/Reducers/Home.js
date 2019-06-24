import CONSTANTES from '../Sagas/Constantes'


export const reducerDescargarPublicaciones = (state = null, action) => {

    switch (action.type) {
        case CONSTANTES.OBTENER_PUBLICACIONES:
            return [...action.publicaciones].reverse()
        default:
            return state
    }
}
export const reducerDatosProfile = (state = { datosUser: null }, action) => {
    switch (action.type) {
        case CONSTANTES.GUARDAR_DATOS_USER:
            return { datosUser: action.datos }
        case CONSTANTES.LIMPIAR_USUARIO:
            return null
        default:
            return state
    }
}

export const reducerDatosProfileAjeno = (state = { datosUser: null }, action) => {
    switch (action.type) {
        case CONSTANTES.GUARDAR_DATOS_USER_PERFIL_AJENO:
            return { datosUser: action.datos }
        case CONSTANTES.LIMPIAR_USUARIO:
            return null
        default:
            return state
    }
}

export const reducerDescargarAutores = (state = null, action) => {

    switch (action.type) {
        case CONSTANTES.OBTENER_AUTORES:
            return [...action.autores].reverse()
        default:
            return state
    }
}

export const reducerPublicacionesSeguidos = (state = null, action) => {
    switch (action.type) {
        case CONSTANTES.GUARDAR_PUBLICACIONES_SEGUIDOS_STORE: 
                   
            return [...action.publicacionesArray].reverse()
        default:
            return state
    }
}
export const reducerUsuariosSeguidos = (state = null, action) => {
    switch (action.type) {
        case CONSTANTES.GUARDAR_USUARIOS_SEGUIDOS_STORE:            
        
            return [...action.autoresArray].reverse()
        default:
            return state
    }
}


