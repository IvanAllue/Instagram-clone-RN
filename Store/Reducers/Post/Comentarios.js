import CONSTANTES from '../../Sagas/Constantes'

export const reducerComentarios = (state = null, action) => {
    switch (action.type) {
        case CONSTANTES.COMENTARIOS_STORE_TODOS:
            return action.datos.reverse()
        case CONSTANTES.COMENTARIOS_STORE_UNO:            
            return [action.datos, ...state]
            case CONSTANTES.LIMPIAR_COMENTARIOS:
            return null
        default:
            return state;
    }
}
