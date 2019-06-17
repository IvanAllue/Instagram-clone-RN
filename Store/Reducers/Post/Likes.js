import CONSTANTES from '../../Sagas/Constantes'


export const reducerUsuariosLike = (state = null, action) => {
    switch (action.type) {
        case CONSTANTES.PONER_USUARIOS_LIKE:
            
            return [...action.usuariosLike]

        default:
            return state;
    }
}
export const reducerUidsUsuarios = (state = null, action) => {
    switch (action.type) {
        case CONSTANTES.CONSEGUIR_UID_LIKES:
            
            return [...action.usuariosId]
        default:
            return state;
    }
}