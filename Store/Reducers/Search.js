import CONSTANTES from '../Sagas/Constantes'

export const reducerUsuariosBuscados = (state = null, action) => {
    switch (action.type) {
        case CONSTANTES.USUARIOS_BUSCADOS_NOMBRE:

            
            return action.usuarios
        case CONSTANTES.LIMPIAR_BUSQUEDA_NOMBRE:
            return null
        default:
            return state;
    }
}
