import CONSTANTES from '../Sagas/Constantes'

export const reducerSesion = (state = null, action) => {
    switch (action.type) {
        case CONSTANTES.ESTABLECER_SESION:

            return { user: action.datos }
        case CONSTANTES.CERRAR_SESION:
            return null;
        default:
            return state;
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

export const reducerImagenPerfil = (state = { imagen: null }, action) => {
    switch (action.type) {
        case CONSTANTES.ESTABLECER_IMAGEN_PERFIL:
            return { imagen: action.imagen }
        case CONSTANTES.LIMPIAR_IMAGEN_PERFIL:
            return { imagen: null }
        default:
            return state;
    }
}