import CONSTANTES from '../Sagas/Constantes'

export const reducerDescargarNotificacionesFollowTu = (state = null, action) => {

    switch (action.type) {
        case CONSTANTES.GUARDAR_STORE_NOTIFICACIONES_FOLLOW_TU:
            
            return action.listaNotificaciones
        default:
            return state
    }
}

export const reducerDescargarNotificacionesFollowAll = (state = null, action) => {

    switch (action.type) {
        case CONSTANTES.GUARDAR_STORE_NOTIFICACIONES_FOLLOW:
            
            return action.listaNotificaciones
        default:
            return state
    }
}