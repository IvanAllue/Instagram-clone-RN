import CONSTANTES from '../Sagas/Constantes'

export const reducerDescargarNotificacionesFollowTu = (state = null, action) => {

    switch (action.type) {
        case CONSTANTES.GUARDAR_STORE_NOTIFICACIONES_FOLLOW_TU:
            
            return action.notificacionesPropias
        default:
            return state
    }
}

export const reducerDescargarNotificacionesFollowAll = (state = null, action) => {

    switch (action.type) {
        case CONSTANTES.GUARDAR_STORE_NOTIFICACIONES_FOLLOW:
            console.log(action);
            
            return state
        default:
            return state
    }
}